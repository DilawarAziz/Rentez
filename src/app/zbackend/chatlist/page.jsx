import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'
import React from 'react'
import Image from 'next/image'
import ChatlistTable from '@/components/Tables/chatlistTable'
import Heading from '@/components/ui/Heading'
function ChatList() {
    return (
        <main>
            <Header />
            <div className='bg-black bg-opacity-10 py-4 md:py-14'>
                <div className='max-w-screen-xl mx-auto p-4 xl:p-0'>
                    <div className='flex gap-4 sm:gap-12 items-center'>
                        <div className='flex gap-3 items-center'>
                            <Image src={'/backendimages/download.svg'} width={30} height={30} sizes='100vw' className='' />
                            <p className='font-semibold text-sm sm:text-xl'>
                                Inbox
                            </p>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <Image src={'/backendimages/download.svg'} width={30} height={30} sizes='100vw' className='' />
                            <p className='font-semibold text-sm sm:text-xl text-gray-500'>
                                All Message
                            </p>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <Image src={'/backendimages/download.svg'} width={30} height={30} sizes='100vw' className='' />
                            <p className='font-semibold text-sm sm:text-xl text-gray-500'>
                                Archive
                            </p>
                        </div>
                    </div>
                    <div>
                        <Heading type={'subheading'} className='mt-6'>
                            Inbox
                        </Heading>
                    </div>
                    <div className='mb-16 md:mb-40 mt-6 md:mt-12'>
                        <ChatlistTable />
                    </div>
                </div>

            </div>
            <Footer />
        </main>
    )
}

export default ChatList