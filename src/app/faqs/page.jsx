import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'
import Accordion from '@/components/ui/accordion'
import React from 'react'
import Image from 'next/image'
import Heading from '@/components/ui/Heading'
function Page() {
    return (
        <main className=''>
            <Header />
            <div className='relative '>
                <Image src={'/images/Mask group (1).png'} width={0} height={0} sizes='100vw' className='w-full' />
                <div className=' absolute top-[50%] left-[45%] '>
                    <Heading type={"heading"}>
                        faqs
                    </Heading>
                </div>
            </div>
            <div className='max-w-screen-xl mx-auto py-12 !px-4 xl:px-0'>
                <Accordion />
            </div>
            <Footer />
        </main >
    )
}

export default Page