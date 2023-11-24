'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import DropdownMenu from '../forms/dropdown'
import Searchinput from '../forms/searchinput'
import Button from '../ui/Button'
import Link from 'next/link';

function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleNavToggle = () => {
        setIsNavOpen(!isNavOpen);
    };
    return (
        <div className='w-full bg-white'>
            <div className='max-w-[1600px] mx-auto md:grid flex flex-wrap justify-between md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-4 p-4 items-center'>
                <Image src={'/logos/mainlogo.png'} width={0} height={0} sizes='100vw' className='w-[100px] md:w-[150px]' />
                <DropdownMenu title={'Country'} className={'rounded-full hidden md:block'} />
                <div className='col-span-4 hidden xl:block'>
                    <Searchinput />
                </div>
                <div className='md:flex gap-4 hidden  items-center justify-end xl:justify-center md:col-span-2 lg:col-span-4 xl:col-span-2' >
                    <Image src={'/icons/bell.png'} width={24} height={24} sizes='100vw' className='' />
                    <p className='text-orange font-bold'>
                        Login / Register
                    </p>
                </div>
                <Button className={'!rounded-full text-center !w-full bg-black hidden md:block'}>Sell</Button>
                <DropdownMenu title={'Indonesia'} className={'rounded-full hidden md:block'} />
                <button
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none  "
                    onClick={handleNavToggle}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5 text-orange" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className={`w-full md:hidden ${isNavOpen ? 'block' : 'hidden'} items-center text-center`} id="navbar-solid-bg">
                    <ul className="flex flex-col space-y-4 font-medium mt-4 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent ">
                        <li>
                            <Link href={'/'}
                                className="gap-2 font-bold py-2  md:p-0 flex flex-row justify-center text-primary rounded md:bg-transparent md:text-blue-700 " aria-current="page"

                            >
                                <Image src={'/icons/bell.png'} width={20} height={10} sizes='100vw' className='' />
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link href={'/Addlisting'}
                                className="block font-bold cool-link navlink   md:p-0 text-gray-900 rounded  md:hover:bg-transparent md:border-0 md:hover:text-primary">

                                Register
                            </Link>
                        </li>
                        <li>
                            <Link href={'/account'}
                                className="block font-bold py-2 cool-link navlink  md:p-0 text-gray-900 rounded  md:hover:bg-transparent md:border-0 md:hover:text-primary">
                                Become a Seller
                            </Link>
                        </li>
                        <li>

                            <Link href={'/rolodex'} className=" py-2  md:p-0 cool-link navlink font-bold text-gray-900 rounded  md:hover:bg-transparent md:border-0 hover:text-primary ">
                                About us
                            </Link>
                        </li>
                        <li>

                            <Link href={'/insidexplore '} className=" py-2  md:p-0 cool-link navlink font-bold text-gray-900 rounded  md:hover:bg-transparent md:border-0 hover:text-primary ">
                                Contact Us
                            </Link>
                        </li>

                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Header