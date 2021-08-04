import { getThemeOptions } from 'options/extra'

export default () => {
    const { avatar } = getThemeOptions()
    $('#blogLogo').attr('src', avatar)
}
