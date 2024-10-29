import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
    return (

        <div className='flex flex-col lg:flex-row gap-10 justify-between items-center   h-[calc(100vh-6.5rem)] '>

            <section className=' w-full lg:w-[50%] flex flex-col gap-5  '>
                <div className={`typingHeading font-bold text-7xl md:font-extrabold  flex flex-col gap-4  text-mainColor tracking-wide`}>
                    <h2 className='mb-4'>Welcome to
                    </h2>

                    <h2 className='text-cyan-800 '>
                        Amphlo
                    </h2>
                </div>
                <p className=' w-11/12 leading-8  text-lg '>Streamline your abroad study processes with AMPHLO, the CRM designed for efficiency and customization.</p>

                <div className='flex gap-5 items-center'>
                    <Button size={'lg'} className='rounded-full'>
                        Explore Features
                    </Button>
                    <Button variant={'outline'} size={'lg'} className='rounded-full'>
                        Contact Us <span>
                            <ArrowRight />
                        </span>
                    </Button>
                </div>
            </section>
            <section className='flex-1  mt-0 lg:mt-10   w-full '>
                <Image
                    src={'/assets/hero-image.jpeg'}
                    alt='hero-image'
                    height={300}
                    width={300}
                    className='object-cover aspect-video  w-full lg:aspect-square rounded-xl shadow-lg' />
            </section>

        </div>

    )
}

export default HeroSection