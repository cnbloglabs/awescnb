import './index.less'
import { postSignatureConfig } from 'options/plugins'
import { getBlogname } from 'utils/cnblog'

const config = postSignatureConfig({
    licenseName: '署名-非商业性使用-相同方式共享 4.0 国际',
})

const signatureConfig = {
    enable: config.enable,
    author: getBlogname(),
    license: [config.licenseName, config.licenseLink],
    remark: config.content.length || config.content[0],
}

function buildPostSignature() {
    const config = signatureConfig
    if (config.enable) {
        const postUrl = $('#cb_post_title_url').attr('href')
        const authorName =
            config.author ||
            $('#profile_block a')
                .eq(0)
                .html()
        const content = `<div class="esa-post-signature"> 
                <p>作者：${$.trim(authorName) || '匿名'}</p> 
                <p>出处：<a href="${postUrl}">${postUrl}</a></p> 
                <p>版权：本作品采用「<a href="${
                    config.license[1]
                }" target="_blank">${
            config.license[0]
        }</a>」许可协议进行许可。</p> 
                <p>${config.remark || ''}</p> 
            </div>`
        $('#MySignature')
            .html(content)
            .show()
    }
}

export default buildPostSignature
