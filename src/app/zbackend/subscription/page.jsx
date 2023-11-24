import Footer from '@/components/footer/footer'
import InputSlider from '@/components/forms/rangeInput'
import Header from '@/components/header/header'
import Button from '@/components/ui/Button'
import React from 'react'

function Page() {
    return (
        <main>
            <Header />
            <div className='bg-black bg-opacity-10'>
                <div className='max-w-screen-xl space-y-20 p-14 mx-auto'>
                    <h1 className='text-4xl font-bold'>
                        Pricing
                    </h1>
                    <div className='bg-white rounded-xl p-[100px]'>
                        <InputSlider />
                    </div>
                    <div className='flex justify-center'>
                        <Button className={'!rounded-full !w-[40%]'}>
                            Complete my request
                        </Button>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}

export default Page