import React from 'react'
import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'
import Image from 'next/image'
import Button from '@/components/ui/Button'
function Page() {
    return (
        <main>
            <Header />
            <div className='max-w-screen-xl mx-auto py-4 sm:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  px-4 xl:px-0'>
                <div>
                    <div className="flex items-center gap-6">
                        <div className="inline-flex items-center mr-3 text-sm text-gray-900  font-semibold">
                            <Image src={'/images/user2.png'} sizes='100vw' height={150} width={150} alt={'icon'} />
                        </div>
                        <div>
                            <h1 className='font-bold text-base md:text-xl'> Michael Gough</h1>
                            <Image src={'/icons/rating.svg'} sizes='100vw' height={100} width={100} alt={'icon'} />
                        </div>
                    </div>
                    <div className='flex flex-col space-y-8 w-full mt-12 p-4 shadow-md rounded-xl'>
                        <div className='flex justify-between items-center'>
                            <h1 className='font-bold'>
                                Name
                            </h1>
                            <p>
                                Adam James
                            </p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <h1 className='font-bold'>
                                Phone
                            </h1>
                            <p>
                                +97 123 456 7890
                            </p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <h1 className='font-bold'>
                                Gender
                            </h1>
                            <p>
                                Male
                            </p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <h1 className='font-bold'>
                                Email Address
                            </h1>
                            <p>
                                adam@gmail.com
                            </p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <h1 className='font-bold'>
                                Date of Birth
                            </h1>
                            <p>
                                12/11/1988
                            </p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <h1 className='font-bold'>
                                Nationality
                            </h1>
                            <p>
                                USA
                            </p>
                        </div>
                    </div>
                    <Button className={'!w-full !mt-8 !rounded-full'}>
                        Home
                    </Button>
                </div>

            </div>
            <Footer />
        </main>
    )
}

export default Page