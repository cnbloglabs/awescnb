import { BackToTop } from './components/back-to-top'
import { Footer } from './components/footer'
import { Main } from './components/main'
import { TopNavBar } from './components/top-nav-bar'
import { Toaster } from 'sonner';

export function App() {
  return (
    <div className='flex flex-col'>
      <TopNavBar></TopNavBar>
      <Main></Main>
      <Footer></Footer>
      <BackToTop></BackToTop>
      <Toaster />
    </div>
  )
}
