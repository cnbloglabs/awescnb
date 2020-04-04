import { randomImgurl, pageName } from '@tools'
import env from '@constants/env'
import './index.css'

function listImages() {
    $('.postCon').each(function() {
        const image = env === 'dev' ? 'https:dummyimage.com/50' : randomImgurl()
        $(this).append(
            `<div class='custom-list-image' style="background-image:url(${image})"></div>`,
        )
    })
}

function indexList() {
    if (pageName() !== 'index') return
    listImages()
}

export default indexList
