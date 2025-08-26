import type {
  UseBackgroundOptions,
  UseBarragesOptions,
  UseCatalogOptions,
  UseChartsOptions,
  UseClickEffectsOptions,
  UseCodeCopyOptions,
  UseCodeHighlightOptions,
  UseCodeLangOptions,
  UseCodeLinenumbersOptions,
  UseCodeTrafficLightOptions,
  UseDarkModeOptions,
  UseDonationOptions,
  UseEmojiOptions,
  UseGiteeOptions,
  UseGithubOptions,
  UseImagePreviewOptions,
  UseLicenseOptions,
  UseLinksOptions,
  UseLive2dOptions,
  UseLockScreenOptions,
  UseMusicPlayerOptions,
  UseNotationOptions,
  UseNoticeOptions,
  UsePostBottomImageOptions,
  UsePostListImageOptions,
  UsePostTopImageOptions,
  UseQrcodeOptions,
  UseSignatureOptions,
  UseThemeOptions,
  UseToolsOptions,
  UseWebsiteTagOptions,
} from './types'
import { defineOptions } from '@acnb/core'

export const useThemeOptions: UseThemeOptions = defineOptions('theme', {
  name: 'reacg',
  color: '#FFB3CC',
  avatar: '',
  headerBackground: '',
})
export const useBackgroundOptions: UseBackgroundOptions = defineOptions(
  'bodyBackground',
  {
    enable: false,
    value: '',
    opacity: 0.85,
    repeat: false,
  },
)
export const useBarragesOptions: UseBarragesOptions = defineOptions(
  'barrages',
  {
    enable: false,
    opacity: 0.6,
    fontSize: '20px',
    colors: [],
    barrages: [],
    indexBarrages: [],
    postPageBarrages: [],
  },
)
export const useCatalogOptions: UseCatalogOptions = defineOptions('catalog', {
  enable: false,
  position: 'left',
})
export const useChartsOptions: UseChartsOptions = defineOptions(
  ['chart', 'charts'],
  {
    enable: false,
    labels: ['Vue', 'React', 'Flutter', 'Java', 'NodeJs', 'TypeScript', 'CSS'],
    datasets: [
      {
        label: 'My First Chart',
        data: [65, 59, 90, 81, 56, 55, 40],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)',
      },
      {
        label: 'My Second Dataset',
        data: [28, 48, 40, 19, 96, 27, 100],
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)',
      },
    ],
  },
)
export const useClickEffectsOptions: UseClickEffectsOptions = defineOptions(
  ['clickEffects', 'click'],
  {
    enable: false,
    colors: [],
    size: 30,
    maxCount: 10,
  },
)
export const useCodeCopyOptions: UseCodeCopyOptions = defineOptions(
  'codeCopy',
  {
    enable: false,
  },
)
export const useCodeHighlightOptions: UseCodeHighlightOptions = defineOptions(
  ['codeHighlight', 'highLight'],
  {
    dark: 'atomOneDark',
    light: 'atomOneLight',
  },
)
export const useCodeLangOptions: UseCodeLangOptions = defineOptions(
  'codeLang',
  {
    enable: false,
  },
)
export const useCodeLinenumbersOptions: UseCodeLinenumbersOptions
  = defineOptions(['codeLinenumbers', 'lineNumbers', 'codeLineNumbers'], {
    enable: false,
  })
export const useCodeTrafficLightOptions: UseCodeTrafficLightOptions
  = defineOptions('codeTrafficLight', {
    enable: false,
  })
export const useDonationOptions: UseDonationOptions = defineOptions(
  'donation',
  {
    enable: false,
    qrcodes: [],
  },
)
export const useEmojiOptions: UseEmojiOptions = defineOptions('emoji', {
  enable: false,
  buttonIcon: '',
  emojiList: [],
})
export const useLinksOptions: UseLinksOptions = defineOptions('links', {
  enable: false,
  value: [],
})
export const useImagePreviewOptions: UseImagePreviewOptions = defineOptions(
  ['imagePreview', 'imagebox'],
  {
    enable: false,
  },
)
export const useLive2dOptions: UseLive2dOptions = defineOptions('live2d', {
  enable: false,
  page: 'all',
  agent: 'pc',
  model: 'haru-01',
  width: 150,
  height: 200,
  position: 'left',
  gap: 'default',
})
export const useLockScreenOptions: UseLockScreenOptions = defineOptions(
  'lock',
  {
    enable: false,
    background: '',
    strings: [],
  },
)
export const useDarkModeOptions: UseDarkModeOptions = defineOptions(
  ['mode', 'darkMode'],
  {
    enable: false,
    darkDefault: false,
    autoDark: false,
    autoLight: false,
  },
)
export const useMusicPlayerOptions: UseMusicPlayerOptions = defineOptions(
  'musicPlayer',
  {
    enable: false,
    page: 'all',
    agent: 'pc',
    autoplay: false,
    volume: 0.4,
    lrc: {
      enable: false, // 启用歌词
      type: 1, // 1 -> 字符串歌词 3 -> url 歌词
      color: '', // 颜色
    },
    audio: [
      {
        name: '404 not found',
        artist: 'REOL',
        url: 'https://guangzan.gitee.io/imagehost/awescnb/music/demo4.mp3',
        cover: 'https://guangzan.gitee.io/imagehost/awescnb/music/demo.jpg',
        lrc: '',
      },
    ],
  },
)
export const useNotationOptions: UseNotationOptions = defineOptions(
  'notation',
  {
    enable: false,
  },
)
export const useNoticeOptions: UseNoticeOptions = defineOptions('notice', {
  enable: false,
  contents: [],
})
export const usePostBottomImageOptions: UsePostBottomImageOptions
  = defineOptions('postBottomImage', {
    enable: false,
    img: '',
    height: '',
  })
export const useLicenseOptions: UseLicenseOptions = defineOptions(
  ['license', 'postSignature'],
  {
    enable: false,
    license: true,
    licenseName: '',
    licenseLink: '',
    contents: [],
  },
)
export const usePostTopImageOptions: UsePostTopImageOptions = defineOptions(
  'postTopImage',
  {
    enable: false,
    fixed: false,
    imgs: [],
  },
)
export const useQrcodeOptions: UseQrcodeOptions = defineOptions('qrcode', {
  enable: false,
  img: '',
  desc: '',
})
export const useSignatureOptions: UseSignatureOptions = defineOptions(
  'signature',
  {
    enable: false,
    contents: [],
  },
)
export const useToolsOptions: UseToolsOptions = defineOptions('tools', {
  initialOpen: true,
  mobileAutoClose: true,
})
export const useGithubOptions: UseGithubOptions = defineOptions('github', {
  enable: false,
  color: '#ffb3cc',
  url: '',
})
export const useGiteeOptions: UseGiteeOptions = defineOptions('gitee', {
  enable: false,
  color: '#ffb3cc',
  url: '',
})
export const usePostListImageOptions: UsePostListImageOptions = defineOptions(
  'postListImage',
  {
    enable: false,
    images: [],
  },
)
export const useWebsiteTagOptions: UseWebsiteTagOptions = defineOptions(
  'webTag',
  {
    enable: false,
    title: '',
    favicon: '',
  },
)
