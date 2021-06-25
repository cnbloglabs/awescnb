import { loadScript } from 'utils/helpers'
import { isPostDetailsPage } from 'utils/cnblog'
import { owo } from '../../urls'

// 构建btn
function owoEmoji() {
    //  onclick = 'load_face(this)'
    $('.commentbox_footer').before(
        '<div class="OwO"><div class="OwO-logo"><i class="fa fa-smile-o" aria-hidden="true"></i></div></div>',
    )
    $('.OwO').click(function() {})
}

// load
function load_face() {
    new OwO({
        logo: '<i class="fa fa-smile-o" aria-hidden="true"></i>',
        container: document.getElementsByClassName('OwO')[0],
        target: document.getElementById('tbCommentBody'),
        api: 'https://cdn.jsdelivr.net/gh/gshang2018/home/gshang.owo.json',
        position: 'up',
        width: '100%',
        maxHeight: '250px',
    })
    // b.classList.add('OwO-open')
    // b.onclick = null
}

export default function emoji() {
    if (!isPostDetailsPage()) return
    owoEmoji()
    loadScript(owo, load_face)
}
