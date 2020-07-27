import './index.scss'

const flat = () => {
    $('#sideBar').appendTo($('#home'))
}

const side = () => {
    flat()
}

module.exports = side
