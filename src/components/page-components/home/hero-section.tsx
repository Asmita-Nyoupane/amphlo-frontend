import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
    return (

        <div className='flex flex-col md:flex-row gap-10 justify-between items-center '>
            <section className=' w-full md:w-[50%] flex flex-col gap-5 '>
                <h2 className='text-7xl font-extrabold text-mainColor tracking-wide'>Welcome to Ampholo</h2>
                <p className=' w-11/12 leading-8  '>Streamline your abroad study processes with AMPHLO, the CRM designed for efficiency and customization.</p>

                <div className='flex gap-5 items-center'>
                    <button className="bg-mainColor hover:bg-hoverColor  text-white font-bold py-3 px-4 rounded-xl">
                        Explore Features
                    </button>
                    <button className='border rounded-xl py-3 px-4  flex items-center gap-3'>
                        Contact Us <span>
                            <ArrowRight />
                        </span>
                    </button>
                </div>
            </section>
            <section>
                <Image
                    src={'/assets/hero-image.jpeg'}
                    alt='hero-image'
                    height={500}
                    width={500}
                    className='object-cover aspect-square rounded-xl shadow-lg' />
            </section>

        </div>

    )
}

export default HeroSection