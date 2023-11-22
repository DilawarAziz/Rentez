import React from 'react'

function CardsHeading({ heading, link }) {
    return (
        <div className='flex items-center justify-between mb-4'>
            <h1 className='text-3xl font-bold'>
                {heading}
            </h1>
            <p className='text-orange font-semibold cursor-pointer'>
                {link}
            </p>
        </div>
    )
}

export default CardsHeading