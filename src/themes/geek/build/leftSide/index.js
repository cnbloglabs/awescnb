import { getBlogname } from '@cnblog'
import './index.scss'

const buildLeftside = () => {
    // const el = `
    // <div id='left-side'>
    //     <div class='logo'>CNBLOG</div>
    //     <div class="side-wrapper">
    //         <h3>FAVOURITE</h3>
    //         <ul>
    //             <li><a href="#"><span class="fas fa-github"></span>item</a></li>
    //             <li><a href="#"><span class="fas fa-github"></span>item</a></li>
    //             <li><a href="#"><span class="fas fa-github"></span>item</a></li>
    //             <li><a href="#"><span class="fas fa-github"></span>item</a></li>
    //         </ul>
    //     </div>
    // </div>`
    const el = `
    <div id='left-side'>
        <div class='logo'>CNBLOG</div>
    </div>`
    $('#home').append(el)
}

const removeHeaderToLeftside = () => {
    const el = $('<div id="cnblog-nav" class="side-wrapper">').append(
        '<h3>MENU</h3>',
    )
    $('#left-side .logo').after(el)
    $('#navList').appendTo($('#cnblog-nav'))
}

const buildLeftsideBottomBtns = () => {
    const { avatar } = window.opts.theme
    const userName = getBlogname()
    const el = `
    <a href="https://twitter.com/AysnrTrkk" class="follow-me" target="_blank">
        <span class="follow-text"><i class="fas fa-github"></i>Fork me on GitHub</span>
        <span class="developer">
            <img src="${avatar}">
            ${userName}
        </span>
    </a>`
    $('#left-side').append(el)
}

const leftSide = () => {
    buildLeftside()
    removeHeaderToLeftside()
    buildLeftsideBottomBtns()
}

module.exports = leftSide
