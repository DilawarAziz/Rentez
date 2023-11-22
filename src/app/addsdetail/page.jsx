import React from 'react'
import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'
import Image from 'next/image'
import DateRangePicker from '@/components/forms/DateRangePicker'
import Comments from '@/components/comments'
import Button from '@/components/ui/Button'
import CardsHeading from '@/components/cards/cardsHeading'
import ProductCard from '@/components/cards/productCard'
function Page() {
    return (
        <main className=''>
            <Header />
            <div className='max-w-screen-xl mx-auto py-8 grid grid-cols-8 gap-6'>
                <div className='col-span-6'>
                    <h1 className='font-bold text-2xl'>
                        Sed ut perspiciatis unde omnis iste natus atem accusantium...
                    </h1>
                    <div className='my-8'>
                        <Image src={'/images/room.png'} width={0} height={0} sizes='100vw' className='w-full' />
                    </div>
                    <div className='flex gap-8'>
                        <div className='border border-orange text-center py-2 px-6 mb-4 rounded-full'>
                            <p className=' font-medium   cursor-pointer'>
                                Condition : {" "}
                                <span className='text-orange'>
                                    Used
                                </span>
                            </p>
                        </div>
                        <div className='border border-orange text-center py-2 px-6 mb-4 rounded-full'>
                            <p className=' font-medium   cursor-pointer'>
                                Availability : {" "}
                                <span className='text-orange'>
                                    12-June - 15-June
                                </span>
                            </p>
                        </div>
                        <div className='border border-orange text-center py-2 px-6 mb-4 rounded-full'>
                            <p className=' font-medium   cursor-pointer'>
                                Location : {" "}
                                <span className='text-orange'>
                                    32 Cardinal St.Ashtabula, OH 44004
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className='mt-10 space-y-4'>
                        <h1 className='font-bold text-3xl'>
                            Description
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                            ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                            in voluptate velit esse cillum dolore eu fugiat pariatur. Excepteur sint
                            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                            anim id est laborum eiusmod tempor.
                        </p>
                    </div>
                    <div className='rounded-xl p-8 bg-orange bg-opacity-10'>
                        <h1>
                            Product Booking
                        </h1>
                        <DateRangePicker />
                    </div>
                </div>
                <div className='col-span-2'>
                    <div className='border border-orange text-center py-2 px-4 mb-4 rounded-full'>
                        <p className=' font-bold text-xl  cursor-pointer'>
                            $250 {" "}
                            <span className='text-sm'>
                                Per Day
                            </span>
                        </p>
                    </div>
                    <div className='space-y-5 '>
                        <Image src={'/images/Group 1000004848.png'} width={0} height={0} sizes='100vw' className='w-full' />
                        <Image src={'/images/Group 1000004848.png'} width={0} height={0} sizes='100vw' className='w-full' />
                        <Image src={'/images/Group 1000004848.png'} width={0} height={0} sizes='100vw' className='w-full' />
                    </div>
                </div>

            </div>
            <div className='bg-[#000000] bg-opacity-5 py-16'>
                <div className='max-w-screen-xl mx-auto'>
                    <h1 className='text-2xl font-bold'>
                        Top Reviews
                    </h1>
                    <div className='flex flex-col gap-6 w-[50%]'>
                        {Array.from({ length: 3 }).map((_, index) => (
                            <Comments key={index} />
                        ))}
                    </div>
                    <Button className={'!rounded-full !px-12'}>View all reviews</Button>
                    <div className='mt-6 space-y-6'>
                        <h1 className='text-2xl font-bold'>
                            Add Product Review
                        </h1>
                        <div className='rounded-xl p-6 bg-white w-[50%]'>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat
                                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>

                        </div>
                        <Button className={'!rounded-full !px-12'}>Submit</Button>

                    </div>
                </div>

            </div>
            <div>

                <div className='max-w-screen-xl mx-auto my-20 p-6'>
                    <CardsHeading heading={"Categories"} link={"View All"} />
                    <div className='grid grid-cols-4 gap-4'>
                        {[3, 5, 6, 7,].map(() => (
                            <ProductCard />
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    )
}

export default Page