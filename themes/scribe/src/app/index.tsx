import { BackToTop } from './components/back-to-top'
import { Footer } from './components/footer'
import { PaginationComponent } from './components/pagination'
import { TopNavBar } from './components/top-nav-bar'

export function App() {
  return (
    <div className='flex flex-col'>
      <TopNavBar></TopNavBar>
      <main className='flex flex-col'>
        <PaginationComponent></PaginationComponent>
      </main>
      <Footer></Footer>
      <BackToTop></BackToTop>
    </div>
  )
}
