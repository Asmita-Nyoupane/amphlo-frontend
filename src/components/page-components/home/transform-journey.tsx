import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const TrasformJourney = () => {
    return (
        <Card className=' bg-gradient-to-r from-[#003235] to-[#66ff94] text-white flex  flex-col lg:flex-row  justify-between  rounded-l-xl shadow-md ' data-aos="fade-up">
            <section className='flex flex-col gap-10 px-10  py-20 w-full lg:w-[50%]  '>
                <h2 className='text-4xl font-bold'>Transform Your Consultancy with AMPHLO</h2>
                <p className='w-10/12'>
                    Experience the power of AMPHLO in managing abroad study processes. Schedule a demo today.
                </p>

                <div className={`flex flex-col sm:flex-row gap-4 `}>
                    <Button size="lg" className="rounded-full  text-mainColor  border-mainColor  font-semibold" asChild variant={'secondary'}>
                        <Link href="/features">
                            Learn More
                        </Link>
                    </Button>
                    <Button variant="ghost" size="lg" className="rounded-full   font-semibold group" asChild>
                        <Link href="/contact-us" className="flex items-center">
                            Join Now
                            <ArrowRight />
                        </Link>
                    </Button>
                </div>
            </section>
            <div className='flex-1 '>

                <Image src={'/assets/join.jpeg'} alt='join image' height={500}
                    width={500} className='object-cover  aspect-video   w-full h-full rounded-r-lg' />
            </div>

        </Card>
    )
}

export default TrasformJourney
