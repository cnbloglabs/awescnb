/**
 * 插件以外的配置
 */
import { mergeOptions } from '@tools'

const getThemeOptions = devOptions => {
    const defaultThemeOptions = {
        name: 'reacg',
        color: '#FFB3CC',
        title: '',
        avatar: 'https://api.uomg.com/api/rand.avatar',
        favicon: '',
        contentSize: 'mid',
        headerBackground:
            'https://api.uomg.com/api/rand.avatar',
    }
    const options = mergeOptions(
        defaultThemeOptions,
        window.opts.theme,
        devOptions,
    )
    return options
}

const getLinksOptions = devOptions => {
    const defaultLinks = devOptions || [
        {
            name: '自定义链接',
            link: '',
        },
    ]
    const options = window.opts.links || defaultLinks
    return options
}

const getGithubOptions = devOptions => {
    const defaultThemeOptions = {
        enable: true,
        color: '#ffb3cc',
        url: '',
    }
    const options = mergeOptions(
        defaultThemeOptions,
        window.opts.github,
        devOptions,
    )
    return options
}

const getGiteeOptions = devOptions => {
    const defaultThemeOptions = {
        enable: true,
        color: '#C71D23',
        url: '',
    }
    const options = mergeOptions(
        defaultThemeOptions,
        window.opts.gitee,
        devOptions,
    )
    return options
}

export {
    getThemeOptions,
    getLinksOptions,
    getGithubOptions,
    getGiteeOptions,
}
