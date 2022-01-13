import Link from 'next/link'
import React from 'react'
import NavItem from './NavItem'

const Navbar = () => {
    return (
        <nav className='py-10'>
          <div className="flex items-center">
            <div className="w-3/12">
              <a href="/" className='flex items-center justify-center'>
                <div className="bg-bgLogo py-2 px-2 h-10 w-10 text-2xl mr-3 items-center justify-center flex rounded-lg text-black font-bold">D</div>
                <h2 className='text-xl uppercase'>Decoz</h2>
              </a>
            </div>
            <div className="w-6/12">
              <ul className='flex items-center text-white/60 text-lg text-left space-x-12'>
                <NavItem href='/overview'>Overview</NavItem>
                <NavItem href='/skills'>Skills</NavItem>
                <NavItem href='/projects'>Projects</NavItem>
                <NavItem href='/contact'>Contact</NavItem>
              </ul>
            </div>
            <div className="w-3/12">
              <Link href='#'>
                <a className='mx-10 py-3 px-12 bg-bgBtn1 rounded-lg text-lg hover:bg-bgBtnHover1'>
                  Hire Me
                </a>
              </Link>
            </div>
          </div>
        </nav>
    )
}

export default Navbar
