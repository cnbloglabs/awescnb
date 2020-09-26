import { pageName } from '@tools'
import { donationConfig } from '@config/plugins.js'

function qrcodeToggle() {
    $('#custom-donation-btn').click(function() {
        $('#custom-donation-qrcode').toggle('swing')
    })
    $('#custom-donation-qrcode div').click(function() {
        $(this)
            .parent()
            .toggle('linear')
    })
}

export default devOptions => {
    const { enable, qrcodes } = donationConfig(devOptions)

    if (!enable) return
    if (pageName() !== 'post') return
    if (!qrcodes.length) return

    const btn = `<a id="custom-donation-btn">打赏</a>`
    const qrcode = $(
        `<div id="custom-donation-qrcode"></div>`,
    )

    qrcodes.forEach(item => {
        qrcode.append(
            `<div style="background-image: url(${item})"></div>`,
        )
    })

    $('#green_channel_favorite').after(btn)
    $('#blog_post_info').before(qrcode)

    qrcodeToggle()
}
