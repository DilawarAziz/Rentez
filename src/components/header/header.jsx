import React from 'react'
import Image from 'next/image'
import DropdownMenu from '../forms/dropdown'
import Searchinput from '../forms/searchinput'
import Button from '../ui/Button'
function Header() {
    return (
        <div className='w-full bg-white'>
            <div className='max-w-[1600px] mx-auto grid grid-cols-9 gap-4 p-4'>
                <Image src={'/logos/mainlogo.png'} width={110} height={110} sizes='100vw' className='' />
                <DropdownMenu title={'Country'} className={'rounded-full'} />
                <div className='col-span-4'>

                    <Searchinput />
                </div>
                <div className='flex gap-4 items-center' >
                    <Image src={'/icons/bell.png'} width={24} height={24} sizes='100vw' className='' />
                    <p className='text-orange '>
                        Login / Register
                    </p>
                </div>
                <Button className={'!rounded-full !px-14 bg-black'}>Sell</Button>
                <DropdownMenu title={'Indonesia'} className={'rounded-full'} />
            </div>
        </div>
    )
}

export default Header