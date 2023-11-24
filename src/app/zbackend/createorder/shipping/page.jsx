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
import Dropdown from '@/components/forms/dropdown'
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
                    <Heading type={"heading"}>Shipping</Heading >
                    <div className=' grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-2 sm:my-10 gap-6'>
                        <div className='lg:col-span-2 rounded-lg p-6 bg-white'>
                            <div className='lg:w-[80%] mx-auto'>
                                <div className='flex items-center justify-between text-orange'>
                                    <h1 className='font-semibold '>
                                        Account
                                    </h1>
                                    <div className="hidden sm:flex w-10 bg-orange h-0.5 dark:bg-gray-700"></div>
                                    <Image src={'/backendimages/timeline.svg'} width={20} height={20} sizes='100vw' className='' />
                                    <div className="hidden sm:flex w-10 bg-orange h-0.5 dark:bg-gray-700"></div>
                                    <h1 className='font-semibold '>
                                        Shipping
                                    </h1>
                                    <div className="hidden sm:flex w-10 bg-orange h-0.5 dark:bg-gray-700"></div>
                                    <Image src={'/backendimages/timeline.svg'} width={20} height={20} sizes='100vw' className='' />
                                    <div className="hidden sm:flex w-10 bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                                    <h1 className='font-semibold text-gray-500'>
                                        Payment Details
                                    </h1>
                                    {/* </div> */}
                                </div>

                                <form onSubmit={handleSubmit(handleLogin)} className="mt-8 space-y-6"  >
                                    <h1 className='text-2xl font-semibold'>Account details</h1>
                                    <div className='flex items-center justify-between'>
                                        <p>
                                            Use saved card
                                        </p>
                                        <Dropdown title={'Mastercard ending 234'} className={'w-[50%] rounded-lg'} />
                                    </div>
                                    <TextFeild
                                        name={'email'}
                                        inputType={"text"}
                                        label={'Name on card'}
                                        register={register}
                                        error={errors.email?.message}
                                        placeholder={'Pomaline Moses Olanrewaju'}
                                    />
                                    <TextFeild
                                        name={'email'}
                                        inputType={"text"}
                                        label={'Street name'}
                                        register={register}
                                        error={errors.email?.message}
                                        placeholder={'Electric avenue'}
                                    />
                                    <div className='grid grid-cols-2 gap-4'>
                                        <TextFeild
                                            name={'email'}
                                            inputType={"text"}
                                            label={'Card number'}
                                            register={register}
                                            error={errors.email?.message}
                                            placeholder={'123 - 456 -'}
                                        />
                                        <div className='flex flex-col'>
                                            <label>Select shipping </label>
                                            <Dropdown title={'Free delivery'} className={'!border !border-gary-500 w-[100%] rounded-lg'} />
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-2 gap-5'>
                                        <TextFeild
                                            name={'email'}
                                            inputType={"text"}
                                            label={'Expiration'}
                                            register={register}
                                            error={errors.email?.message}
                                            placeholder={'03 / 24'}
                                        />
                                        <TextFeild
                                            name={'email'}
                                            inputType={"text"}
                                            label={'CVC'}
                                            register={register}
                                            error={errors.email?.message}
                                            placeholder={'123'}
                                        />
                                    </div>

                                </form>
                                <hr className='border border-gray-200 my-8' />
                                <div className='w-full flex items-center gap-4 justify-end '>
                                    <p className='text-gray-500 font-medium'>
                                        Cancel order
                                    </p>
                                    <Link href={'/zbackend/createorder/payment'}>
                                        <Button className={'!py-3 !px-8'}>Payment </Button>
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