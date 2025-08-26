type CodeTheme = 'atomOneDark' | 'atomOneLight' | 'github'
type Page = 'all' | 'post' | 'index'
type Agent = 'desktop' | 'pad' | 'phone'
type Audio = Array<{
  name: string
  artist: string
  url: string
  cover: string
  lrc: string
}>
interface Lrc {
  enable: boolean
  type: 1 | 3
  color: string
}
interface Link {
  name: string
  link: string
}
interface ThemeOptions {
  name: string
  color: string
  avatar: string
  headerBackground: string
}
interface BackgroundOptions {
  enable: boolean
  value: string
  opacity: number
  repeat: boolean
}
interface BarragesOptions {
  enable: boolean
  opacity: number
  fontSize: string
  colors: string[]
  barrages: string[]
  indexBarrages: string[]
  postPageBarrages: string[]
}
interface CatalogOptions {
  enable: boolean
  position: 'left' | 'right'
}
interface ChartsOptions {
  enable: boolean
  labels: string[]
  datasets: Array<object>
}
interface ClickEffectsOptions {
  enable: boolean
  colors: string[]
  size: number
  maxCount: number
}
interface CodeCopyOptions {
  enable: boolean
}
interface CodeHighlightOptions {
  dark: CodeTheme
  light: CodeTheme
}
interface CodeLangOptions {
  enable: boolean
}
interface CodeLinenumbersOptions {
  enable: boolean
}
interface DonationOptions {
  enable: boolean
  qrcodes: string[]
}
interface EmojiOptions {
  enable: boolean
  buttonIcon: string
  emojiList: string[]
}
interface LinksOptions {
  enable: boolean
  value: Array<Link>
}
interface ImagePreviewOptions {
  enable: boolean
}
interface Live2dOptions {
  enable: boolean
}
interface LockScreenOptions {
  enable: boolean
  background: string
  strings: string[]
}
interface DarkModeOptions {
  enable: boolean
  darkDefault: boolean
  autoDark: boolean
  autoLight: boolean
}
interface MusicPlayerOptions {
  enable: boolean
  page: Page
  agent: Agent
  autoplay: boolean
  volume: number
  lrc: Lrc
  audio: Audio
}
interface NotationOptions {
  enable: boolean
}
interface NoticeOptions {
  enable: boolean
  contents: string[]
}
interface PostBottomImageOptions {
  enable: boolean
  img: string
  height: string
}
interface LicenseOptions {
  enable: boolean
  license: boolean
  licenseName: string
  licenseLink: string
  contents: string[]
}
interface PostTopImageOptions {
  enable: boolean
  fixed: boolean
  imgs: string[]
}
interface QrcodeOptions {
  enable: boolean
  img: string
  desc: string
}
interface SignatureOptions {
  enable: boolean
  contents: string[]
}
interface ToolsOptions {
  initialOpen: boolean
  mobileAutoClose: boolean
}
interface GithubOptions {
  enable: boolean
  color: string
  url: string
}
interface GiteeOptions {
  enable: boolean
  color: string
  url: string
}
interface PostListImageOptions {
  enable: boolean
  images: string[]
}
interface WebsiteTagOptions {
  enable: boolean
  title: string
  favicon: string
}
interface CodeTrafficLightOptions {
  enable: boolean
}
type GenericUseFn<T> = (arg: Partial<T>) => T
/**
 * 主题基本配置
 */
export type UseThemeOptions = GenericUseFn<ThemeOptions>
/**
 * 背景配置
 */
export type UseBackgroundOptions = GenericUseFn<BackgroundOptions>
/**
 * 弹幕配置
 */
export type UseBarragesOptions = GenericUseFn<BarragesOptions>
/**
 * 博文目录配置
 */
export type UseCatalogOptions = GenericUseFn<CatalogOptions>
/**
 * 图表配置
 */
export type UseChartsOptions = GenericUseFn<ChartsOptions>
/**
 * 点击特效配置
 */
export type UseClickEffectsOptions = GenericUseFn<ClickEffectsOptions>
/**
 * 代码块复制配置
 */
export type UseCodeCopyOptions = GenericUseFn<CodeCopyOptions>
/**
 * 代码块高亮主题配置
 */
export type UseCodeHighlightOptions = GenericUseFn<CodeHighlightOptions>
/**
 * 代码块语言配置
 */
export type UseCodeLangOptions = GenericUseFn<CodeLangOptions>
/**
 * 代码块行号配置
 */
export type UseCodeLinenumbersOptions = GenericUseFn<CodeLinenumbersOptions>
/**
 * 捐赠配置
 */
export type UseDonationOptions = GenericUseFn<DonationOptions>
/**
 * 表情输入配置
 */
export type UseEmojiOptions = GenericUseFn<EmojiOptions>
/**
 * 自定义链接配置
 */
export type UseLinksOptions = GenericUseFn<LinksOptions>
/**
 * 图片查看配置
 */
export type UseImagePreviewOptions = GenericUseFn<ImagePreviewOptions>
/**
 * live2d 配置
 */
export type UseLive2dOptions = GenericUseFn<Live2dOptions>
/**
 * 锁屏配置
 */
export type UseLockScreenOptions = GenericUseFn<LockScreenOptions>
/**
 * 深色模式配置
 */
export type UseDarkModeOptions = GenericUseFn<DarkModeOptions>
/**
 * 音乐播放器配置
 */
export type UseMusicPlayerOptions = GenericUseFn<MusicPlayerOptions>
/**
 * 笔注配置
 */
export type UseNotationOptions = GenericUseFn<NotationOptions>
/**
 * 公告配置
 */
export type UseNoticeOptions = GenericUseFn<NoticeOptions>
/**
 * 博文底部图片配置
 */
export type UsePostBottomImageOptions = GenericUseFn<PostBottomImageOptions>
/**
 * 版权配置
 */
export type UseLicenseOptions = GenericUseFn<LicenseOptions>
/**
 * 博文顶部图片配置
 */
export type UsePostTopImageOptions = GenericUseFn<PostTopImageOptions>
/**
 * 二维码配置
 */
export type UseQrcodeOptions = GenericUseFn<QrcodeOptions>
/**
 * 个性签名配置
 */
export type UseSignatureOptions = GenericUseFn<SignatureOptions>
/**
 * 工具栏配置
 */
export type UseToolsOptions = GenericUseFn<ToolsOptions>
/**
 * Github 配置
 */
export type UseGithubOptions = GenericUseFn<GithubOptions>
/**
 * Gitee 配置
 */
export type UseGiteeOptions = GenericUseFn<GiteeOptions>
/**
 * 博文列表图片配置
 */
export type UsePostListImageOptions = GenericUseFn<PostListImageOptions>
/**
 * 站点标签配置
 */
export type UseWebsiteTagOptions = GenericUseFn<WebsiteTagOptions>
/**
 * 代码块红绿灯
 */
export type UseCodeTrafficLightOptions = GenericUseFn<CodeTrafficLightOptions>
