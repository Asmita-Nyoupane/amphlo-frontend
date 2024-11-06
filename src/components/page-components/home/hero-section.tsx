import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HeroSection = () => {
    return (

        <div className='flex flex-col lg:flex-row gap-16 justify-between items-center   h-[calc(100vh-6.8rem)] '>

            <section className=' w-full lg:w-[50%] flex flex-col gap-5  '>
                <h2 className={`typingHeading font-bold  text-4xl md:text-7xl md:font-extrabold  flex flex-wrap text-transparent  bg-clip-text  bg-gradient-to-r from-[#003235] to-[#66ff94] tracking-wide`}>
                    <span className='mb-4'>Welcome to
                    </span>

                    <span className='ml-2' >
                        Amphlo
                    </span>
                </h2>
                <p className=' w-11/12 leading-8  text-lg '>Streamline your abroad study processes with AMPHLO, the CRM designed for efficiency and customization.</p>

                <div className={`flex flex-col sm:flex-row gap-4 `}>
                    <Button size="lg" className="rounded-full" asChild>
                        <Link href="/features">
                            Explore Features
                        </Link>
                    </Button>
                    <Button variant="outline" size="lg" className="rounded-full group" asChild>
                        <Link href="/contact-us" className="flex items-center">
                            Contact Us
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </div>
            </section>
            <section className='flex-1  lg:mt-10   w-full '>
                <Image
                    src={'/assets/hero-image.jpeg'}
                    alt='hero-image'
                    height={300}
                    width={300}
                    className='object-cover aspect-video   w-full lg:w-11/12  lg:aspect-square rounded-xl shadow-lg' />
            </section>

        </div>

    )
}

export default HeroSection