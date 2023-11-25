import React from 'react'
import Image from 'next/image'
function HorizontalCard() {
    return (
        <div className='rounded-3xl shadow-md  hover:shadow-xl flex   justify-between  bg-white'>
            <Image src={'/images/Mask group.png'} width={0} height={0} sizes='100vw' className='sm:w-[30%] w-[50%]' />
            <div className='flex justify-around flex-col p-3'>
                <div className='border border-gray-200 w-[fit-content] py-1 px-4 rounded-full'>
                    <p className='hover:text-orange text-sm  text-gray-500 cursor-pointer'>
                        Hardware
                    </p>
                </div>
                <h1 className='lg:text-2xl text-sm font-bold break-all'>
                    Sed ut perspiciatis unde omnis iste natus
                    atem accusantium
                </h1>

                <p className='text-gray-400 text-sm'>
                    3699 Red Bud Lane, Rochelle Park
                </p>
                <div className='flex gap-2'>
                    <p className='text-gray-400 text-sm'>
                        3 Mints ago
                    </p>
                    <p className='text-end sm:hidden block text-gray-400 text-sm'>
                        3.8
                    </p>
                    <p className='break-all sm:hidden block text-gray-400 text-sm'>
                        (349Reviews)
                    </p>

                </div>
            </div>
            <div className='sm:flex flex-col justify-between hidden pl-0 p-2'>
                <div className='text-gray-400 text-sm '>
                    <p className='text-end text-gray-400'>
                        3.8
                    </p>
                    <p className='break-all text-sm text-gray-400'>
                        (349Reviews)
                    </p>
                </div>
                <h1 className='text-orange md:text-xl font-bold text-sm '>
                    AED 685
                </h1>
            </div>
        </div>
    )
}

export default HorizontalCard