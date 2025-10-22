import { extend, isArray } from './utils/shared'

type MergeOptionsFn = <A extends object, B extends object, C extends object>(
  def?: A,
  user?: B,
  dev?: C,
) => A & B & C

type DefineOptionsFn = <F extends object, D extends object, U extends object>(
  userOptionName: string | Array<string>,
  defaultOptions: F,
) => (devOptions?: D) => F & U & D

const mergeOptions: MergeOptionsFn = (
  def = {} as any,
  user = {} as any,
  dev = {} as any,
) => {
  const defaultOptions = extend({}, def, dev)
  const options = extend({}, defaultOptions, user)
  return options
}

function getValue(valueKeys: string[] = [], obj: any = {}) {
  const keys = Object.keys(obj)
  const key = keys.find((key) => valueKeys.includes(key))
  return key ? obj[key] : null
}

function ensureUserOptions(userOptionName: string | string[]) {
  const userConfig: any = window.opts || {}
  if (typeof userOptionName === 'string') {
    return userConfig[userOptionName]
  } else if (isArray(userOptionName)) {
    return getValue(userOptionName, userConfig)
  }
}

export const defineOptions: DefineOptionsFn = (
  userOptionName,
  defaultOptions,
) => {
  return (devOptions) => {
    return mergeOptions(
      defaultOptions,
      ensureUserOptions(userOptionName),
      devOptions,
    )
  }
}
