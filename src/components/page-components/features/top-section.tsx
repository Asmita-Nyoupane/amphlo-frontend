import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FeatureTopSection = () => {
    return (
        <div className='flex flex-col md:flex-row  items-center justify-center  gap-10' data-aos="fade-up">
            <section className=' w-full md:w-[50%] flex flex-col gap-7 justify-start '>

                <h2 className='text-3xl font-bold text-mainColor tracking-wide  md:text-6xl   max-w-xl'>
                    Explore AMPHLO&apos;s Key Features
                </h2>
                <p className='text-lg text-muted-foreground  leading-8 max-w-2xl'>
                    Discover how AMPHLO streamlines the abroad study process with advanced management tools and customizable themes.
                </p>
                <Button variant="outline" size="lg" className="rounded-full group sm:w-fit" asChild>
                    <Link href="/contact-us" className="flex items-center">
                        Contact Us
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </Button>
            </section>
            <section className='flex-1'>
                <Image
                    src={'/assets/leaverage.jpeg'}
                    alt='hero-image'
                    height={500}
                    width={500}
                    className='object-cover aspect-square rounded-xl shadow-lg' />
            </section>
        </div>
    );
};

export default FeatureTopSection;
