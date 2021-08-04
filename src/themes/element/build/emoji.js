import { loadScript } from 'utils/helpers'
import { owo } from '../libs'

export default () => {
    loadScript(owo, () => {
        // 引入owo插件
        window.owoEmoji = function() {
            $('.commentbox_footer').before(
                '<div class="OwO" onclick="load_face(this)"><div class="OwO-logo"><i class="fa fa-smile-o" aria-hidden="true"></i></div></div>',
            )
        }

        // 表情按钮按下
        window.load_face = function(b) {
            new OwO({
                logo: '<i class="fa fa-smile-o" aria-hidden="true"></i>',
                container: document.getElementsByClassName('OwO')[0],
                target: document.getElementById('tbCommentBody'),
                api:
                    'https://cdn.jsdelivr.net/gh/gshang2018/home/gshang.owo.json',
                position: 'up',
                width: '100%',
                maxHeight: '250px',
            })
            b.classList.add('OwO-open')
            b.onclick = null
        }
    })
}
