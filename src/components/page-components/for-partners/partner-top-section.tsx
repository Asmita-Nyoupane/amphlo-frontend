import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PartnerTopsection = () => {
    return (
        <div className='flex flex-col lg:flex-row  items-center justify-center  gap-10'>
            <section className=' w-full lg:w-[50%] flex flex-col gap-5 justify-start '>

                <h2 className='text-4xl font-bold text-mainColor tracking-wide   max-w-xl'>
                    Transforming the Study Abroad Experience
                </h2>
                <p className='text-lg text-muted-foreground leading-8 max-w-2xl'>
                    At Ampholo-CRM, we understand the complexities involved in the study abroad journey. Our mission is to simplify and enhance this experience for students, educational institutions, and partner organizations. By partnering with us, you can play a pivotal role in transforming the study abroad process into a seamless, efficient, and enriching experience.
                </p>
                <Button className='w-fit' asChild>
                    <Link href={'/contact-us'}>
                        Connect With Us
                    </Link>

                </Button>
            </section>
            <section className='flex-1 '>
                <Image
                    src={'/assets/partners.jpg'}
                    alt='hero-image'
                    height={500}
                    width={500}
                    className='object-cover  aspect-square rounded-xl shadow-lg' />
            </section>
        </div>
    )
}

export default PartnerTopsection