import { getRandomColor } from '@/assets/js/tools'

    // 设置主题色
   function color() {
      const option = window.opts.theme.color
      let themeColor = option === 'random' ? getRandomColor('rgba') : option
      $('head').append(`<style>:root{--themeColor: ${themeColor}}<style>`)
    }

    export default color