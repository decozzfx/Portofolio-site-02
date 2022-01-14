import React from 'react'
import Desc from './Desc'
import ProjectCard from './ProjectCard'
import Title from './Title'

const Projects = () => {
  return (
    <div className='ml-11 flex pb-10 mt-10'>
      <div className="w-5/12">
        <Title>Projects</Title>
        <Desc>in this page i will show the projects that i've build and develop when iam learning about web development, all project build with react js and next js with responsive web feature</Desc>
      </div>
        <div className="w-7/12 flex flex-wrap mr-14">
          <div className="w-6/12">
            <ProjectCard 
            link='https://slicing-landing-page-01-daplan.netlify.app/'
            img='/daplan.png'
            title='Daplan'
            desc='simple landing page'
            />
          </div>
          <div className="w-6/12">
            <ProjectCard 
            link='https://slicing-landing-page-02-portopolio.netlify.app/'
            img='/porto-1.png'
            title='Portofolio'
            desc='simple porto website'
            />
          </div>
          <div className="w-6/12 mt-5">
            <ProjectCard 
            link='https://slicing-blog-page-01-epicentrum.netlify.app/'
            img='/epicentrum.png'
            title='Epicentrum'
            desc='blog website'
            />
          </div>
          <div className="w-6/12 mt-5">
            <ProjectCard 
            link='https://mini-blog-project-decozzfx.netlify.app/'
            img='/web-blog-api.png'
            title='Blog Website'
            desc='simple blog website with api'
            />
          </div>
          
        </div>      
    </div>
  )
}

export default Projects
