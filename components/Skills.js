import React from 'react'
import Desc from './Desc'
import SkillCard from './SkillCard'
import Title from './Title'

const Skills = () => {
    return (
      <div className='ml-11'>
        <div className="w-full">
          <Title>Skills</Title>
          <Desc>in this page i've put and show some skills that i've learning </Desc>
        </div>
        <div className='flex flex-wrap'>
          <SkillCard img='/javascript.svg' skill='Javascript' level='Intermediate' imgClassName='h-16 rounded-full' />
          <SkillCard img='/html-5.svg' skill='Html' level='Basic' imgClassName='h-16 ml-2' />
          <SkillCard img='/css-3.svg' skill='Css' level='Basic' imgClassName='h-16 ml-2' />
          <SkillCard img='/react.svg' skill='ReactJS' level='Intermediate' imgClassName='h-16' />
          <SkillCard img='/nextjs-icon.svg' skill='Next JS' level='Intermediate' imgClassName='h-16' />
          <SkillCard img='/nodejs-icon.svg' skill='Node JS' level='Basic' imgClassName='h-16' />
          <SkillCard img='/tailwindcss-icon.svg' skill='Tailwind CSS' level='Intermediate' imgClassName='w-10'  />
          <SkillCard img='/mysql-icon.svg' skill='Mysql' level='Basic' imgClassName='h-16' />
          <SkillCard img='/mongodb.svg' skill='Mongo DB' level='Basic' imgClassName='h-16' />
        </div>
      </div>
    )
}

export default Skills
