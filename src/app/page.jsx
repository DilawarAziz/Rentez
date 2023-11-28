'use client'
import { useRef, useEffect, useState } from 'react';
import AboutUsCard from '@/components/cards/aboutusCard'
import CardsHeading from '@/components/cards/cardsHeading'
import CategoriesCard from '@/components/cards/categoriesCard'
import ProductCard from '@/components/cards/productCard'
import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'
import Testominalcarosal from '@/components/testominalcarosal'
import Searchinput from '@/components/forms/searchinput'
import Image from 'next/image'
import Heading from '@/components/ui/Heading'

export default function Home() {
  const [hdiv, setHdiv] = useState()
  const myDivRef = useRef(null);
  let divHeight;
  useEffect(() => {
    if (myDivRef.current) {
      const divWidth = myDivRef.current.offsetWidth;
      const divHeight = myDivRef.current.offsetHeight;
      setHdiv(divHeight)
      console.log('Width:', divWidth, 'Height:', divHeight);
    }
  }, []);
  console.log(hdiv)
  return (
    <main className=' '>
      <Header />
      <div className='relative'>
        <div className='relative bg-orange'>
          <div className='max-w-screen-xl mx-auto sm:grid sm:items-end flex flex-col  grid-cols-2 px-4 xl:px-0'>
            <div className='text-white  z-[2] py-10 flex flex-col justify-center   text-center space-y-5 lg:space-y-10 '>
              <div className='w-full flex flex-col items-start'>
                <Heading type={'heading'} className='lg:mb-6 '>
                  Don&apos;t buy it,
                </Heading>
                <Heading type={'heading'} className=' !text-center w-full'>
                  just rent it!
                </Heading>
              </div>
              <Searchinput />
              <div className=' w-[50%] flex gap-4'>
                <Image src={'/images/appstore.png'} width={0} height={0} sizes='100vw' className='w-full' />
                <Image src={'/images/play-04142023-badge 1 (1).png'} width={0} height={0} sizes='100vw' className='w-full' />
              </div>
            </div>
            <div>
              <Image src={'/images/happy.png'} ref={myDivRef} width={0} height={0} sizes='100vw' className='w-full ' />

            </div>
          </div>
        </div>
        <div className='bg-[#000000]  bg-opacity-5 '>
          <div className='max-w-screen-xl mx-auto  py-3 md:py-6  px-4 xl:px-0'>
            <CardsHeading heading={"Categories"} link={"View All"} />
            <div className='grid lg:grid-cols-6 grid-cols-2 sm:grid-cols-3 gap-4 justify-between '>
              {[3, 5, 6, 7, 3, 89].map((items, index) => (
                <CategoriesCard key={index} />
              ))}
            </div>
          </div>
        </div>
        <div className='max-w-screen-xl mx-auto md:py-20 py-6 px-4 xl:px-0'>
          <CardsHeading heading={"Categories"} link={"View All"} />
          <div className='grid lg:grid-cols-4  grid-cols-2 gap-4'>
            {[3, 5, 6, 7,].map((items, index) => (
              <ProductCard key={index} />
            ))}
          </div>
        </div>
        <div className='bg-[#000000] bg-opacity-5 '>
          <div className='max-w-screen-xl mx-auto md:py-20 py-6 px-4 xl:px-0 '>
            <CardsHeading heading={"Featured Listings"} link={"View All"} />
            <div className='grid lg:grid-cols-4 grid-cols-2 gap-4'>
              {[3, 5, 6, 4, 6, 6, 7, 7, 4, 3, 2, 7,].map((items, index) => (
                <ProductCard key={index} />
              ))}
            </div>
          </div>
        </div>
        <div className='max-w-screen-xl mx-auto  md:py-20 py-6 px-4 xl:px-0 '>
          <div className='flex items-center justify-center'>
            <Heading type={"subheading"} className='text-2xl font-bold mb-10'>
              Why Us
            </Heading>
          </div>
          <div className='grid sm:grid-cols-3 grid-cols-1 gap-4'>
            {[3, 5, 7,].map((items, index) => (
              <AboutUsCard key={index} />
            ))}
          </div>
        </div>
        <div className='bg-[#000000] bg-opacity-5 my-12'>
          <div className='max-w-screen-xl mx-auto grid sm:grid-cols-2 grid-cols-1'>
            <div className='text-black px-4 py-4 sm:py-0 z-10 flex flex-col justify-center space-y-2   md:space-y-4 lg:space-y-10 '>
              <div className=' font-bold '>
                <Heading type={'heading'} className='sm:mb-6 '>
                  Get the app.
                </Heading>
                <p className='text-xl'>
                  Sell or buy. Almost anything.
                </p>
              </div>
              <div className='flex gap-10 w-[50%] '>
                <Image src={'/images/appstore.png'} width={0} height={0} sizes='100vw' className='w-full' />
                <Image src={'/images/play-04142023-badge 1 (1).png'} width={0} height={0} sizes='100vw' className='w-full' />
              </div>
            </div>
            <Image src={'/images/application.png'} width={0} height={0} sizes='100vw' className='w-full' />
          </div>
        </div>
        <div className='max-w-screen-xl mx-auto my-20 '>
          <Testominalcarosal />
        </div>
      </div>
      <Footer />
    </main>
  )
}
