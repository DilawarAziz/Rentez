import React, { useState } from 'react';

const SearchForm = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <form>
            <div className="flex ">
                <label htmlFor="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                    Your Email
                </label>

                <div className="relative w-full">
                    <input
                        type="search"
                        id="search-dropdown"
                        className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-full  border-2  border-gray-200 focus:ring-blue-500 focus:border-blue-500  "
                        placeholder="Search any thing..."
                        required
                    />
                    <div className='absolute top-0 end-10 z-[9999999999]'>
                        <button
                            id="dropdown-button"
                            data-dropdown-toggle="dropdown"
                            className=" flex-shrink-0  text-gray-500 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center    border-gray-300  hover:bg-gray-200 "
                            type="button"
                            onClick={toggleDropdown}
                        >
                            All categories{' '}
                            <svg
                                className="w-2.5 h-2.5 ms-2.5 text-orange"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 10 6"
                            >
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                            </svg>
                        </button>
                        <div
                            id="dropdown"
                            className={`z-[999999] ${isOpen ? 'block' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow w-full dark:bg-gray-700`}
                        >
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                                <li>
                                    <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                        Mockups
                                    </button>
                                </li>
                                <li>
                                    <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                        Templates
                                    </button>
                                </li>
                                <li>
                                    <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                        Design
                                    </button>
                                </li>
                                <li>
                                    <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                        Logos
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="absolute top-1 end-2  p-2 text-sm font-medium  text-white bg-black rounded-full border  "
                    >
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                        <span className="sr-only">Search</span>
                    </button>
                </div>
            </div>
        </form>
    );
};

export default SearchForm;
