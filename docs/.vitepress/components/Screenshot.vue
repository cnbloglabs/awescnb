<script lang='ts' setup>
import { onBeforeMount, ref, watch } from 'vue'

interface Screenshots {
  light?: string // TODO string[]
  dark?: string
}
interface IProps {
  desktop?: Screenshots | string
  pad?: Screenshots | string
  phone?: Screenshots | string
}
interface TabItem {
  title: string
  content: string
}
interface AgentMap {
  desktop: '桌面'
  pad: '平板'
  phone: '手机'
}
type PropsKey = keyof IProps

const props = defineProps<IProps>()
const agentMap: AgentMap = {
  desktop: '桌面',
  pad: '平板',
  phone: '手机',
}
const tabs = ref<[] | TabItem[]>([])
const currentScreenshot = ref<TabItem | null>(null)
const isDark = ref(false)
function setTabs() {
  const tabList = []
  for (const [key, val] of Object.entries(props)) {
    const i = {} as TabItem
    i.title = agentMap[key as PropsKey]
    if (typeof val === 'string') {
      i.content = val
    }
    else if (isDark.value) {
      i.content = val?.dark ? val.dark : '开发中'
    }
    else if (!isDark.value) {
      i.content = val?.light ? val.light : '开发中'
    }
    tabList.push(i)
  }
  tabs.value = tabList
  setCurrentScreenshot()
}
function setCurrentScreenshot() {
  if (currentScreenshot.value) {
    currentScreenshot.value = tabs.value[Object.values(agentMap).indexOf(currentScreenshot.value.title)]
  }
  else {
    currentScreenshot.value = tabs.value[0]
  }
}
watch(() => isDark.value, () => setTabs())
onBeforeMount(() => setTabs())
</script>

<template>
  <div class="flex flex-col bg-[var(--vt-c-bg-soft)] rounded w-[600px]">
    <div class="flex items-center">
      <div
        v-for="item in tabs"
        :key="item.title"
        class="py-2 px-6 cursor-pointer text-center"
        :class="{ 'bg-[var(--vt-c-bg-mute)] text-[var(--vt-c-brand)] rounded transition': item.title === currentScreenshot?.title }"
        @click="currentScreenshot = item"
      >
        {{ item.title }}
      </div>
      <div
        class="flex items-center ml-auto py-2 px-6 cursor-pointer"
        @click="isDark = !isDark"
      >
        <i :class="`${isDark ? 'i-carbon:moon' : 'i-carbon:sun'}`" />
      </div>
    </div>
    <div class="flex py-6 justify-center items-center flex-1">
      <img
        v-if="currentScreenshot?.content && currentScreenshot.content.startsWith('/')"
        class="w-11/12"
        :src="currentScreenshot.content"
      >
      <div v-else class="flex justify-center items-center w-full h-50 text-sm">
        <i class="i-carbon:development mr-2" />
        {{ currentScreenshot?.content }}
      </div>
    </div>
  </div>
</template>
