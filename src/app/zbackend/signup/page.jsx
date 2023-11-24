'use client'
import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useForm } from 'react-hook-form';
import Button from '@/components/ui/Button';
import TextFeild from '@/components/forms/TextFeild';
import Header from '@/components/header/header';


const page = () => {
    const onSubmit = (data) => console.log(data);
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            mobile: ''
        }
    });
    const handleSignup = async (e) => {

    };
    return (
        <main>
            <Header />
            <div className=" mx-auto mt-8 max-w-[1500px]  min-h-screen relative flex items-center justify-around py-8 px-4 sm:px-6 lg:px-8">
                <div className='w-[50%] items-center justify-center lg:block hidden'>
                    <Image src={'/backendimages/signup.png'} width={0} height={0} sizes='100vw' className='w-full' alt='authlock' />
                </div>
                <div className="lg:w-[35%] md:w-[50%] w-[90%] mx-auto  space-y-8">
                    <div>
                        <h2 className="mt-4 text-start text-4xl font-bold font-poppin uppercase ">
                            Sign up
                        </h2>

                    </div>
                    <form onSubmit={handleSubmit(handleSignup)} className="mt-8 space-y-6" >
                        <div className=''>
                            <TextFeild
                                name={'firstname'}
                                inputType={"text"}
                                label={'First Name'}
                                register={register}
                                placeholder={'First Name'}
                                maxLength={{ value: 20, message: "Max Length 20" }}
                                minLength={{ value: 4, message: "Min Length 4" }}
                                error={errors?.firstname?.message}
                            />
                        </div>
                        <div className=''>
                            <TextFeild
                                name={'lastname'}
                                inputType={"text"}
                                register={register}
                                label={'Last Name'}
                                placeholder={'Last Name'}
                                maxLength={{ value: 20, message: "Max Length 20" }}
                                minLength={{ value: 4, message: "Min Length 4" }}
                                error={errors?.lastname?.message}
                            />
                        </div>
                        <div>
                            <TextFeild
                                name={'password'}
                                inputType={"password"}
                                label={'password'}
                                register={register}
                                error={errors.email?.message}
                                placeholder={'Email Address'}
                            />
                        </div>
                        <div>
                            <TextFeild
                                name={'cpassword'}
                                inputType={"cpassword"}
                                label={'Confirm Password'}
                                register={register}
                                error={errors.email?.message}
                                placeholder={'Email Address'}
                            />
                        </div>


                        <div >
                            <Button className=" !rounded-full font-[12px] !w-full px-4 text-white bg-[#1F51FF]" type="submit" >SignUp</Button>

                        </div>
                        <div>
                            <p className='text-gray-500'>
                                Or signup using social networks
                            </p>
                            <div className='grid grid-cols-2 gap-2 mt-2'>
                                <button type='button' className='hover:bg-[white] flex items-center justify-center gap-2 px-4 py-2 text-gray-600 bg-gray-300 rounded-md sm:w-auto'>
                                    <Image src={'/backendimages/googlelogo.svg'} width={20} height={20} alt='' />
                                    Sign up with Google
                                </button>
                                <button type='button' className='hover:bg-[white] flex items-center justify-center gap-2 px-4 py-2 text-gray-600 bg-gray-300 rounded-md sm:w-auto'>
                                    <Image src={'/backendimages/googlelogo.svg'} width={20} height={20} alt='' />
                                    Sign up with Google
                                </button>
                            </div>
                        </div>
                        <div>
                            <p className='text-gray-500'>
                                Already a member?{" "}
                                <Link href={'/zbackend/login'} className='text-orange cursor-pointer'>
                                    Login Now
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
                {/* <ToastContainer /> */}
            </div>
        </main>
    )
}


export default page