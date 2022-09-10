import React from 'react'
import Title from './Title'
import Desc from './Desc'


const Overview = () => {
	return (
		<section>
			<div className="flex md:mt-10 md:flex-row flex-col">
				<div className="md:w-6/12 md:mr-10 ">
					<Title>Overview</Title>
					<Desc>My name is Moch Fathurrozi, iam a junior web developer, a self-taught web programmer, learning web development throught internet, youtube, twitter, blog and etc. so this is about my overview </Desc>
					<h2 className='mt-14 text-3xl font-semibold '>Quick Education & Experience</h2>
					<ul className='mt-8'>
						<li className='mt-4'>
							<img src="/bullet.svg" className='inline-block mr-4' />
							2022 - now : Working at PT. Infosys Solusi Terpadu as Frontend ReactJS Developer
						</li>
						<li className='mt-4'>
							<img src="/bullet.svg" className='inline-block mr-4' />
							2018 - 2022 : UD. Semulur as Assistant Procurement
						</li>
						<li className='mt-4'>
							<img src="/bullet.svg" className='inline-block mr-4' />
							2014 - 2017 : College in Politeknik Negeri Madiun
						</li>
						<li className='mt-4'>
							<img src="/bullet.svg" className='inline-block mr-4' />
							2016 : Intern in Bank Mandiri KCP. Madiun
						</li>
					</ul>
				</div>
				<div className="w-6/12">
					<div className="flex items-center justify-center mt-12 md:pb-0 pb-10">
						<img src="/potrait-1-1.png" className='rounded-xl shadow-2xl shadow-white/80 hover:scale-105' />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Overview
