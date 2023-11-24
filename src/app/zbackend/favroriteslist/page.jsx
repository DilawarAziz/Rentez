import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'
import React from 'react'
import Image from 'next/image'
import DateRangePicker from '@/components/forms/DateRangePicker'
import Button from '@/components/ui/Button'
import HorizontalCard from '@/components/cards/horizontalCard'
function Page() {
    return (
        <main>
            <Header />
            <div className='bg-black bg-opacity-10'>
                <div className='max-w-screen-xl space-y-10  mx-auto py-12'>
                    <div>
                        <h1 className='text-4xl font-bold'>
                            My Rental Request Cart
                        </h1>
                    </div>
                    <div className='grid grid-cols-8 items-center '>
                        <div className='col-span-6 flex items-center'>
                            <p>
                                Search ads : {" "}
                            </p>
                            <input type="text" placeholder='Enter ads title' className='rounded-lg border border-gray-200 w-[90%]' />
                        </div>
                        <Button className={'w-full !rounded-full col-span-2'}>
                            Search
                        </Button>
                    </div>
                    {[1, 3, 4, 5].map((items, index) => (
                        <HorizontalCard />
                    ))}
                </div>
            </div>
            <Footer />
        </main>
    )
}

export default Page