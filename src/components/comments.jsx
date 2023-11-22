import React from 'react';
import Image from 'next/image';
const Comments = () => {
    return (
        <article className="py-6 text-base  rounded-lg ">
            <footer className="flex justify-between items-center mb-2">
                <div className="flex items-center">


                    <Image src={'/icons/rating.svg'} sizes='100vw' height={60} width={60} alt={'icon'} />
                </div>
                <p
                    className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500   "
                >
                    Feb. 8, 2022
                </p>
            </footer>
            <p className="text-gray-500 dark:text-gray-400">
                Very straight-to-point article. Really worth time reading. Thank you! But tools are just the instruments for the UX designers. The knowledge of the design tools are as important as the creation of the design strategy.
            </p>
            <div className="flex items-center mt-4 space-x-4">
                <div className="flex items-center">
                    <div className="inline-flex items-center mr-3 text-sm text-gray-900  font-semibold">
                        <Image src={'/images/user.png'} sizes='100vw' height={40} width={40} alt={'icon'} />
                    </div>
                    <div>
                        <h1 className='font-bold text-base md:text-lg'> Michael Gough</h1>
                    </div>
                </div>
            </div>
            <hr className='border border-gray-200 mt-6' />
        </article>
    );
};

export default Comments;
