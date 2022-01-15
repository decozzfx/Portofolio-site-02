import React from 'react'
import NavItem from './NavItem'

const Nav = ({dir}) => {
    const vh = {
        vertical : 'flex-col space-y-8 py-5',
        horizontal : 'text-left space-x-12'
    }

    const pickedDir = vh[dir]

    return (
        <>
            <ul className={`flex items-center text-white/60 text-lg ${pickedDir} `}>
                <NavItem href='/overview'>Overview</NavItem>
                <NavItem href='/skills'>Skills</NavItem>
                <NavItem href='/projects'>Projects</NavItem>
                <NavItem href='/contact'>Contact</NavItem>
              </ul>
        </>
    )
}

export default Nav
