import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Third from './Third'
import Second from './Second'
import LetConstVar from './Pages/LetConstVar'
import RevisionLayout from './components/Layouts/RevisionLayout'
import PageNotFound from './Pages/PageNotFound'
import Layout from './components/Layout'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Contact from './Pages/Contact'

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/'          element={<Home />} />
          <Route path='/about'     element={<About />} />
          <Route path='/services'  element={<Services />} />
          <Route path='/contact'   element={<Contact />} />
          <Route path='/second'  element={<Second />} />
          <Route path='/Third'   element={<Third />} />

          <Route path='/revision' element={<RevisionLayout />}>
            <Route path='topic1' element={<LetConstVar />} />
          </Route>

          <Route path='*' element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default MyRoutes
