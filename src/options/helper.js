import { extend } from 'utils/shared'

/**
 * 合并配置
 * @param {object} def - defaultOptions
 * @param {object} user - userOptions
 * @param {object} dev - devOptions
 * @return {object} options - 合并后的配置
 */
export function mergeOptions(def = {}, user = {}, dev = {}) {
    const defaultOptions = extend({}, def, dev)
    const options = extend({}, defaultOptions, user)
    return options
}
