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
  return (
    <main className=' '>
      <Header />
      <div className=' relative'>
        <Image src={'/images/landingherosec.png'} width={0} height={0} sizes='100vw' className='w-full top-0 absolute' />
        <div className='max-w-screen-xl mx-auto grid grid-cols-2'>
          <div className='text-white z-10 flex flex-col justify-center h-[770px] text-center space-y-20 pr-[100px]'>
            <h1 className='text-6xl font-bold'>
              <p className='mb-6'>
                Don't buy it,
              </p>
              <p>
                just rent it!
              </p>
            </h1>
            <Searchinput />
            <div className='flex gap-10 '>
              <Image src={'/images/appstore.png'} width={0} height={0} sizes='100vw' className='w-full' />
              <Image src={'/images/play-04142023-badge 1 (1).png'} width={0} height={0} sizes='100vw' className='w-full' />
            </div>
          </div>
        </div>
        <div className='bg-[#000000] bg-opacity-5'>

          <div className='max-w-screen-xl mx-auto my-10 p-4 xl:p-0'>
            <CardsHeading heading={"Categories"} link={"View"} />
            <div>
            </div>
            <div className='grid lg:grid-cols-6 grid-cols-2 sm:grid-cols-3 gap-4 justify-between '>
              {[3, 5, 6, 7, 3, 89].map(() => (
                <CategoriesCard />
              ))}
            </div>
          </div>
        </div>
        <div className='max-w-screen-xl mx-auto my-20 p-4 xl:p-0'>
          <CardsHeading heading={"Categories"} link={"View"} />
          <div className='grid lg:grid-cols-4  grid-cols-2 gap-4'>
            {[3, 5, 6, 7,].map(() => (
              <ProductCard />
            ))}
          </div>
        </div>
        <div className='bg-[#000000] bg-opacity-5'>
          <div className='max-w-screen-xl mx-auto my-20 p-4 xl:p-0'>
            <CardsHeading heading={"Featured Listings"} link={"View"} />
            <div className='grid lg:grid-cols-4 grid-cols-2 gap-4'>
              {[3, 5, 6, 4, 6, 6, 7, 7, 4, 3, 2, 7,].map(() => (
                <ProductCard />
              ))}
            </div>
          </div>
        </div>
        <div className='max-w-screen-xl mx-auto my-20 '>
          <div className='flex items-center justify-center'>
            <Heading type={"subheading"} className='text-2xl font-bold mb-10'>
              Why Us
            </Heading>
          </div>
          <div className='grid sm:grid-cols-3 grid-cols-1 gap-4'>
            {[3, 5, 7,].map(() => (
              <AboutUsCard />
            ))}
          </div>
        </div>
        <div className='bg-[#000000] bg-opacity-5 my-12'>
          <div className='max-w-screen-xl mx-auto grid grid-cols-2'>
            <div className='text-black z-10 flex flex-col justify-center s text-center space-y-20 pr-[100px]'>
              <h1 className='text-4xl font-bold'>
                <p className='mb-6'>
                  Get the app.
                </p>
                <p>
                  Sell or buy. Almost anything.
                </p>
              </h1>
              <div className='flex gap-10 '>
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
