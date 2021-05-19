export const userConfig = window.opts || window.acOptions || {}

/**
 * 合并配置
 * @param {Object} defaultOptions
 * @param {Object} userOptions
 * @param {Object} devOptions
 * @return {Object} options
 */
export function mergeOptions(def = {}, user = {}, dev = {}) {
    const defaultOptions = Object.assign({}, def, dev)
    const options = Object.assign({}, defaultOptions, user)
    return options
}
