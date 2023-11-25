import React from 'react'
import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'
import Image from 'next/image'
import DateRangePicker from '@/components/forms/DateRangePicker'
import Comments from '@/components/comments'
import Button from '@/components/ui/Button'
import CardsHeading from '@/components/cards/cardsHeading'
import ProductCard from '@/components/cards/productCard'
import Heading from '@/components/ui/Heading'
import Iconinput from '@/components/forms/iconinput'
function Page() {
    return (
        <main className=''>
            <Header />
            <div className='max-w-screen-xl mx-auto py-8 grid grid-cols-1 md:grid-cols-6 lg:grid-cols-8 md:gap-6 px-4 xl:px-0'>
                <div className='col-span-4 lg:col-span-6'>
                    <h1 className='font-bold text-2xl'>
                        Sed ut perspiciatis unde omnis iste natus atem accusantium...
                    </h1>
                    <div className='my-8'>
                        <Image src={'/images/room.png'} width={0} height={0} sizes='100vw' className='w-full' />
                    </div>
                    <div className='flex flex-wrap gap-8'>
                        <div className='border border-orange text-center py-2 px-6 mb-4 rounded-full'>
                            <p className=' font-medium text-sm  cursor-pointer'>
                                Condition : {" "}
                                <span className='text-orange'>
                                    Used
                                </span>
                            </p>
                        </div>
                        <div className='border border-orange text-center py-2 px-6 mb-4 rounded-full'>
                            <p className=' font-medium  text-sm  cursor-pointer'>
                                Availability : {" "}
                                <span className='text-orange'>
                                    12-June - 15-June
                                </span>
                            </p>
                        </div>
                        <div className='border border-orange text-center py-2 px-6 mb-4 rounded-full'>
                            <p className=' font-medium  text-sm  cursor-pointer'>
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
                    <div className='rounded-xl p-8 bg-orange bg-opacity-10 '>
                        <h1 className='text-xl font-bold'>
                            Product Booking
                        </h1>
                        <div className='grid grid-cols-1 lg:grid-cols-3  gap-2'>
                            <DateRangePicker from={'From'} to={"Till"} className={'flex-wrap col-span-2 grid grid-cols-1 sm:grid-cols-2'} />
                            <Iconinput placeholder={'99.9 '} type={'number'} className={'mt-6'} />
                        </div>
                    </div>
                </div>
                <div className='sm:col-span-2 '>
                    <div className='border border-orange text-center py-2 px-4 mt-4 md:mt-0 mb-4 rounded-full'>
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
                    <div className='flex items-center justify-end gap-4 mt-4'>
                        <div className='shadow-md rounded-full px-3 py-3 cursor-pointer'>

                            <Image src={'/icons/shareicon.svg'} width={20} height={20} sizes='100vw' className='' />
                        </div>
                        <div className='shadow-md rounded-full px-3 py-3 cursor-pointer'>

                            <Image src={'/icons/like.svg'} width={25} height={25} sizes='100vw' className='' />
                        </div>

                    </div>
                    <div className='border rounded-lg p-4 space-y-4 mt-12  border-gray-200'>
                        <Heading type={'subheading'}>
                            About Provider
                        </Heading>
                        <div className="flex items-center ">
                            <div className="inline-flex items-center mr-3 text-sm text-gray-900  font-semibold">
                                <Image src={'/images/usersquare.png'} sizes='100vw' className='w-full' height={0} width={0} alt={'icon'} />
                            </div>
                            <div>
                                <h1 className='font-bold text-base '> Michael Gough</h1>
                                <Image src={'/icons/rating.svg'} sizes='100vw' height={100} width={100} alt={'icon'} />
                                <h1 className='font-bold text-gray-600 text-sm '> 349 Reviews</h1>
                            </div>
                        </div>
                        <p className='text-gray-500 '>
                            consectetur piscing elit, sed do eiu mod. Lorem ipsum dolor sit aconse cteturpiscing elit, sed do eiu mod tempor.
                        </p>
                        <p className='text-orange font-bold text-base'>
                            Read More...
                        </p>
                        <Button className={"!rounded-full !w-full"}>
                            Contact
                        </Button>
                    </div>
                </div>

            </div>
            <div className='bg-[#000000] bg-opacity-5 py-16 px-4 xl:px-0'>
                <div className='max-w-screen-xl mx-auto'>
                    <h1 className='text-2xl font-bold'>
                        Top Reviews
                    </h1>
                    <div className='flex flex-col gap-6 w-[100%] md:w-[50%]'>
                        {Array.from({ length: 3 }).map((_, index) => (
                            <Comments key={index} />
                        ))}
                    </div>
                    <Button className={'!rounded-full !px-12'}>View all reviews</Button>
                    <div className='mt-6 space-y-6'>
                        <h1 className='text-2xl font-bold'>
                            Add Product Review
                        </h1>
                        <div className='rounded-xl p-6 bg-white w-[100%] sm:w-[50%]'>
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
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
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