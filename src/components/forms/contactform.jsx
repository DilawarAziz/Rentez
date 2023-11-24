'use client'
import React from 'react';
import Button from '../ui/Button';
import { useForm } from 'react-hook-form';
import TextFeild from './TextFeild';
const ContactUsSection = () => {
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
        <section className="bg-white  mx-auto ">
            <div className="py-4  px-4 mx-auto ">
                <div className='text-center'>
                    <h2 className="mb-4 md:text-xl text-lg lg:text-4xl tracking-tight font-extrabold text-center text-gray-900 ">Get In Touch</h2>
                    <p className='text-gray-500 text-sm md:text-title-xsm'>
                        Please fill in the following details and wait for our response.
                    </p>
                </div>

                <form onSubmit={handleSubmit(handleSignup)} className="mt-8 space-y-6" >
                    <div className="grid  sm:grid-cols-2 grid-cols-1 sm:flex-row gap-4 items-center w-full">
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
                    </div>
                    <div className="grid  sm:grid-cols-2 grid-cols-1 gap-4 items-center w-full">
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
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-sm font-bold text-gray-900 ">
                            Your message
                        </label>
                        <textarea
                            id="message"
                            rows={6}
                            className="block border border-gray-200 p-2.5 resize-none w-full text-sm text-gray-900  rounded-lg shadow-sm focus:ring-orange focus:border-orange  "
                            placeholder="Leave a comment..."
                        ></textarea>
                    </div>
                    <div className='w-full flex items-center justify-center'>
                        <Button className={"!rounded-full !px-14 "}>Submit</Button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactUsSection;
