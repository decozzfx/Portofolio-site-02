import React from 'react'
import classNames from 'classnames'

const SkillCard = ({img, skill, level, imgClassName}) => {
    return (
        <div className="flex md:w-4/12 w-full px-4">
            <div className="bg-gray-600 rounded-full w-full shadow-xl flex mt-12 -mx-4 items-center hover:bg-gray-600/60">
              <img src={img} className={classNames('p-2 ', imgClassName)} />
              <div className="mt-2 mr-10 text-center w-full">
                <h4 className='text-lg font-semibold '>{skill}</h4>
                <p className='text-md text-white/60 '>{level}</p>
              </div>
            </div>
          </div>
    )
}

export default SkillCard
