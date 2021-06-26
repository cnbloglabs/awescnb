import { isFunction } from 'utils/shared'
import { __DEV__ } from 'constants/env'
import init from './init'

/**
 * 创建上下文
 * @returns {Object} theme context
 */
function createThemeContext() {
    return {
        theme: null,
        config: {
            globalProperties: {},
        },
        plugins: [],
        modules: {},
    }
}

/**
 * 创建 createTheme func
 * @returns {Function} createTheme API
 */
function createThemeAPI() {
    return function createTheme() {
        const context = createThemeContext()
        const installedPlugins = new Set()

        const theme = (context.theme = {
            _context: context,
            version: '3.0',

            get config() {
                return context.config
            },

            set config(v) {
                if (__DEV__) {
                    console.warn(
                        `theme.config cannot be replaced. Modify individual options instead.`,
                    )
                }
            },

            use(plugin, ...options) {
                if (installedPlugins.has(plugin)) {
                    __DEV__ &&
                        console.warn(
                            `Plugin has already been applied to target theme.`,
                        )
                } else if (plugin && isFunction(plugin.install)) {
                    installedPlugins.add(plugin)
                    plugin.install(theme, ...options)
                } else if (isFunction(plugin)) {
                    installedPlugins.add(plugin)
                    plugin(theme, ...options)
                } else if (__DEV__) {
                    console.warn(
                        `A plugin must either be a function or an object with an "install" ` +
                            `function.`,
                    )
                }
                return theme
            },
            module() {},
        })

        return theme
    }
}

/**
 * 在创建皮肤之前初始化内容
 * @returns {Object} { createTheme }
 */
function baseCreateAwescnb(options) {
    init(options)
    return {
        createTheme: createThemeAPI(),
    }
}

export function createTheme(options) {
    const theme = baseCreateAwescnb(options).createTheme()
    return theme
}
