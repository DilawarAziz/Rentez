"use client"; // This is a client component 👈🏽
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import Header from '@/components/header/header';
import Button from '@/components/ui/Button';
import TextFeild from '@/components/forms/TextFeild';
const Page = () => {
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
            <div className=" mx-auto mt-8 max-w-[1500px]  min-h-screen relative flex items-center justify-around py-8 px-4 sm:px-6 lg:px-8">

                <div className="lg:w-[35%] md:w-[50%] w-[90%] mx-auto  space-y-8">
                    <div>
                        <h2 className="mt-4 text-start text-4xl font-bold font-poppin uppercase ">
                            Login
                        </h2>
                        {/* <p className='text-gray-500'>
                            Sed ut perspiciatis unde omnis iste natus
                        </p> */}
                    </div>
                    <form onSubmit={handleSubmit(handleLogin)} className="mt-8 space-y-6"  >
                        <div>
                            <TextFeild
                                name={'email'}
                                inputType={"email"}
                                label={'Email or Username*'}
                                register={register}
                                error={errors.email?.message}
                                placeholder={'Email Address'}
                            />
                        </div>
                        <div>
                            <TextFeild
                                name={'password'}
                                paswordlable={'Password'}
                                label={'Password*'}
                                register={register}
                                inputType={"password"}
                                maxLength={{ value: 8, message: "Max Length 8" }}
                                minLength={{ value: 4, message: "Min Length 4" }}
                                placeholder={'**************'}
                                error={errors?.password?.message}
                            />
                            <Link href={'#'} className="cursor-pointer block text-sm  text-end text-gray-500 hover:text-blue-500">
                                Forgot Password?
                            </Link>
                        </div>
                        <div className='flex flex-col sm:flex-row gap-2'>
                            <Button className=" !rounded-full font-[12px] w-full px-4 text-white bg-[#1F51FF]" type="submit" >LogIn</Button>
                        </div>
                        <div>
                            <p className='text-gray-500'>

                                Don't have an account ?{" "}
                                <Link href={'/zbackend/signup'} className='text-orange cursor-pointer'>
                                    Register Now
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
                <div className='w-[50%] items-center justify-center lg:block hidden'>
                    <Image src={'/backendimages/login.png'} width={0} height={0} sizes='100vw' className='w-full' alt='authlock' />
                </div>
                {/* <ToastContainer /> */}
            </div>
        </main>
    );
};

export default Page;


