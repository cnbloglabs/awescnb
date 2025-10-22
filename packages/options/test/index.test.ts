import { beforeEach, describe, expect, it } from 'vitest'
import {
  getBackgroundOptions,
  getBarragesOptions,
  getCatalogOptions,
  getChartsOptions,
  getClickEffectsOptions,
  getCodeCopyOptions,
  getCodeHighlightOptions,
  getCodeLangOptions,
  getCodeLinenumbersOptions,
  getCodeTrafficLightOptions,
  getDarkModeOptions,
  getDonationOptions,
  getEmojiOptions,
  getGiteeOptions,
  getGithubOptions,
  getImagePreviewOptions,
  getLicenseOptions,
  getLinksOptions,
  getLive2dOptions,
  getLockScreenOptions,
  getMusicPlayerOptions,
  getNotationOptions,
  getNoticeOptions,
  getPostBottomImageOptions,
  getPostListImageOptions,
  getPostTopImageOptions,
  getQrcodeOptions,
  getSignatureOptions,
  getThemeOptions,
  getToolsOptions,
  getWebsiteTagOptions,
} from '../src/index'

// 模拟 window.opts
declare global {
  interface Window {
    opts: object
  }
}
// 设置全局 window 对象
;(global as any).window = {
  opts: {},
}

// 声明全局 window 变量
declare const window: Window

describe('Options 配置测试', () => {
  beforeEach(() => {
    window.opts = {}
  })

  describe('主题配置测试', () => {
    it('应该返回默认主题配置', () => {
      const options = getThemeOptions()

      expect(options).toEqual({
        name: 'reacg',
        color: '#FFB3CC',
        avatar: '',
        headerBackground: '',
      })
    })

    it('应该合并用户主题配置', () => {
      window.opts = {
        theme: {
          name: 'custom-theme',
          color: '#FF0000',
          avatar: 'avatar.jpg',
        },
      }

      const options = getThemeOptions()

      expect(options).toEqual({
        name: 'custom-theme',
        color: '#FF0000',
        avatar: 'avatar.jpg',
        headerBackground: '',
      })
    })

    it('应该支持开发配置覆盖', () => {
      window.opts = {
        theme: {
          name: 'user-theme',
          color: '#00FF00',
        },
      }

      const options = getThemeOptions({
        name: 'dev-theme',
        color: '#0000FF',
      })

      expect(options).toEqual({
        name: 'user-theme', // 用户配置优先级最高
        color: '#00FF00', // 用户配置
        avatar: '', // 默认配置
        headerBackground: '', // 默认配置
      })
    })
  })

  describe('背景配置测试', () => {
    it('应该返回默认背景配置', () => {
      const options = getBackgroundOptions()

      expect(options).toEqual({
        enable: false,
        value: '',
        opacity: 0.85,
        repeat: false,
      })
    })

    it('应该合并用户背景配置', () => {
      window.opts = {
        bodyBackground: {
          enable: true,
          value: 'background.jpg',
          opacity: 0.9,
        },
      }

      const options = getBackgroundOptions()

      expect(options).toEqual({
        enable: true,
        value: 'background.jpg',
        opacity: 0.9,
        repeat: false,
      })
    })
  })

  describe('弹幕配置测试', () => {
    it('应该返回默认弹幕配置', () => {
      const options = getBarragesOptions()

      expect(options).toEqual({
        enable: false,
        opacity: 0.6,
        fontSize: '20px',
        colors: [],
        barrages: [],
        indexBarrages: [],
        postPageBarrages: [],
      })
    })

    it('应该合并用户弹幕配置', () => {
      window.opts = {
        barrages: {
          enable: true,
          opacity: 0.8,
          colors: ['#FF0000', '#00FF00'],
          barrages: ['Hello', 'World'],
        },
      }

      const options = getBarragesOptions()

      expect(options).toEqual({
        enable: true,
        opacity: 0.8,
        fontSize: '20px',
        colors: ['#FF0000', '#00FF00'],
        barrages: ['Hello', 'World'],
        indexBarrages: [],
        postPageBarrages: [],
      })
    })
  })

  describe('目录配置测试', () => {
    it('应该返回默认目录配置', () => {
      const options = getCatalogOptions()

      expect(options).toEqual({
        enable: false,
        position: 'left',
      })
    })

    it('应该合并用户目录配置', () => {
      window.opts = {
        catalog: {
          enable: true,
          position: 'right',
        },
      }

      const options = getCatalogOptions()

      expect(options).toEqual({
        enable: true,
        position: 'right',
      })
    })
  })

  describe('图表配置测试', () => {
    it('应该返回默认图表配置', () => {
      const options = getChartsOptions()

      expect(options.enable).toBe(false)
      expect(options.labels).toEqual([
        'Vue',
        'React',
        'Flutter',
        'Java',
        'NodeJs',
        'TypeScript',
        'CSS',
      ])
      expect(options.datasets).toHaveLength(2)
      expect(options.datasets[0]).toHaveProperty('label', 'My First Chart')
      expect(options.datasets[0]).toHaveProperty(
        'data',
        [65, 59, 90, 81, 56, 55, 40],
      )
    })

    it('应该支持数组键名查找', () => {
      window.opts = {
        charts: {
          enable: true,
          labels: ['Custom1', 'Custom2'],
        },
      }

      const options = getChartsOptions()

      expect(options.enable).toBe(true)
      expect(options.labels).toEqual(['Custom1', 'Custom2'])
    })

    it('应该支持别名键名查找', () => {
      window.opts = {
        chart: {
          enable: true,
          labels: ['Alias1', 'Alias2'],
        },
      }

      const options = getChartsOptions()

      expect(options.enable).toBe(true)
      expect(options.labels).toEqual(['Alias1', 'Alias2'])
    })
  })

  describe('点击特效配置测试', () => {
    it('应该返回默认点击特效配置', () => {
      const options = getClickEffectsOptions()

      expect(options).toEqual({
        enable: false,
        colors: [],
        size: 30,
        maxCount: 10,
      })
    })

    it('应该支持多个键名', () => {
      window.opts = {
        click: {
          enable: true,
          colors: ['#FF0000'],
          size: 50,
        },
      }

      const options = getClickEffectsOptions()

      expect(options).toEqual({
        enable: true,
        colors: ['#FF0000'],
        size: 50,
        maxCount: 10,
      })
    })
  })

  describe('代码相关配置测试', () => {
    it('应该返回默认代码复制配置', () => {
      const options = getCodeCopyOptions()

      expect(options).toEqual({
        enable: false,
      })
    })

    it('应该返回默认代码高亮配置', () => {
      const options = getCodeHighlightOptions()

      expect(options).toEqual({
        dark: 'atomOneDark',
        light: 'atomOneLight',
      })
    })

    it('应该支持代码高亮别名', () => {
      window.opts = {
        highLight: {
          dark: 'github',
          light: 'github',
        },
      }

      const options = getCodeHighlightOptions()

      expect(options).toEqual({
        dark: 'github',
        light: 'github',
      })
    })

    it('应该返回默认代码语言配置', () => {
      const options = getCodeLangOptions()

      expect(options).toEqual({
        enable: false,
      })
    })

    it('应该返回默认代码行号配置', () => {
      const options = getCodeLinenumbersOptions()

      expect(options).toEqual({
        enable: false,
      })
    })

    it('应该支持代码行号多个别名', () => {
      window.opts = {
        lineNumbers: {
          enable: true,
        },
      }

      const options = getCodeLinenumbersOptions()

      expect(options).toEqual({
        enable: true,
      })
    })

    it('应该返回默认代码红绿灯配置', () => {
      const options = getCodeTrafficLightOptions()

      expect(options).toEqual({
        enable: false,
      })
    })
  })

  describe('捐赠配置测试', () => {
    it('应该返回默认捐赠配置', () => {
      const options = getDonationOptions()

      expect(options).toEqual({
        enable: false,
        qrcodes: [],
      })
    })

    it('应该合并用户捐赠配置', () => {
      window.opts = {
        donation: {
          enable: true,
          qrcodes: ['qr1.jpg', 'qr2.jpg'],
        },
      }

      const options = getDonationOptions()

      expect(options).toEqual({
        enable: true,
        qrcodes: ['qr1.jpg', 'qr2.jpg'],
      })
    })
  })

  describe('表情配置测试', () => {
    it('应该返回默认表情配置', () => {
      const options = getEmojiOptions()

      expect(options).toEqual({
        enable: false,
        buttonIcon: '',
        emojiList: [],
      })
    })

    it('应该合并用户表情配置', () => {
      window.opts = {
        emoji: {
          enable: true,
          buttonIcon: 'smile.png',
          emojiList: ['😀', '😃', '😄'],
        },
      }

      const options = getEmojiOptions()

      expect(options).toEqual({
        enable: true,
        buttonIcon: 'smile.png',
        emojiList: ['😀', '😃', '😄'],
      })
    })
  })

  describe('链接配置测试', () => {
    it('应该返回默认链接配置', () => {
      const options = getLinksOptions()

      expect(options).toEqual({
        enable: false,
        value: [],
      })
    })

    it('应该合并用户链接配置', () => {
      window.opts = {
        links: {
          enable: true,
          value: [
            { name: 'GitHub', link: 'https://github.com' },
            { name: 'Blog', link: 'https://blog.com' },
          ],
        },
      }

      const options = getLinksOptions()

      expect(options).toEqual({
        enable: true,
        value: [
          { name: 'GitHub', link: 'https://github.com' },
          { name: 'Blog', link: 'https://blog.com' },
        ],
      })
    })
  })

  describe('图片预览配置测试', () => {
    it('应该返回默认图片预览配置', () => {
      const options = getImagePreviewOptions()

      expect(options).toEqual({
        enable: false,
      })
    })

    it('应该支持图片预览别名', () => {
      window.opts = {
        imagebox: {
          enable: true,
        },
      }

      const options = getImagePreviewOptions()

      expect(options).toEqual({
        enable: true,
      })
    })
  })

  describe('Live2D 配置测试', () => {
    it('应该返回默认 Live2D 配置', () => {
      const options = getLive2dOptions()

      expect(options).toEqual({
        enable: false,
        page: 'all',
        agent: 'pc',
        model: 'haru-01',
        width: 150,
        height: 200,
        position: 'left',
        gap: 'default',
      })
    })

    it('应该合并用户 Live2D 配置', () => {
      window.opts = {
        live2d: {
          enable: true,
          page: 'post',
          agent: 'mobile',
          model: 'custom-model',
        },
      }

      const options = getLive2dOptions()

      expect(options).toEqual({
        enable: true,
        page: 'post',
        agent: 'mobile',
        model: 'custom-model',
        width: 150,
        height: 200,
        position: 'left',
        gap: 'default',
      })
    })
  })

  describe('锁屏配置测试', () => {
    it('应该返回默认锁屏配置', () => {
      const options = getLockScreenOptions()

      expect(options).toEqual({
        enable: false,
        background: '',
        strings: [],
      })
    })

    it('应该合并用户锁屏配置', () => {
      window.opts = {
        lock: {
          enable: true,
          background: 'lock-bg.jpg',
          strings: ['Welcome', 'Hello'],
        },
      }

      const options = getLockScreenOptions()

      expect(options).toEqual({
        enable: true,
        background: 'lock-bg.jpg',
        strings: ['Welcome', 'Hello'],
      })
    })
  })

  describe('深色模式配置测试', () => {
    it('应该返回默认深色模式配置', () => {
      const options = getDarkModeOptions()

      expect(options).toEqual({
        enable: false,
        darkDefault: false,
        autoDark: false,
        autoLight: false,
      })
    })

    it('应该支持深色模式别名', () => {
      window.opts = {
        mode: {
          enable: true,
          darkDefault: true,
        },
      }

      const options = getDarkModeOptions()

      expect(options).toEqual({
        enable: true,
        darkDefault: true,
        autoDark: false,
        autoLight: false,
      })
    })
  })

  describe('音乐播放器配置测试', () => {
    it('应该返回默认音乐播放器配置', () => {
      const options = getMusicPlayerOptions()

      expect(options.enable).toBe(false)
      expect(options.page).toBe('all')
      expect(options.agent).toBe('pc')
      expect(options.autoplay).toBe(false)
      expect(options.volume).toBe(0.4)
      expect(options.lrc).toEqual({
        enable: false,
        type: 1,
        color: '',
      })
      expect(options.audio).toHaveLength(1)
      expect(options.audio[0]).toHaveProperty('name', '404 not found')
      expect(options.audio[0]).toHaveProperty('artist', 'REOL')
    })

    it('应该合并用户音乐播放器配置', () => {
      window.opts = {
        musicPlayer: {
          enable: true,
          page: 'post',
          autoplay: true,
          volume: 0.8,
          lrc: {
            enable: true,
            type: 3,
            color: '#FF0000',
          },
          audio: [
            {
              name: 'Custom Song',
              artist: 'Custom Artist',
              url: 'custom.mp3',
              cover: 'custom.jpg',
              lrc: 'custom.lrc',
            },
          ],
        },
      }

      const options = getMusicPlayerOptions()

      expect(options.enable).toBe(true)
      expect(options.page).toBe('post')
      expect(options.autoplay).toBe(true)
      expect(options.volume).toBe(0.8)
      expect(options.lrc).toEqual({
        enable: true,
        type: 3,
        color: '#FF0000',
      })
      expect(options.audio).toHaveLength(1)
      expect(options.audio[0].name).toBe('Custom Song')
    })
  })

  describe('其他配置测试', () => {
    it('应该返回默认笔注配置', () => {
      const options = getNotationOptions()

      expect(options).toEqual({
        enable: false,
      })
    })

    it('应该返回默认公告配置', () => {
      const options = getNoticeOptions()

      expect(options).toEqual({
        enable: false,
        contents: [],
      })
    })

    it('应该返回默认博文底部图片配置', () => {
      const options = getPostBottomImageOptions()

      expect(options).toEqual({
        enable: false,
        img: '',
        height: '',
      })
    })

    it('应该返回默认版权配置', () => {
      const options = getLicenseOptions()

      expect(options).toEqual({
        enable: false,
        license: true,
        licenseName: '',
        licenseLink: '',
        contents: [],
      })
    })

    it('应该支持版权配置别名', () => {
      window.opts = {
        postSignature: {
          enable: true,
          license: false,
          contents: ['Custom signature'],
        },
      }

      const options = getLicenseOptions()

      expect(options).toEqual({
        enable: true,
        license: false,
        licenseName: '',
        licenseLink: '',
        contents: ['Custom signature'],
      })
    })

    it('应该返回默认博文顶部图片配置', () => {
      const options = getPostTopImageOptions()

      expect(options).toEqual({
        enable: false,
        fixed: false,
        imgs: [],
      })
    })

    it('应该返回默认二维码配置', () => {
      const options = getQrcodeOptions()

      expect(options).toEqual({
        enable: false,
        img: '',
        desc: '',
      })
    })

    it('应该返回默认个性签名配置', () => {
      const options = getSignatureOptions()

      expect(options).toEqual({
        enable: false,
        contents: [],
      })
    })

    it('应该返回默认工具栏配置', () => {
      const options = getToolsOptions()

      expect(options).toEqual({
        initialOpen: true,
        mobileAutoClose: true,
      })
    })

    it('应该返回默认 GitHub 配置', () => {
      const options = getGithubOptions()

      expect(options).toEqual({
        enable: false,
        color: '#ffb3cc',
        url: '',
      })
    })

    it('应该返回默认 Gitee 配置', () => {
      const options = getGiteeOptions()

      expect(options).toEqual({
        enable: false,
        color: '#ffb3cc',
        url: '',
      })
    })

    it('应该返回默认博文列表图片配置', () => {
      const options = getPostListImageOptions()

      expect(options).toEqual({
        enable: false,
        images: [],
      })
    })

    it('应该返回默认站点标签配置', () => {
      const options = getWebsiteTagOptions()

      expect(options).toEqual({
        enable: false,
        title: '',
        favicon: '',
      })
    })
  })

  describe('边界情况测试', () => {
    it('应该处理空配置', () => {
      window.opts = {}

      const themeOptions = getThemeOptions()
      const backgroundOptions = getBackgroundOptions()

      expect(themeOptions.name).toBe('reacg')
      expect(backgroundOptions.enable).toBe(false)
    })

    it('应该处理部分配置', () => {
      window.opts = {
        theme: {
          name: 'partial-theme',
        },
        barrages: {
          enable: true,
        },
      }

      const themeOptions = getThemeOptions()
      const barragesOptions = getBarragesOptions()

      expect(themeOptions.name).toBe('partial-theme')
      expect(themeOptions.color).toBe('#FFB3CC') // 默认值
      expect(barragesOptions.enable).toBe(true)
      expect(barragesOptions.opacity).toBe(0.6) // 默认值
    })

    it('应该处理 null 和 undefined 配置', () => {
      window.opts = {
        theme: null,
        barrages: undefined,
        catalog: {},
      }

      const themeOptions = getThemeOptions()
      const barragesOptions = getBarragesOptions()
      const catalogOptions = getCatalogOptions()

      expect(themeOptions.name).toBe('reacg') // 使用默认配置
      expect(barragesOptions.enable).toBe(false) // 使用默认配置
      expect(catalogOptions.enable).toBe(false) // 使用默认配置
    })
  })

  describe('配置优先级测试', () => {
    it('应该正确处理配置优先级：用户配置 > 开发配置 > 默认配置', () => {
      window.opts = {
        theme: {
          name: 'user-theme',
          color: '#USER_COLOR',
        },
      }

      const options = getThemeOptions({
        name: 'dev-theme',
        color: '#DEV_COLOR',
        avatar: 'dev-avatar.jpg',
      })

      expect(options).toEqual({
        name: 'user-theme', // 用户配置优先级最高
        color: '#USER_COLOR', // 用户配置
        avatar: 'dev-avatar.jpg', // 开发配置（用户没有配置）
        headerBackground: '', // 默认配置
      })
    })

    it('应该正确处理数组配置的合并', () => {
      window.opts = {
        barrages: {
          colors: ['#USER1', '#USER2'],
          barrages: ['User Barrage'],
        },
      }

      const options = getBarragesOptions({
        colors: ['#DEV1', '#DEV2'],
        barrages: ['Dev Barrage'],
      })

      expect(options.colors).toEqual(['#USER1', '#USER2']) // 用户配置优先级最高
      expect(options.barrages).toEqual(['User Barrage']) // 用户配置优先级最高
      expect(options.opacity).toBe(0.6) // 默认配置
    })
  })

  describe('类型安全测试', () => {
    it('应该保持配置对象的引用独立性', () => {
      const options1 = getThemeOptions()
      const options2 = getThemeOptions()

      expect(options1).toEqual(options2)
      expect(options1).not.toBe(options2) // 应该是不同的对象引用
    })

    it('应该正确处理复杂嵌套对象', () => {
      window.opts = {
        musicPlayer: {
          lrc: {
            enable: true,
            type: 3,
            color: '#FF0000',
          },
          audio: [
            {
              name: 'Song 1',
              artist: 'Artist 1',
              url: 'song1.mp3',
              cover: 'cover1.jpg',
              lrc: 'lyrics1.lrc',
            },
          ],
        },
      }

      const options = getMusicPlayerOptions()

      expect(options.lrc.enable).toBe(true)
      expect(options.lrc.type).toBe(3)
      expect(options.lrc.color).toBe('#FF0000')
      expect(options.audio).toHaveLength(1)
      expect(options.audio[0].name).toBe('Song 1')
    })
  })
})
