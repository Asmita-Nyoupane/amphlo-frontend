import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const USATopSection = () => {
    return (
        <div className='flex flex-col md:flex-row  items-center justify-center  gap-10' data-aos="fade-up">
            <section className=' w-full md:w-[50%] flex flex-col gap-5 justify-start '>

                <h2 className='text-3xl font-bold text-mainColor tracking-wide  md:text-4xl   max-w-xl'>
                    Explore Your Future with Amphlo: Your Path to Studying Abroad in USA
                </h2>
                <p className='text-lg text-muted-foreground leading-8 max-w-2xl'>
                    Dreaming of studying in USA? With its world-renowned universities, diverse cultural experiences, and opportunities for global networking, USA offers students an enriching environment to learn and grow. At Amphlo, our CRM platform simplifies the study abroad process, providing a seamless experience to ensure you can focus on what truly matters: your education and personal journey.
                </p>
                <Button className='w-fit' asChild>
                    <Link href='/contact-us'>
                        Contact Us
                    </Link>

                </Button>
            </section>
            <section className='flex-1 mt-10'>
                <Image
                    src={'/assets/partners.jpg'}
                    alt='hero-image'
                    height={500}
                    width={500}
                    className='object-cover aspect-square rounded-xl shadow-lg' />
            </section>
        </div>
    )
}

export default USATopSection