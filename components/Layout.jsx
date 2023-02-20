import React from 'react'
import Navbar from './Navbar'

export default function Layout({children}) {
  return (
    <section>
        <Navbar/>
        {children}
    </section>
  )
}
