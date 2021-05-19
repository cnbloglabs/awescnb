import './index.scss'

// 构建搜索框
const buildSearchbar = () => {
    const el = `<div id="custom-searchbar"> <input id="q" class="custom-searchbar" type="search" placeholder="Search by pressing enter" onkeydown="return zzk_go_enter(event);"/></div>`
    $('#main').prepend(el)
    $('#sidebar_search').remove()
}

export default buildSearchbar
