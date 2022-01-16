import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Nav = ({dir}) => {
    const vh = {
        vertical : 'flex-col space-y-8 py-5',
        horizontal : 'text-left space-x-12'
    }
    const pickedDir = vh[dir]

    const router = useRouter()

    return (
        <>
            <ul className={`flex items-center text-white/60 text-lg ${pickedDir} `}>
                <li><Link href='/overview'><a className={`hover:underline ${router.pathname == '/overview' ? 'font-bold text-white' : ''} `}  >Overview</a></Link></li>
                <li><Link href='/skills'><a className={`hover:underline ${router.pathname == '/skills' ? 'font-bold text-white' : ''} `} >Skills</a></Link></li>
                <li><Link href='/projects'><a className={`hover:underline ${router.pathname == '/projects' ? 'font-bold text-white' : ''} `}  >Projects</a></Link></li>
                <li><Link href='/contact'><a className={`hover:underline ${router.pathname == '/contact' ? 'font-bold text-white' : ''} `}  >Contact</a></Link></li>
              </ul>
        </>
    )
}

export default Nav
