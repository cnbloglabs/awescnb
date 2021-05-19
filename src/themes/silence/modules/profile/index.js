import './index.less'
import { getThemeOptions } from 'options/extra'
import { avatar } from 'constants/cnblog'

function buildProfile() {
    const { favicon } = getThemeOptions()
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
