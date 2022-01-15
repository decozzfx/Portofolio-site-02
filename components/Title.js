import React from 'react'

const Title = ({children}) => {
    return (
        <>
            <h1 className='md:text-5xl text-4xl mt-5 font-bold'>{children}</h1>
        </>
    )
}

export default Title
