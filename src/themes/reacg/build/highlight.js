import { pageName } from '@/assets/js/tools'

// 设置代码高亮
function highlight() {
    if (pageName() !== 'post') return
    if ($('pre').length === 0) return

    const type = window.opts.highLight.type
    const atomOneDark = `<style>:root {--hl-base: #282c34;--hl-mono-1: #abb2bf;--hl-mono-3: #5c6370;--hl-hue-1: #56b6c2;--hl-hue-2: #61aeee;--hl-hue-3: #c678dd;--hl-hue-4: #98c379;--hl-hue-5: #e06c75;--hl-hue-6: #d19a66;--hl-hue-6-2: #e6c07b;--hl-tag: #abb2bf;}</style>`
    const atomOneLight = `<style>--hl-base: #fafafa;--hl-mono-1: #383a42;--hl-mono-3: #a0a1a7;--hl-hue-1: #0184bb;--hl-hue-2: #4078f2;--hl-hue-3: #a626a4;--hl-hue-4: #50a14f;--hl-hue-5: #e45649;--hl-hue-6: #986801;--hl-hue-6-2: #c18401;--hl-tag: #383A42;</style>`
    const github = `<style>--hl-base: #fff;--hl-mono-1: #333333;--hl-mono-3: #d73a49;--hl-hue-1: #0086b3;--hl-hue-2: #0086b3;--hl-hue-3: #d73a49;--hl-hue-4: #55a532;--hl-hue-5: #63a35c;--hl-hue-6: #6f42c1;--hl-hue-6-2: #6f42c1;--hl-tag: #d73a49;</style>`

    const actions = {
        atomOneDark,
        atomOneLight,
        github,
    }

    $('head').append(actions[type])
}

export default highlight
