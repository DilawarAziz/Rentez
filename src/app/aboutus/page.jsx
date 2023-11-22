import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'
import React from 'react'
import Image from 'next/image'
import AboutUsCard from '@/components/cards/aboutusCard'
function Aboutus() {
    return (
        <main className=''>
            <Header />
            <div className='relative'>
                <Image src={'/images/Mask group (1).png'} width={0} height={0} sizes='100vw' className='w-full' />
                <div className=' absolute top-[50%] left-[45%] '>
                    <h1 className='text-4xl font-bold'>
                        About Us
                    </h1>
                </div>
            </div>
            <div className='max-w-screen-xl mx-auto py-8 grid grid-cols-2 gap-14'>
                <div className='flex flex-col justify-center gap-8'>
                    <h1 className='text-3xl font-bold'>
                        About Rent EZ
                    </h1>
                    <p>
                        Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum eiusmod tempor. Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit.

                    </p>
                    <p>
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
                        <h1 className='text-2xl font-bold mb-10'>
                            Why Us
                        </h1>
                    </div>
                    <div className='grid grid-cols-3 gap-4'>
                        {[3, 5, 7,].map(() => (
                            <AboutUsCard className={'bg-'} />
                        ))}
                    </div>
                </div>
            </div>
            <div className='bg-[#000000] bg-opacity-5 '>
                <div className='max-w-screen-xl mx-auto grid grid-cols-2 '>
                    <div className='text-black z-10 flex flex-col justify-center s text-center space-y-20 pr-[100px]'>
                        <h1 className='text-4xl font-bold'>
                            <p className='mb-6'>
                                Get the app.
                            </p>
                            <p>
                                Sell or buy. Almost anything.
                            </p>
                        </h1>
                        <div className='flex gap-10 '>
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