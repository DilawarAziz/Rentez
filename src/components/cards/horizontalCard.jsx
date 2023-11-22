import React from 'react'
import Image from 'next/image'
function HorizontalCard() {
    return (
        <div className='rounded-3xl shadow-md  hover:shadow-xl flex   justify-between  bg-white'>
            <Image src={'/images/Mask group.png'} width={0} height={0} sizes='100vw' className='w-[30%]' />
            <div className='space-y-2 p-3'>
                <div className='border border-gray-200 w-[fit-content] py-1 px-4 rounded-full'>
                    <p className='hover:text-orange  text-gray-500 cursor-pointer'>
                        Hardware
                    </p>
                </div>
                <h1 className='text-2xl font-bold'>
                    Sed ut perspiciatis unde omnis iste natus
                    atem accusantium
                </h1>

                <p className='text-gray-400'>
                    3699 Red Bud Lane, Rochelle Park
                </p>
                <p className='text-gray-400'>
                    3 Mints ago
                </p>
            </div>
            <div className='flex flex-col justify-between p-2'>
                <div className='text-gray-400 text-sm '>
                    <p className='text-end'>
                        3.8
                    </p>
                    <p >
                        (349Reviews)
                    </p>
                </div>
                <h1 className='text-orange text-xl font-bold bre '>
                    AED 685
                </h1>
            </div>
        </div>
    )
}

export default HorizontalCard