'use client'
import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'
import React from 'react'
import Image from 'next/image'
import TextFeild from '@/components/forms/TextFeild'
import Dropdown from '@/components/forms/dropdown'
import { useForm } from 'react-hook-form';
import Link from 'next/link'
import Button from '@/components/ui/Button'

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
            <div className='bg-opacity-10 flex items-center justify-center bg-black'>

                <div className='lg:w-[40%] md:w-[70%] w-[100%] py-16 px-4 xl:px-0'>
                    <div className='flex justify-between items-center'>
                        <div className="flex items-center gap-6 l">
                            <div className="inline-flex items-center mr-1 md:mr-3 text-sm text-gray-900  font-semibold">
                                <Image src={'/images/user2.png'} sizes='100vw' height={100} width={100} alt={'icon'} />
                            </div>
                            <div>
                                <h1 className='font-bold text-base md:text-xl'> Michael Gough</h1>
                            </div>
                        </div>
                        <div className='border hidden sm:block border-gray-500 rounded-full py-1 px-4'>
                            <p className='font-medium text-sm'>
                                Update Picture
                            </p>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit(handleLogin)} className="mt-8 space-y-6"  >
                        <div>
                            <TextFeild
                                name={'name'}
                                inputType={"text"}
                                label={'Name'}
                                register={register}
                                error={errors.email?.message}
                                placeholder={'Adam James'}
                            />

                        </div>
                        <div>
                            <TextFeild
                                name={'Phone'}
                                inputType={"number"}
                                label={'Phone'}
                                register={register}
                                error={errors.email?.message}
                                placeholder={'+97 123 456 7890'}
                            />
                        </div>
                        <div>
                            <label className='font-medium'>
                                Gender
                            </label>
                            <Dropdown title={'Male'} className={'w-full border-none '} styleButton={'!rounded-lg'} />
                        </div>
                        <div>
                            <TextFeild
                                name={'email'}
                                inputType={"email"}
                                label={'Email Address'}
                                register={register}
                                error={errors.email?.message}
                                placeholder={'adam@gmail.com'}
                            />
                        </div>
                        <div>
                            <label className='font-medium'>
                                Date of Birth
                            </label>
                            <Dropdown title={'12/11/1988'} className={'w-full border-none '} styleButton={'!rounded-lg'} />
                        </div>
                        <div>
                            <label className='font-medium'>
                                Nationality
                            </label>
                            <Dropdown title={'Select'} className={'w-full border-none '} styleButton={'!rounded-lg'} />
                        </div>
                        <div className='flex flex-col sm:flex-row gap-2 !mt-12'>
                            <Button className=" !rounded-full font-[12px] w-full px-4 text-white bg-[#1F51FF]" type="submit" >LogIn</Button>
                        </div>
                    </form>
                </div>
            </div>

            <Footer />

        </main >
    )
}

export default Page