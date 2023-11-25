import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'
import React from 'react'
import Image from 'next/image'
import DateRangePicker from '@/components/forms/DateRangePicker'
import Button from '@/components/ui/Button'
import Heading from '@/components/ui/Heading'
function Page() {
    return (
        <main>
            <Header />
            <div className='bg-black bg-opacity-10'>
                <div className='max-w-screen-xl mx-auto py-12 px-4 xl:px-0'>
                    <div>
                        <Heading type={"heading"} >
                            My Rental Request Cart
                        </Heading>
                    </div>
                    <div className='bg-white rounded-xl  overflow-auto  p-10 space-y-12  flex flex-col gap-8 my-12  '>
                        {[1, 2].map(() => (
                            <div className='flex flex-wrap justify-between items-center'>
                                <Image src={'/backendimages/close_ring.svg'} sizes='100vw' height={40} width={40} alt={'icon'} />
                                <div className='flex items-center justify-center gap-2'>
                                    <Image src={'/backendimages/pricing.png'} sizes='100vw' height={100} width={100} alt={'icon'} />
                                    <h1 className='font-bold'>
                                        Brush cutter <br /> grass cutter
                                    </h1>
                                </div>
                                <div className='w-[500px]'>
                                    <DateRangePicker from={"From"} to={'Till'} className={'flex-wrap lg:flex-nowrap'} />
                                </div>
                                <div className='flex items-center mt-6'>
                                    <label className='font-bold mr-2'> $ 1200</label>
                                    <input type="number" className='border border-gray-200 rounded-lg w-[100px]' />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className='flex items-end  justify-end mb-10 sm:mb-40'>
                        <div className='space-y-12 sm:w-[40%]'>
                            <Heading type={"heading"} >
                                Cart Total
                            </Heading>
                            <div className='rounded-xl overflow-hidden bg-white ' >
                                <div className='flex items-center justify-between px-3 my-4'>
                                    <p>
                                        Subtotal
                                    </p>
                                    <p>
                                        $2400
                                    </p>
                                </div>
                                <hr className='border border-gray-200' />
                                <div className='flex items-center justify-between px-3 my-4'>
                                    <p>
                                        Total
                                    </p>
                                    <p>
                                        $2400
                                    </p>
                                </div>
                            </div>
                            <Button className={'!rounded-full w-full'}>
                                Complete my request
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </main>
    )
}

export default Page