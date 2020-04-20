import { cacheScript } from '@tools'
import { owo } from '../../constants/urls'

// 构建btn
function owoEmoji() {
    $('.commentbox_footer').before(
        '<div class="OwO" onclick="load_face(this)"><div class="OwO-logo"><i class="fa fa-smile-o" aria-hidden="true"></i></div></div>',
    )
}

// click
function load_face(b) {
    new window.OwO({
        logo: '<i class="fa fa-smile-o" aria-hidden="true"></i>',
        container: document.getElementsByClassName('OwO')[0],
        target: document.getElementById('tbCommentBody'),
        api: 'https://cdn.jsdelivr.net/gh/gshang2018/home/gshang.owo.json',
        position: 'up',
        width: '100%',
        maxHeight: '250px',
    })
    b.classList.add('OwO-open')
    b.onclick = null
}

export default function emoji() {
    owoEmoji()
    cacheScript(owo, load_face)
}
