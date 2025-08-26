export interface Theme {
  /**
   * 皮肤名称
   * 如果类型为数组，数组中每个元素都将作为该皮肤名称
   */
  name: string | Array<string>
  /**
   * 皮肤入口文件路径
   */
  url: string
}
