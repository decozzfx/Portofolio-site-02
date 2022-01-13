import React from 'react'
import Navbar from './Navbar'

const Layout = ({children, bg}) => {
    return (
        <div className={`min-h-screen bg-bgColor text-white ${bg}`}>
             <Navbar/>
             {children}
        </div>
    )
}

export default Layout
