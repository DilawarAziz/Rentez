import React from 'react'
import Image from 'next/image'
function AboutUsCard() {
    return (
        <div className='rounded-xl items-center text-center flex flex-col  justify-center  '>
            <Image src={'/icons/sheild.png'} width={100} height={100} sizes='100vw' className='w-ful' />
            <div className='space-y-2 p-3'>
                <h1 className='text-lg font-bold'>
                    Lorem ipsum
                </h1>
                <p className='text-gray-400'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque.
                </p>
            </div>
        </div>
    )
}

export default AboutUsCard