// 打字效果
// 引入即可

import Typed from 'Typed'

const typed = () => {
    const options = {
        strings: ['<i>First</i> sentence.', '&amp; a second sentence.'],
        typeSpeed: 40,
    }
    new Typed('.element', options)
}

export default typed
