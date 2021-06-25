import './index.scss'

// 构建搜索框
const buildSearchbar = () => {
    const el = `<div class="custom-searchbar"> <input id="q" type="text" placeholder="search by pressing enter" onkeydown="return zzk_go_enter(event);"/></div>`
    $('#main').prepend(el)
    $('#sidebar_search').remove()
}

export default buildSearchbar
