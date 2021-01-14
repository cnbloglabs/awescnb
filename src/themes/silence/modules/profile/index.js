import './index.less'
import { getThemeOptions } from '@config/extra'

const { avatar, favicon } = getThemeOptions()

function buildProfile() {
    if (avatar.length) {
        $('#sideBarMain').prepend(
            `<img class="esa-profile-avatar" src="${avatar}" />`,
        )
    }
    if (favicon.length) {
        $('#favicon').attr('href', favicon)
    }
}

export default buildProfile
