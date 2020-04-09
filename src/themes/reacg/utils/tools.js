/**
 * @description 指定icon插入svg
 * @param {String} icon xlink:href 的值
 * @returns svg标签
 */
const iconInSvg = icon => {
    return `<svg class="icon" aria-hidden="true"><use xlink:href="${icon}"></use></svg>`
}

export { iconInSvg }
