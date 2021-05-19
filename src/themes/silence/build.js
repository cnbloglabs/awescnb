import buildGithubCorner from './modules/githubCorner'
import buildCustomHeader from './modules/customHeader'
import buildCustomFooter from './modules/customFooter'
import buildProfile from './modules/profile'
import buildToolbar from './modules/toolbar'
import buildPostContents from './modules/postContents'
import buildPostLightbox from './modules/postLightbox'
import buildHljsLineNumber from './modules/hljsLineNumber'
import buildPostSignature from './modules/postSignature'
import buildPostSponsor from './modules/postSponsor'
import buildPostCommentAvatars from './modules/postCommentAvatars'
import loader from './modules/loader'
import { isPostPage, showSidebar } from './consts/tools'

export default () => {
    buildCustomHeader()
    buildCustomFooter()
    buildGithubCorner()
    buildProfile()
    buildToolbar()
    if (isPostPage()) {
        buildPostContents()
        buildPostLightbox()
        buildHljsLineNumber()
        buildPostSignature()
        buildPostSponsor()
        buildPostCommentAvatars()
    } else {
        showSidebar()
    }
    loader.hide()
}
