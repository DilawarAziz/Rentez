import React from 'react'
import Heading from '../ui/Heading'

function CardsHeading({ heading, link }) {
    return (
        <div className='flex items-center justify-between mb-4'>
            <Heading type={'subheading'} className='lg:text-3xl '>
                {heading}
            </Heading>
            <Heading type={'paragraph'} className='text-orange  cursor-pointer'>
                {link}
            </Heading>
        </div>
    )
}

export default CardsHeading