import Link from 'next/link'
import React from 'react'
import Desc from './Desc'
import Title from './Title'

const Homepage = () => {
    return (
      <article>
          <div className="flex ml-11">
            <div className="w-6/12">
              <h2 className='text-4xl mt-20 font-thin'>Hi, my name is</h2>
              <Title>Moch Fahurrozi</Title>
              <Desc>Iam a junior web developer, javascript enthusiast, self-taugh, courious about new tech thing, and now learning about nextjs framework, trying tobe junior fullstack web developer</Desc>
              <div className='flex mt-10'>
                <Link href='/overview'>
                <a className='hover:font-semibold items-center'>
                Go To Overview
                <img src="/arrow-right-circle.svg" className='ml-2 inline-block' />
                </a>
                </Link>
              </div>
              <div className="flex mt-20">
                <div className="w-3/12">
                  <h4 className='text-white/60 text-sm  uppercase tracking-wider'>Projects</h4>
                  <h5 className='font-bold text-xl'>4</h5>
                </div>
                <div className="w-3/12">
                  <h4 className='text-white/60 text-sm  uppercase tracking-wider'>Experience</h4>
                  <h5 className='font-bold text-xl'>Junior</h5>
                </div>
                <div className="w-3/12">
                  <h4 className='text-white/60 text-sm  uppercase tracking-wider'>Nationality</h4>
                  <h5 className='font-bold text-xl'>IDN 🇮🇩</h5>
                </div>
              </div>
            </div>
            <div className="w-6/12">
              <img src="/hero.png" />
            </div>
          </div>
      </article>
    )
}

export default Homepage
