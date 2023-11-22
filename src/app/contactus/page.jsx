import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'
import React from 'react'
import Image from 'next/image'
import ContactUsSection from '@/components/forms/contactform'
function Page() {
    return (
        <main className=''>
            <Header />
            <div className='relative'>
                <Image src={'/images/Mask group (1).png'} width={0} height={0} sizes='100vw' className='w-full' />
                <div className=' absolute top-[50%] left-[45%] '>
                    <h1 className='text-4xl font-bold'>
                        Contact Us
                    </h1>
                </div>
            </div>
            <div className='max-w-screen-xl mx-auto py-8  '>
                <ContactUsSection />
            </div>

            <Footer />
        </main>
    )
}

export default Page