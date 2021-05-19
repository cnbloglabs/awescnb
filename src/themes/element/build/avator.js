import { avatar } from 'constants/cnblog'

function setAvatar() {
    if (avatar === '') return
    $('#blogLogo').attr('src', avatar)
}

export default () => {
    setAvatar()
}
