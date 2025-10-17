import { getCurrentPage } from '@acnb/utils'
import { Home } from '../home'
import { Post } from '../post'

export function Main() {
  const currentPage = getCurrentPage()

  const renderComponent = () => {
    switch (currentPage) {
      case 'home':
        return <Home />
      case 'post':
        return <Post />
      default:
        return null
    }
  }

  return <main className='flex flex-1 flex-col px-2'>{renderComponent()}</main>
}
