/**
 * 插件以外的配置
 */
import { mergeOptions, userConfig } from './helper'

/**
 * 皮肤基本配置
 * @param {*} devOptions
 */
export function getThemeOptions(devOptions) {
    const defaultOptions = {
        name: 'reacg',
        color: '#FFB3CC',
        title: '',
        avatar: 'https://api.uomg.com/api/rand.avatar',
        favicon: '',
        contentSize: 'mid', // disabled
        headerBackground: 'https://api.uomg.com/api/rand.avatar',
        log: true,
    }
    return mergeOptions(defaultOptions, userConfig.theme, devOptions)
}

/**
 * 自定义链接
 * @param {*} devOptions
 */
export function getLinksOptions(devOptions) {
    const defaultOptions = [
        {
            name: '自定义链接',
            link: '',
        },
    ]
    return userConfig.links || devOptions || defaultOptions
}

/**
 * GitHub 配置
 * @param {*} devOptions
 */
export function getGithubOptions(devOptions) {
    const defaultOptions = {
        enable: true,
        color: '#ffb3cc',
        url: '',
    }
    return mergeOptions(defaultOptions, userConfig.github, devOptions)
}

/**
 * Gitee 配置
 * @param {*} devOptions
 */
export function getGiteeOptions(devOptions) {
    const defaultOptions = {
        enable: true,
        color: '#C71D23',
        url: '',
    }
    return mergeOptions(defaultOptions, userConfig.gitee, devOptions)
}

/**
 * 首页图片列表配置
 * @param {*} devOptions
 */
export function getIndexListImgOptions(devOptions) {
    const defaultOptions = {
        enable: false,
        imgs: [],
    }
    return mergeOptions(defaultOptions, userConfig.indexListImg, devOptions)
}
