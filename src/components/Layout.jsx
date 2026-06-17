import React from 'react'
import Header from './Header'
import Footer from './Layouts/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <Header/>

    <section style={{minHeight: '80vh'}}>
        <Outlet/>
    </section>
    <Footer/>
  </>

  )
}

export default Layout