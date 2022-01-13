import React from 'react'
import Link from 'next/link'


const NavItem = ({children, href}) => {
    
    return (
        <>
            <li><Link href={href}><a className={`hover:underline`}>{children}</a></Link></li>
        </>
    )
}

export default NavItem
