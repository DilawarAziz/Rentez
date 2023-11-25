import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'
import React from 'react'
import Image from 'next/image'
import AboutUsCard from '@/components/cards/aboutusCard'
import Heading from '@/components/ui/Heading'
function Aboutus() {
    return (
        <main className=''>
            <Header />
            <div className='relative'>
                <Image src={'/images/Mask group (1).png'} width={0} height={0} sizes='100vw' className='w-full' />
                <div className=' absolute top-[50%] left-[45%] '>
                    <Heading type={'heading'} className=''>
                        About Us
                    </Heading>
                </div>
            </div>
            <div className='max-w-screen-xl mx-auto py-8 grid md:grid-cols-2 grid-cols-1 gap-14 p-4 xl:p-0'>
                <div className='flex flex-col justify-center gap-8'>
                    <h1 className='text-3xl font-bold'>
                        About Rent EZ
                    </h1>
                    <p className='text-sm lg:text-title-xsm'>
                        Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum eiusmod tempor. Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit.

                    </p>
                    <p className='text-sm lg:text-title-xsm'>
                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                        in culpa qui officia deserunt mollit anim id est laborum eiusmod tempor. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam

                    </p>
                </div>
                <div>
                    <Image src={'/images/Rectangle 50.png'} width={0} height={0} sizes='100vw' className='w-full' />

                </div>

            </div>
            <div className='bg-orange bg-opacity-10  py-12'>
                <div className='max-w-screen-xl mx-auto my-20 '>
                    <div className='flex items-center justify-center'>
                        <Heading type={"subheading"} className='text-2xl font-bold mb-10'>
                            Why Us
                        </Heading>
                    </div>
                    <div className='grid sm:grid-cols-3 grid-cols-1 gap-4'>
                        {[3, 5, 7,].map(() => (
                            <AboutUsCard className={'bg-'} />
                        ))}
                    </div>
                </div>
            </div>
            <div className='bg-[#000000] bg-opacity-5 '>
                <div className='max-w-screen-xl mx-auto grid sm:grid-cols-2 grid-cols-1'>
                    <div className='text-black px-4 py-4 sm:py-0 z-10 flex flex-col justify-center space-y-2   md:space-y-4 lg:space-y-10 '>
                        <div className=' font-bold '>
                            <Heading type={'heading'} className='sm:mb-6 '>
                                Get the app.
                            </Heading>
                            <p className='text-xl'>
                                Sell or buy. Almost anything.
                            </p>
                        </div>
                        <div className='flex gap-10 w-[50%] '>
                            <Image src={'/images/appstore.png'} width={0} height={0} sizes='100vw' className='w-full' />
                            <Image src={'/images/play-04142023-badge 1 (1).png'} width={0} height={0} sizes='100vw' className='w-full' />
                        </div>
                    </div>
                    <Image src={'/images/application.png'} width={0} height={0} sizes='100vw' className='w-full' />
                </div>
            </div>
            <Footer />
        </main>
    )
}

export default Aboutus