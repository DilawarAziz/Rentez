'use client'
import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'
import React from 'react'
import Image from 'next/image'
import TextFeild from '@/components/forms/TextFeild'
import { useForm } from 'react-hook-form';
import Button from '@/components/ui/Button'
import OrderSumeryCard from '@/components/cards/orderSumeryCard'
import Link from 'next/link'
import Heading from '@/components/ui/Heading'

function Page() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: "",
            password: ""
        }
    });
    const onSubmit = (data) => console.log(data);
    const handleLogin = (e) => {
        console.log(e)
        console.log('dispatched')
    }

    return (
        <main>
            <Header />
            <div className='bg-black bg-opacity-10 '>
                <div className='max-w-screen-xl mx-auto py-10 px-4 xl:px-0'>
                    <Heading type={"heading"}>Account</Heading >
                    <div className=' grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-2 sm:my-10 gap-6'>
                        <div className='lg:col-span-2 rounded-lg p-6 bg-white'>
                            <div className='lg:w-[80%] mx-auto'>
                                <div className='flex items-center justify-between'>
                                    <h1 className='font-semibold  text-orange'>
                                        Account
                                    </h1>
                                    <div className="hidden sm:flex sm:w-10 w-4 md:w-4 lg:w-10 bg-orange h-0.5 dark:bg-gray-700"></div>
                                    <Image src={'/backendimages/timeline.svg'} width={20} height={20} sizes='100vw' className='' />
                                    <div className="hidden sm:flex sm:w-10 w-4 md:w-4 lg:w-10 bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                                    <h1 className='font-semibold text-gray-500'>
                                        Shipping
                                    </h1>
                                    <div className="hidden sm:flex sm:w-10 w-4 md:w-4 lg:w-10 bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                                    <Image src={'/backendimages/timeline.svg'} width={20} height={20} sizes='100vw' className='' />
                                    <div className="hidden sm:flex sm:w-10 w-4 md:w-4 lg:w-10 bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                                    <h1 className='font-semibold text-gray-500'>
                                        Payment
                                    </h1>
                                    {/* </div> */}
                                </div>
                                <form onSubmit={handleSubmit(handleLogin)} className="mt-8 space-y-6"  >
                                    <h1 className='md:text-2xl text-lg  font-semibold'>Account details</h1>
                                    <TextFeild
                                        name={'email'}
                                        inputType={"email"}
                                        label={'Email address'}
                                        register={register}
                                        error={errors.email?.message}
                                        placeholder={'Email Address'}
                                    />
                                    <TextFeild
                                        name={'email'}
                                        inputType={"password"}
                                        label={'Password'}
                                        register={register}
                                        error={errors.email?.message}
                                        placeholder={'Email Address'}
                                    />
                                    <div className='w-full flex items-center gap-4 justify-end'>
                                        <p className='text-gray-500 font-medium'>
                                            Register for account
                                        </p>
                                        <Button className={'!py-3 !px-8'}>Login</Button>
                                    </div>
                                </form>
                                <div className='w-full flex flex-col lg:flex-row lg:items-center items-end gap-4 justify-end mt-40'>
                                    <p className='text-gray-500 font-medium text-center'>
                                        Register for account
                                    </p>
                                    <Link href={'/zbackend/createorder/shipping'}>
                                        <Button className={'!py-3 !px-8'}>Shipping details</Button>
                                    </Link>
                                </div>
                            </div>

                        </div>
                        <OrderSumeryCard register={register} />
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}

export default Page