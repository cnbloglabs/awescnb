import avator from './avator'
import init from './init'
import SideFloatBtns from './SideFloatBtns'
import catalog from './catalog'
import emoji from './emoji'
import toast from './toast'
import copy from './copy'
import fancyImgbox from './fancyImgbox'

export default () => {
    avator()
    init()
    fancyImgbox()
    copy()
    SideFloatBtns()
    catalog()
    emoji()
    toast()
}
