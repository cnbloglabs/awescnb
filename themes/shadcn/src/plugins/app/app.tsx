import { BackToTop } from './components/back-to-top'
import { Footer } from './components/footer'
import { Main } from './components/main'
import { TopNavBar } from './components/top-nav-bar'
import { Toaster } from './components/ui/sonner'
import '@tona/sonner/dist/index.css'

export function App() {
  return (
    <div className='flex min-h-screen flex-col'>
      <TopNavBar></TopNavBar>
      <Main></Main>
      <Footer></Footer>
      <BackToTop></BackToTop>
      <Toaster />
    </div>
  )
}
