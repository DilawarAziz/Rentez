'use client'
import React, { useState } from 'react'
import CardsHeading from '@/components/cards/cardsHeading'
import CategoriesCard from '@/components/cards/categoriesCard'
import Footer from '@/components/footer/footer'
import TextFeild from '@/components/forms/TextFeild'
import Checkbox from '@/components/forms/checkbox'
import Dropdown from '@/components/forms/dropdown'
import InputSlider from '@/components/forms/rangeInput'
import Header from '@/components/header/header'
import Image from 'next/image'
import HorizontalCard from '@/components/cards/horizontalCard'
function SubCategories() {
    const [value, setValue] = useState(50);

    return (
        <main className='bg-[#000000] bg-opacity-5'>
            <Header />
            <div className='max-w-screen-xl mx-auto py-8'>
                <CardsHeading heading={'Categories '} />
                <div className='flex justify-between '>
                    {[3, 5, 6, 7, 3, 89].map(() => (
                        <CategoriesCard />
                    ))}
                </div>
                <div className='flex  gap-4 mt-12'>
                    {['Hardware Items', 'Item name1', 'Item Name 2', 'Item Name 2'].map((items, index) => (
                        <div key={index} className='border border-gray-200 py-2 px-4 rounded-full'>
                            <p className='hover:text-orange  font-semibold cursor-pointer'>
                                {items}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='w-full bg-white py-12'>
                <div className='max-w-screen-xl mx-auto py-8 grid grid-cols-8 gap-6 '>
                    <div className='col-span-2 space-y-6'>
                        <div>
                            <hr className='border border-gray-200' />
                            <Dropdown title={'Locations'} className={'border-none w-full my-2'} styleButton={'px-0 text-xl !text-black !font-bold'} />
                            {["Ireland", "England", "Italy", "Greece", "France"].map((items, index) => (
                                <Checkbox key={index} title={items} />
                            ))}
                            <h1 className='font-bold text-orange underline'>Show More</h1>
                        </div>
                        <div className=''>
                            <hr className='border border-gray-200' />
                            <Dropdown title={'City'} className={'border-none w-full my-2'} styleButton={'px-0 text-xl !text-black !font-bold'} />
                            {["Ireland", "England", "Italy",].map((items, index) => (
                                <Checkbox key={index} title={items} />
                            ))}
                            <h1 className='font-bold text-orange underline'>Show More</h1>
                        </div>
                        <div className=''>
                            <hr className='border border-gray-200' />
                            <Dropdown title={'Document Required'} className={'border-none w-full my-2'} styleButton={'px-0 text-xl !text-black !font-bold'} />
                            {["Yes", "No"].map((items, index) => (
                                <Checkbox key={index} title={items} />
                            ))}
                            <h1 className='font-bold text-orange underline'>Show More</h1>
                        </div>
                        <div className=''>
                            <hr className='border border-gray-200' />
                            <Dropdown title={'Budget'} className={'border-none w-full my-2'} styleButton={'px-0 text-xl !text-black !font-bold'} />
                            <div className='border border-gray-200 py-2 px-4 my-4 rounded-full'>
                                <p className='   cursor-pointer'>
                                    AED {value}
                                </p>
                            </div>
                            <hr className='border border-gray-200 my-4' />
                            <InputSlider value={value} setValue={setValue} />
                            <div className='flex justify-between my-4'>
                                <p className='text-gray-400'>
                                    AED 2,000
                                </p>
                                <p className='text-gray-400'>
                                    AED 100,000
                                </p>
                            </div>
                            <Dropdown title={'Categories'} className={'border-none w-full my-2'} styleButton={'px-0 text-xl !text-black !font-bold'} />
                            <hr className='border border-gray-200 ' />
                            <Dropdown title={'Language'} className={'border-none w-full my-2'} styleButton={'px-0 text-xl !text-black !font-bold'} />
                            <hr className='border border-gray-200 ' />
                            <Dropdown title={'Duration'} className={'border-none w-full my-2'} styleButton={'px-0 text-xl !text-black !font-bold'} />

                        </div>
                    </div>

                    <div className='col-span-6'>
                        <div className='flex justify-between items-center '>
                            <p>
                                254 Results
                            </p>
                            <div className='flex gap-6 items-center'>
                                <Image src={'/icons/menuicon.svg'} width={20} height={20} sizes='100vw' className='cursor-pointer' />
                                <Image src={'/icons/grid.svg'} width={20} height={20} sizes='100vw' className='cursor-pointer' />
                                <div className='flex gap-4 items-center'>
                                    <p>
                                        Sort By:
                                    </p>
                                    <Dropdown title={'Price low to high '} className={' rounded-lg x'} />

                                </div>
                            </div>
                        </div>
                        <div className='mt-16 space-y-4'>
                            {Array.from({ length: 6 }).map((_, index) => (
                                <HorizontalCard key={index} />
                            ))}
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </main>
    )
}

export default SubCategories