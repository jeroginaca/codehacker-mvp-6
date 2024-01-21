import Footer from '@/components/component/Footer'
import Navbar from '@/components/component/Navbar'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode}) => {
  return (
    <>
        <Navbar />
        {children}
       <Footer />
    </>
  )
}

export default layout