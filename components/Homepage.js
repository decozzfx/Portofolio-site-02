import Link from 'next/link'
import React from 'react'
import Desc from './Desc'
import Title from './Title'

const Homepage = () => {
    return (
      <article>
          <div className="flex md:flex-row flex-col">
            <div className="md:w-6/12">
              <h2 className='md:text-4xl text-2xl md:mt-20 font-thin'>Hi, my name is</h2>
              <Title>Moch Fathurrozi</Title>
              <Desc>Iam a junior web developer, javascript enthusiast, self-taugh, courious about new tech thing, and now learning about nextjs framework, trying tobe junior fullstack web developer</Desc>
              <div className='flex mt-10'>
                <Link href='/overview'>
                <a className='hover:font-semibold items-center'>
                Go To Overview
                <img src="/arrow-right-circle.svg" className='ml-2 inline-block ' />
                </a>
                </Link>
              </div>              
            </div>
            <div className="md:w-6/12 flex justify-center">
              <img src="/hero.png" className='w-auto' />
            </div>
          </div>
          <div className="flex pb-10 w-1/2 lg:mt-0 md:mt-10 md:flex-row flex-col">
                <div className="w-3/12 md:mt-0 mt-3">
                  <h4 className='text-white/60 md:text-sm text-xs  uppercase tracking-wider'>Projects</h4>
                  <h5 className='font-bold md:text-xl text-lg'>4</h5>
                </div>
                <div className="w-3/12 md:mt-0 mt-3 md:ml-5">
                  <h4 className='text-white/60 md:text-sm text-xs uppercase tracking-wider'>Experience</h4>
                  <h5 className='font-bold md:text-xl text-lg'>Junior</h5>
                </div>
                <div className="md:w-3/12 md:mt-0 mt-3 md:ml-9">
                  <h4 className='text-white/60 md:text-sm text-xs   uppercase tracking-wider'>Nationality</h4>
                  <h5 className='font-bold md:text-xl text-lg'>IDN 🇮🇩</h5>
                </div>
              </div>
      </article>
    )
}

export default Homepage
