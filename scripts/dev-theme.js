#!/usr/bin/env node

import { exec } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';
import { cancel, isCancel, select, spinner } from '@clack/prompts';
import pc from 'picocolors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const themesDir = path.join(__dirname, '../themes');
const themes = fs
  .readdirSync(themesDir)
  .filter((file) => fs.statSync(path.join(themesDir, file)).isDirectory());

async function main() {
  // 解析命令行参数，支持 --theme 参数或直接传入主题名
  let selectedTheme = null;

  // 检查是否使用了 --theme 参数
  const themeIndex = process.argv.indexOf('--theme');
  if (themeIndex !== -1 && themeIndex + 1 < process.argv.length) {
    selectedTheme = process.argv[themeIndex + 1];
  } else if (process.argv[2] && !process.argv[2].startsWith('--')) {
    // 支持直接传入主题名作为位置参数
    selectedTheme = process.argv[2];
  }

  // 如果没有通过参数指定主题，则显示菜单供用户选择
  if (!selectedTheme) {
    selectedTheme = await showMenu();

    // 检查用户是否取消了选择
    if (isCancel(selectedTheme)) {
      cancel('操作已取消');
      process.exit(0);
    }
  }

  // 验证主题选择
  if (!themes.includes(selectedTheme)) {
    console.error(pc.red(`无效的主题选择: ${selectedTheme}`));
    console.log(pc.yellow('可用主题:'));
    themes.forEach((theme) => {
      console.log(pc.yellow(`  - ${theme}`));
    });
    process.exit(1);
  }

  // 启动选定主题
  await startTheme(selectedTheme);
}

main();

// 显示主题选择菜单
async function showMenu() {
  console.log(pc.blue('请选择要启动的主题:'));

  const selected = await select({
    message: '请选择一个主题:',
    options: themes.map((theme) => ({
      value: theme,
      label: theme,
    })),
  });

  return selected;
}

// 启动选定主题
async function startTheme(themeName) {
  const s = spinner();
  s.start(pc.blue(`正在启动主题: ${themeName}`));

  try {
    // 使用 pnpm 启动选定主题的 dev 脚本
    const child = exec(`pnpm --dir themes/${themeName} dev`, {
      cwd: process.cwd(),
      env: process.env,
    });

    let isReady = false;

    child.stdout?.on('data', (data) => {
      if (data.includes('ready in')) {
        isReady = true;
        s.stop(pc.green(`主题 ${themeName} 启动成功!`));
      }

      // 始终显示 stdout 内容，但服务器启动后不再显示启动信息
      if (!isReady || !data.includes('ready in')) {
        process.stdout.write(data);
      }
    });

    child.stderr?.on('data', (data) => {
      // 始终显示 stderr 内容（错误信息）
      process.stderr.write(data);
    });

    child.on('close', (code) => {
      if (code !== 0 && !isReady) {
        s.stop(pc.red(`启动主题时出错，退出码: ${code}`));
        process.exit(1);
      }
    });
  } catch (error) {
    s.stop(pc.red(`启动主题时出错: ${error.message}`));
    process.exit(1);
  }
}
