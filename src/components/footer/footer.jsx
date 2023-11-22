import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function Footer() {
    return (
        <>
            <div className='!text-black bg-[#000000] bg-opacity-5 p-4 gap-2 px-8 py-16  xl:!px-0  '>
                <div className='max-w-screen-xl mx-auto flex flex-col justify-between items-center'>
                    <div className='grid md:grid-cols-5 grid-cols-2 gap-2 it w-full'>

                        <div className=''>
                            <Image src={'/logos/mainlogo.png'} width={0} height={0} className={'w-full pr-6'} sizes='100vw' alt='login' />
                            {/* <div className='flex gap-4 mt-6'>

                            <Image src={'/logos/insta.svg'} width={20} height={20} alt='login' />
                            <Image src={'/logos/insta.svg'} width={20} height={20} alt='login' />
                            <Image src={'/logos/insta.svg'} width={20} height={20} alt='login' />
                            <Image src={'/logos/insta.svg'} width={20} height={20} alt='login' />
                        </div> */}
                        </div>
                        <div className=' footer-col flex flex-col space-y-6  text-sm'>
                            <h1 className='  font-bold text-md    text-lg' >Quick Links</h1>
                            <p>Become a Seller </p>
                            <Link href='/aboutus'> About us</Link>
                            <Link href='/addsdetail'> Pricing </Link>
                            <Link href='/subcategories'>Categories</Link>
                        </div>
                        <div className=' footer-col flex flex-col space-y-6  text-sm'>
                            <h1 className='  font-bold text-md    text-lg' >Categories</h1>
                            <p>Featured Listings </p>
                            <p>Top Listings</p>
                            <Link href='/profile'> Fresh Recommendations</Link>
                            <Link href='/tradedetail'>Finance</Link>
                            <p>Contact</p>
                        </div>
                        <div className='footer-col flex flex-col space-y-6  text-sm'>
                            <h1 className='font-bold text-md    text-lg' >Support</h1>
                            <Link href={'/tradelisting'}>How it Works </Link>
                            <Link href={'/faqs'}>
                                FAQs
                            </Link>
                            <Link href={'/termsandconditions'}>Terms & Conditions</Link>

                            <Link href={'/privacy-policy'}>Privacy Policy</Link>
                            <Link href={'/contactus'}>Contact Us</Link >
                            <Link href={'/termsandconditions'}>Careers</Link >
                        </div>
                        <div className=' footer-col flex flex-col space-y-  text-sm'>
                            <h1 className='font-bold text-md    text-lg ' >Email</h1>
                            <p>info@rentez.com </p>
                            <h1 className='font-bold text-md    text-lg mt-4' >Phone</h1>
                            <p>12345 67890</p>
                            <h1 className='font-bold text-md    text-lg mt-4' >Locations</h1>
                            <p>Elementum eleifend purus egestas. </p>
                        </div>
                    </div>
                    <div className='w-full space-y-10   mt-20 mb-10'>

                        <div className='flex justify-between space-y-10 md:space-y-0 w-[70%] ml-auto items-center flex-col md:flex-row'>
                            <div>
                                <h1 className='font-bold text-md    text-lg mt-4' >
                                    Subscribe Now
                                </h1>
                                <p className='text-sm'>
                                    Subscribe  now to get regular updates.
                                </p>
                            </div>
                            <form className='w-[50%] '>
                                <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:">
                                    Search
                                </label>
                                <div className="relative ">

                                    <input
                                        type="search"
                                        id="search"
                                        className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full  focus:ring-blue-500 focus:lue-500 "
                                        placeholder="Search"
                                    />
                                    <button
                                        type="submit"
                                        className="  absolute right-2.5 bottom-2.5 bg-orange rounded-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm px-4 py-2 "
                                    >
                                        Search
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <hr className='border-t-2 border-gray-200' />
                <div className='max-w-screen-xl mx-auto flex items-center justify-between  mt-6'>
                    <h1>
                        Copyright 2023, All rights reserved.
                    </h1>
                    <div className='flex gap-4'>

                        {[1, 4, 5, 6].map(() => (
                            <div className='bg-white p-3 rounded-full'>
                                <Image src={'/logos/x.svg'} sizes='100vw' width={20} height={20} className='' />
                            </div>
                        ))
                        }
                    </div>
                </div>
            </div >


        </>
    )
}




export default Footer