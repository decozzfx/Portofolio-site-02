import classNames from 'classnames'
import Link from 'next/link'
import React, { useState } from 'react'
import Nav from './Nav'
import { useRouter } from 'next/router'

const Navbar = () => {
  const [offCanvas, setOffCanvas] = useState(false)
  const router = useRouter()

    return (
        <nav className='py-10 mx-auto'>
          <div className="flex items-center">
            <div className="md:w-3/12 w-1/2 lg:hidden" onClick={() => setOffCanvas(true)} >
                <a className='flex items-center md:justify-start md:ml-0 ml-8 md:ml-10 cursor-pointer '>
                  <img src="/menu.svg" className='w-14' />
                </a>
            </div>
            <div className="lg:w-3/12 md:w-6/12 w-1/2">
              <Link href="/">
                <a className='flex items-center justify-center '>
                  <div className="bg-bgLogo py-2 px-2 h-10 w-10 text-2xl mr-3 items-center justify-center flex rounded-lg text-black font-bold">D</div>
                  <h2 className={`text-xl uppercase ${router.pathname == '/' ? 'font-bold text-white' : ''} `}>Decoz</h2>
                </a>
              </Link>
            </div>
            <div className="w-6/12 lg:block hidden">
              <Nav dir='horizontal' />
            </div>
            <div className="w-3/12 flex-row-reverse  md:mr-10 md:inline-flex hidden ">
              <Link href='/contact'>
                <a className='py-3 px-12 bg-bgBtn1 rounded-lg text-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-120 hover:bg-indigo-500 duration-300'>
                  Hire Me
                </a>
              </Link>
            </div>
          </div>
          <div className={classNames('fixed p-10 bg-gray-700 z-10 top-0 w-full h-70 transition-all lg:hidden', offCanvas ? 'left-0' : '-left-full' )}>
            <img src="/close.svg" className='w-14' onClick={() => setOffCanvas(false)} />
            <Nav dir='vertical' />
          </div>
        </nav>
    )
}

export default Navbar
