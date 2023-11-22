import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'
import Testominalcarosal from '@/components/testominalcarosal'
import Searchinput from '@/components/ui/searchinput'
import Image from 'next/image'

export default function Home() {
  return (
    <main className=' '>
      <Header />
      <div className=' relative'>
        <Image src={'/images/landingherosec.png'} width={0} height={0} sizes='100vw' className='w-full top-0 absolute' />
        <div className='max-w-screen-xl mx-auto grid grid-cols-2'>
          <div className='text-white z-10 flex flex-col justify-center h-[700px] text-center space-y-20 pr-[100px]'>
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

          <div className='max-w-screen-xl mx-auto my-10 p-6'>
            <div className='flex items-center justify-between mb-4'>
              <h1 className='text-3xl font-bold'>
                Categories
              </h1>
              <p className='text-orange font-semibold cursor-pointer'>
                View
              </p>
            </div>
            <div>
            </div>
            <div className='flex justify-between '>
              {[3, 5, 6, 7, 3, 89].map(() => (
                <div className='rounded-xl space-y-4 px-8 flex flex-col items-center justify-center p-4 bg-white'>
                  <Image src={'/icons/pana.svg'} width={40} height={40} sizes='100vw' className='w-fusll' />
                  <h1 className='bg-orange rounded-full px-1 text-white text-sm'>
                    189
                  </h1>
                  <h1 className='font-bold'>
                    Plumbing Items
                  </h1>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='max-w-screen-xl mx-auto my-20 p-6'>
          <div className='flex items-center justify-between mb-4'>
            <h1 className='text-3xl font-bold'>
              Categories
            </h1>
            <p className='text-orange font-semibold cursor-pointer'>
              View
            </p>
          </div>
          <div className='grid grid-cols-4 gap-4'>
            {[3, 5, 6, 7,].map(() => (
              <div className='rounded-xl  shadow-xl flex flex-col  justify-center  bg-white'>
                <Image src={'/images/cycle.png'} width={0} height={0} sizes='100vw' className='w-full' />
                <div className='space-y-2 p-3'>
                  <h1 className='  text-sm text-gray-400'>
                    3 min ago
                  </h1>
                  <h1 className='text-lg font-bold'>
                    Sed ut perspiciatis unde omnis
                  </h1>
                  <h1 className='text-orange text-xl font-bold'>
                    AED 685
                  </h1>
                  <p className='text-gray-400'>
                    3699 Red Bud Lane, Rochelle Park
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='bg-[#000000] bg-opacity-5'>

          <div className='max-w-screen-xl mx-auto my-20 p-6'>
            <div className='flex items-center justify-between mb-4'>
              <h1 className='text-3xl font-bold'>
                Featured Listings
              </h1>
              <p className='text-orange font-semibold cursor-pointer'>
                View
              </p>
            </div>
            <div className='grid grid-cols-4 gap-4'>
              {[3, 5, 6, 4, 6, 6, 7, 7, 4, 3, 2, 7,].map(() => (
                <div className='rounded-xl  shadow-xl flex flex-col  justify-center  bg-white'>
                  <Image src={'/images/cycle.png'} width={0} height={0} sizes='100vw' className='w-full' />
                  <div className='space-y-2 p-3'>
                    <h1 className='  text-sm text-gray-400'>
                      3 min ago
                    </h1>
                    <h1 className='text-lg font-bold'>
                      Sed ut perspiciatis unde omnis
                    </h1>
                    <h1 className='text-orange text-xl font-bold'>
                      AED 685
                    </h1>
                    <p className='text-gray-400'>
                      3699 Red Bud Lane, Rochelle Park
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='max-w-screen-xl mx-auto my-20 '>
          <div className='flex items-center justify-center'>
            <h1 className='text-2xl font-bold mb-10'>
              Why Us
            </h1>
          </div>
          <div className='grid grid-cols-3 gap-4'>
            {[3, 5, 7,].map(() => (
              <div className='rounded-xl items-center text-center flex flex-col  justify-center  bg-white'>
                <Image src={'/icons/sheild.png'} width={100} height={100} sizes='100vw' className='w-ful' />
                <div className='space-y-2 p-3'>
                  <h1 className='text-lg font-bold'>
                    Lorem ipsum
                  </h1>
                  <p className='text-gray-400'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque.
                  </p>
                </div>
              </div>
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
