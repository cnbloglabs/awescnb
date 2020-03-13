import Typed from 'Typed'

// 打字效果
const typed = () => {
    const options = {
        strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
        typeSpeed: 40,
    }
    new Typed('.element', options)
}

export default typed
