import Header from './Header'
import Footer from './Layouts/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <Header/>

    <section style={{ minHeight: '80vh', background: 'var(--c-white)' }}>
        <Outlet/>
    </section>
    <Footer/>
  </>

  )
}

export default Layout
