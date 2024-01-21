import Footer from '@/components/component/Footer'
import Navbar from '@/components/component/Navbar'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode}) => {
  return (
    <div className='bg-black-100'>
        <Navbar />
        {children}
       <Footer />
    </div>
  )
}

export default layout