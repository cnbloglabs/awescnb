import { SimpleMarkdown } from '../../../../../components/ui/simple-markdown'
import { ProseMono } from '../../../../../components/ui/typography'
import { Panel, PanelContent, PanelHeader, PanelTitle } from '../../panel'

const about = `
- 我是一名**前端工程师**，拥有**3年以上从业经验**，极致把控细节，可以像素级精准实现 UI。
- 熟悉 **Next.js**、**Umi**、**React**、**TypeScript**​ 等前端技术，能够构建高质量、以用户为中心的应用。
- 相信**长期主义**，对炒作概念的技术网红圈不太感冒。
- 博客园是我唯一沉淀技术的地方，我在这里分享一些技术文章、生活感悟、个人见解。
- [Tona](https://github.com/guangzan/tona) 的创建者：专为博客园设计的皮肤开发框架。
  - 在 [Github](https://github.com/guangzan/tona) 上获得 **200+ stars**
  - [文档](https://www.yuque.com/r/awescnb/books) 有 **180k+ 阅读量**
- 为 [VueUse](https://vueuse.org/)、[Windi CSS](https://windicss.org/) 做过一点微小的贡献。
- 最近创建了 [Nahida Template](https://github.com/guangzan/nahida-template)：基于 Bun、Elysia、Next.js 16 和 TypeScript 的现代全栈 monorepo 模板，提供高性能与端到端类型安全支持。
`

export function About() {
  return (
    <Panel id='about'>
      <PanelHeader>
        <PanelTitle>关于我</PanelTitle>
      </PanelHeader>
      <PanelContent>
        <ProseMono>
          <SimpleMarkdown>{about}</SimpleMarkdown>
        </ProseMono>
      </PanelContent>
    </Panel>
  )
}
