export const extend = Object.assign
export const isArray = Array.isArray

export function isFunction<T extends (...args: any[]) => any>(
  x: unknown,
): x is T {
  return typeof x === 'function'
}

export function isString(x: unknown): x is string {
  return typeof x === 'string'
}
