import React from 'react'
import classNames from 'classnames'

const SkillCard = ({img, skill, level, imgClassName}) => {
    return (
        <div className="w-4/12 px-4">
            <div className="bg-gray-600 rounded-full shadow-xl flex mt-12 items-center">
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
