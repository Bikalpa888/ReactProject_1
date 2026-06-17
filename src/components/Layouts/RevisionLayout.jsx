import React from 'react'
import { Outlet } from 'react-router-dom'
import RevisionHeader from './Revision'

const RevisionLayout = () => {
  return (
    <>
        <RevisionHeader/>
        <Outlet/>
    </>
  )
}

export default RevisionLayout