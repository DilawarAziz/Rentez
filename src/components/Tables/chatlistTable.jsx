import React from 'react';
import Image from 'next/image';
const ChatlistTable = () => {
    const messages = [
        {
            person: 'John Doe',
            booking: 'Lorem Ipsum',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            lastActivity: 'Jan 12, 2023',
        },
        {
            person: 'Micheal Smith',
            booking: 'Lorem Ipsum',
            message: 'Lorem ipsum sit amet, consectetur adipiscing elit',
            lastActivity: 'Jan 12, 2023',
        },
        {
            person: 'John Doe',
            booking: 'Lorem Ipsum',
            message: 'Apartment in Al Riffa',
            lastActivity: 'Jan 12, 2023',
        },
        {
            person: 'Micheal Smith',
            booking: 'Lorem Ipsum',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            lastActivity: 'Jan 12, 2023',
        },
        {
            person: 'John Doe',
            booking: 'Lorem Ipsum',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            lastActivity: 'Jan 12, 2023',
        },
        {
            person: 'Micheal Smith',
            booking: 'Lorem Ipsum',
            message: 'Lorem ipsum sit amet, consectetur adipiscing elit',
            lastActivity: 'Jan 12, 2023',
        },
        {
            person: 'John Doe',
            booking: 'Lorem Ipsum',
            message: 'Apartment in Al Riffa',
            lastActivity: 'Jan 12, 2023',
        },
        {
            person: 'Micheal Smith',
            booking: 'Lorem Ipsum',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            lastActivity: 'Jan 12, 2023',
        },
    ];

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                <thead className="text-sm  text-gray-700 uppercase bg-orange bg-opacity-10 ">
                    <tr className=''>
                        <th scope="col" className="p-4">
                            <div className="flex items-center">
                                <input
                                    id="checkbox-all-search"
                                    type="checkbox"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label htmlFor="checkbox-all-search" className="sr-only">
                                    checkbox
                                </label>
                            </div>
                        </th>
                        <th scope="col" className="px-6 py-5">
                            Person Name
                        </th>
                        <th scope="col" className="px-6 py-5">
                            Booking
                        </th>
                        <th scope="col" className="px-6 py-5">
                            Message
                        </th>
                        <th scope="col" className="px-6 py-5">
                            Last Activity
                        </th>
                        <th scope="col" className="px-6 py-5">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {messages.map((message, index) => (
                        <tr key={index} className={(index % 2 === 0 ? 'bg-white ' : 'bg-gray-50 ') + 'hover:bg-orange hover:text-white'}>
                            <td scope="col" className="p-4">
                                <div className="flex items-center">
                                    <input
                                        id="checkbox-all-search"
                                        type="checkbox"
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 "
                                    />
                                    <label htmlFor="checkbox-all-search" className="sr-only">
                                        checkbox
                                    </label>
                                </div>
                            </td>
                            <td className="px-6 py-4">{message.person}</td>
                            <td className="px-6 py-4">{message.booking}</td>
                            <td className="px-6 py-4">{message.message}</td>
                            <td className="px-6 py-4">{message.lastActivity}</td>
                            <td className="flex items-center px-6 py-4">
                                {/* Add your action buttons or links here */}
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                    <Image src={'/backendimages/update.svg'} width={17} height={17} sizes='100vw' className='' />
                                </a>
                                <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">
                                    <Image src={'/backendimages/Trash_light.svg'} width={25} height={25} sizes='100vw' className='' />
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ChatlistTable;
