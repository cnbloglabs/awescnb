import { extend } from 'utils/shared'

/**
 * 合并配置
 * @param {Object} def - defaultOptions
 * @param {Object} user - userOptions
 * @param {Object} dev - devOptions
 * @return {Object} options 合并后的配置
 */
export function mergeOptions(def = {}, user = {}, dev = {}) {
    const defaultOptions = extend({}, def, dev)
    const options = extend({}, defaultOptions, user)
    return options
}
