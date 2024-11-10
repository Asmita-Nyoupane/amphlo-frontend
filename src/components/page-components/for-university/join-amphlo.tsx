
import Image from 'next/image';
import React from 'react';
import { ContactForm } from '../contact-us/connect-partner-form';

const JoinAmphlo = () => {
    return (
        <div className='w-11/12 px-4  mx-auto' data-aos="fade-up">
            <div className='flex flex-col gap-4 mb-10'>
                <h2 className='text-4xl font-bold text-mainColor'>Join the Amphlo Network</h2>
                <p className='text-muted-foreground leading-7'>
                    Our platform fosters a growing network of universities, counselors, and students, all working towards a shared goal of simplifying and enhancing the global study experience. Connect with us to discover how Amphlo can help your institution stand out in the competitive landscape of international education.
                </p>
            </div>
            <div className=' flex flex-col lg:flex-row  gap-10 justify-between  '>

                <section className=' w-full lg:w-[50%] border rounded shadow p-6'>
                    <ContactForm />
                </section>
                {/* Text Section */}
                <section className='flex-1 w-full '>



                    <div className='relative w-full  min-h-[500px]   h-auto xl:h-full rounded-lg overflow-hidden'>
                        <Image
                            src={'/assets/leaverage.jpeg'}
                            alt='cover image'
                            layout="fill"
                            objectFit="cover"
                            className='rounded-lg object-cover h-full w-full'
                        />
                    </div>
                </section>
            </div>



        </div>
    );
};

export default JoinAmphlo;
