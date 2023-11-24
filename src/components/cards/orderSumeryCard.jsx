import React from 'react'
import Image from 'next/image'
import TextFeild from '../forms/TextFeild'
import Button from '../ui/Button'
function OrderSumeryCard({ register, errors }) {
    return (
        <div className="col-span-1 rounded-lg p-6 bg-white">
            <h1 className='text-xl font-semibold'>
                Order Summary
            </h1>
            <div>
                <Image src={'/backendimages/Rectangle 336 (1).png'} width={0} height={0} sizes='100vw' className='w-full' />
            </div>
            <div className='flex items-center justify-between'>
                <h1 className='text-xl font-semibold'>
                    Sony wireless headphones
                </h1>
                <p className='font-bold '>{'- 1 +'}</p>
            </div>
            <h1 className='text-xl font-bold mt-3'>
                £320.45
            </h1>
            <div className='grid grid-cols-8 mt-4'>
                <TextFeild
                    name={'email'}
                    inputType={"text"}
                    label={'Gift Card / Discount code'}
                    register={register}
                    error={errors?.email?.message}
                    placeholder={'Email Address'}
                    className={'col-span-6'}
                />
                <Button className={'bg-white border-2 h-[100%] col-span-2 border-orange !text-orange'}>
                    Apply
                </Button>
            </div>
            <div className='flex flex-col space-y-8 w-full mt-12 p-4  rounded-xl'>
                <div className='flex justify-between items-center'>
                    <h1 className='font-bold'>
                        Sub total
                    </h1>
                    <p>
                        £316.55
                    </p>
                </div>
                <div className='flex justify-between items-center'>
                    <h1 className='font-bold'>
                        Tax
                    </h1>
                    <p>
                        £3.45
                    </p>
                </div>
                <div className='flex justify-between items-center'>
                    <h1 className='font-bold'>
                        Shipping
                    </h1>
                    <p>
                        Free
                    </p>
                </div>
                <div className='flex justify-between items-center'>
                    <h1 className='font-bold'>
                        Total
                    </h1>
                    <p>
                        £320.45
                    </p>
                </div>
            </div>
        </div>
    )
}

export default OrderSumeryCard