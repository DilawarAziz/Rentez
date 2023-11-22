'use client'
import React, { useState } from 'react'
import Image from 'next/image'
function Testominalcarosal() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const arr = [6, 4, 4, 6]
    const handleScroll = (direction) => {
        const scrollAmount = 200; // Adjust the scroll distance as needed
        const newScrollPosition = direction === 'left' ? scrollPosition - scrollAmount : scrollPosition + scrollAmount;
        setScrollPosition(newScrollPosition);
    };
    const isScrollableLeft = scrollPosition > 0;
    const isScrollableRight = scrollPosition < (arr?.length - 1) * 350;
    return (
        <div id="animation-carousel" className="relative w-full mt-12" data-carousel="static">
            {/* Slider controls */}
            <div className='flex items-end justify-end mb-2'>
                <button
                    type="button"
                    className=" z-30 flex items-center justify-center  px-2 cursor-pointer group focus:outline-none"
                    data-carousel-prev
                    onClick={() => handleScroll('left')}
                    disabled={!isScrollableLeft}
                >
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-transparent border-2 border-primary dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg
                            className="w-2 h-2 text-white dark:text-gray-800"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                        >
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button
                    type="button"
                    className=" z-30 flex items-center justify-center  px-2 cursor-pointer group focus:outline-none"
                    data-carousel-next
                    onClick={() => handleScroll('right')}
                    disabled={!isScrollableRight}
                >
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-transparent border-2 border-primary dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg
                            className="w-2 h-2 text-white dark:text-gray-800"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                        >
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>
            {/* Carousel wrapper */}
            <div className="relative w-full  gap-4  overflow-hidden rounded-lg ">
                <div
                    className="flex p-4"
                    style={{ transform: `translateX(-${scrollPosition}px)`, transition: 'transform 0.3s ease-in-out' }}
                >
                    {arr.map((items, index) => (
                        <div key={index} className=" border min-w-full md:min-w-[600px] mx-2  border-primary rounded-xl p-8 space-y-2  flex flex-col duration-200 ease-linear" data-carousel-item>

                            <Image src={'/icons/quotes.svg'} className='text-primary' alt='quote' width={30} height={30} />
                            <h1 className='text-lg font-medium'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque </h1>
                            <p className='text-sm text-gray-500'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,</p>
                            <div className='flex gap-4 '>
                                <Image
                                    src="/images/user.png"
                                    className=" "
                                    alt='quote' width={50} height={50}
                                />
                                <div className='flex flex-col '>

                                    <h1 className='text-md font-medium'>Amru Alabidi</h1>
                                    <p className='text-sm text-gray-500'>Worley</p>
                                </div>
                            </div>


                        </div>
                    ))}

                </div>
            </div>

        </div>
    )
}

export default Testominalcarosal