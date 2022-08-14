import Header from 'app/components/Header'
import Main from 'app/components/Main'
import Popups from 'app/components/Popups'

const Layout = ({ children }: any) => {
  return (
    <div
      className="z-0 flex flex-col items-center w-full min-h-screen transition-all bg-white main-wrapper"
    >
      <Header />
      <Main>{children}</Main>
      <Popups />
    </div>
  )
}

export default Layout
