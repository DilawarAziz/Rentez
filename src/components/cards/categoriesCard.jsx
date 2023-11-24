import React from 'react'
import Image from 'next/image'
function CategoriesCard() {
    return (
        <div className='rounded-xl hover:shadow-xl shadow-lg cursor-pointer space-y-4 px-4 flex flex-col items-center justify-center p-4 bg-white'>
            <Image src={'/icons/pana.svg'} width={40} height={40} sizes='100vw' className='w-fusll' />
            <h1 className='bg-orange rounded-full px-1 text-white text-sm'>
                189
            </h1>
            <h1 className='font-bold'>
                Plumbing Items
            </h1>
        </div>
    )
}

export default CategoriesCard