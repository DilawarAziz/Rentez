import React from 'react'
import Image from 'next/image'
function ProductCard() {
    return (
        <div className='rounded-xl shadow-md  hover:shadow-xl flex flex-col  justify-center  bg-white'>
            <Image src={'/images/cycle.png'} width={0} height={0} sizes='100vw' className='w-full' />
            <div className='space-y-2 p-3'>
                <h1 className='  text-sm text-gray-400'>
                    3 min ago
                </h1>
                <h1 className='text-sm sm:text-lg font-bold'>
                    Sed ut perspiciatis unde omnis
                </h1>
                <h1 className='text-orange text-sm sm:text-xl font-bold'>
                    AED 685
                </h1>
                <p className='text-gray-400 text-sm'>
                    3699 Red Bud Lane, Rochelle Park
                </p>
            </div>
        </div>
    )
}

export default ProductCard