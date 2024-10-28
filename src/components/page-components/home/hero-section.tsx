import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
    return (

        <div className='flex flex-col lg:flex-row gap-10 justify-between items-center  mt-10  h-[calc(100vh-6.5rem)] '>
            <section className=' w-full lg:w-[50%] flex flex-col gap-5  '>
                <h2 className=' text-4xl  font-bold lg:text-7xl md:font-extrabold text-mainColor tracking-wide'>Welcome to Amphlo</h2>
                <p className=' w-11/12 leading-8  '>Streamline your abroad study processes with AMPHLO, the CRM designed for efficiency and customization.</p>

                <div className='flex gap-5 items-center'>
                    <Button size={'lg'}>
                        Explore Features
                    </Button>
                    <Button variant={'outline'} size={'lg'}>
                        Contact Us <span>
                            <ArrowRight />
                        </span>
                    </Button>
                </div>
            </section>
            <section className='flex-1   w-full '>
                <Image
                    src={'/assets/hero-image.jpeg'}
                    alt='hero-image'
                    height={500}
                    width={500}
                    className='object-cover   h-[300px] lg:h-full  w-full lg:aspect-square rounded-xl shadow-lg' />
            </section>

        </div>

    )
}

export default HeroSection