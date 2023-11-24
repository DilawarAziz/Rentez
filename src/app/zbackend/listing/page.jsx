'use client'
import React, { useState, useRef } from 'react'
import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'
import Dropdown from '@/components/forms/dropdown'
import TextFeild from '@/components/forms/TextFeild';
import { useForm } from 'react-hook-form';
import Checkbox from '@/components/forms/checkbox'
import DateRangePicker from '@/components/forms/DateRangePicker'
import ImageInput from '@/components/forms/imageInput'
import Button from '@/components/ui/Button'
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
    const [getImage, setImage] = useState(null)
    const [selectedImage, setSelectedImage] = useState(null);
    const handleImageClick = () => {
        fileInputRef.current.click();
    };
    const fileInputRef = useRef(null);
    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setValue('files', selectedFile)
        if (selectedFile) {
            const imageUrl = URL.createObjectURL(selectedFile);
            setSelectedImage(imageUrl);
        }
    }
    return (
        <main>
            <Header />
            <div className='bg-black bg-opacity-10'>
                <div className='max-w-screen-xl space-y-10  mx-auto py-12 px-4 xl:px-0'>
                    <div className='lg:w-[50%] md:w-[70%]  px-4'>
                        <div className='space-y-4'>
                            <Heading type={'heading'}>
                                Edit Listing
                            </Heading>
                            <Heading type={'subheading'}>
                                Enter Your Add Details
                            </Heading>
                        </div>
                        <div className='space-y-8 mt-4'>
                            <div>

                                <label className='font-semibold '>Select Your Tool Category</label>
                                <Dropdown className={'w-full border-none mt-2'} title={'Cutter'} styleButton={'rounded-lg'} />
                            </div>
                            <div>
                                <TextFeild
                                    name={'Title'}
                                    inputType={"text"}
                                    label={'Add Title'}
                                    register={register}
                                    error={errors.email?.message}
                                    placeholder={'Email Address'}
                                />
                            </div>
                            <div className="">
                                <label htmlFor="message" className="block mb-2 text-sm font-bold text-gray-900 ">
                                    Description
                                </label>
                                <textarea
                                    id="message"
                                    rows={6}
                                    className="block border border-gray-200 p-2.5 resize-none w-full text-sm text-gray-900  rounded-lg shadow-sm focus:ring-orange focus:border-orange  "
                                    placeholder="Description..."
                                ></textarea>
                            </div>
                            <div className='flex gap-8'>
                                <Checkbox title={'New'} className={'w-6 h-6 bg-white'} />
                                <Checkbox title={'Used'} className={'w-6 h-6 bg-white'} />
                            </div>
                            <div>
                                <TextFeild
                                    name={'Price Per Day'}
                                    inputType={"number"}
                                    label={'Add Title'}
                                    register={register}
                                    error={errors.email?.message}
                                    placeholder={'99.9 '}
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block mb-2 text-sm font-bold text-gray-900 ">
                                    Available Date
                                </label>
                                <DateRangePicker className={'grid grid-cols-2'} />
                            </div>
                            <div>
                                <label htmlFor="message" className="block mb-2 text-sm font-bold text-gray-900 ">
                                    Upload Pictures
                                </label>
                                <div className='grid lg:grid-cols-4 grid-cols-2 gap-4'>
                                    {[1, 2, 3, 4, 5, 6, 7, 8].map((items, index) =>
                                        <ImageInput className={'h-[150px]'} selectedImage={selectedImage} handleImageClick={handleImageClick} handleFileChange={handleFileChange} fileInputRef={fileInputRef} />
                                    )}
                                </div>
                            </div>
                            <div className='space-y-10'>
                                <Heading type={'subheading'}>
                                    Enter Your Contact Details
                                </Heading>
                                <div>
                                    <TextFeild
                                        name={'Title'}
                                        inputType={"text"}
                                        label={'Your Name'}
                                        register={register}
                                        error={errors.email?.message}
                                        placeholder={'Email Address'}
                                    />
                                </div>
                                <div>
                                    <TextFeild
                                        name={'Title'}
                                        inputType={"text"}
                                        label={'Your Name'}
                                        register={register}
                                        error={errors.email?.message}
                                        placeholder={'Email Address'}
                                    />
                                </div>
                                <div className='grid grid-cols-2 gap-4'>
                                    <TextFeild
                                        name={'Title'}
                                        inputType={"text"}
                                        label={'Your Name'}
                                        register={register}
                                        error={errors.email?.message}
                                        placeholder={'Email Address'}
                                    />
                                    <TextFeild
                                        name={'Title'}
                                        inputType={"text"}
                                        label={'Your Name'}
                                        register={register}
                                        error={errors.email?.message}
                                        placeholder={'Email Address'}
                                    />
                                </div>
                                <Button className={'!rounded-full !px-12'}>
                                    Add Post Now
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}

export default Page