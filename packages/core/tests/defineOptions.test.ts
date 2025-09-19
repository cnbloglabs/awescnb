import { expect, it } from 'vitest'
import { defineOptions } from '../src/index'

it('plugin configuration with string key', () => {
  window.opts = {
    myPlugin: {
      enable: false,
    },
  }
  const p1 = 'myPlugin'
  const p2 = {
    enable: true,
  }
  const output = defineOptions(p1, p2)()
  expect(output).toEqual({ enable: false })
})

it('plugin configuration with alias key', () => {
  const userConfig = {
    enable: false,
  }
  window.opts = {
    myPluginAlias: userConfig,
  }
  const p1 = ['myPlugin', 'myPluginAlias']
  const p2 = {
    enable: true,
  }
  const output = defineOptions(p1, p2)()
  expect(output).toEqual({ enable: false })
})

it('plugin configuration with multiple properties', () => {
  const userConfig = {
    enable: false,
    color: 'red',
  }
  window.opts = {
    myPlugin: userConfig,
  }
  const p1 = 'myPlugin'
  const p2 = {
    enable: true,
    color: '',
  }
  const output = defineOptions(p1, p2)()
  expect(output).toEqual(userConfig)
})
