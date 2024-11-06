import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
type TProps = {
    image: string;
    title: string;
    slug: string

}

const USATopSection = ({ country }: {
    country?: TProps
}) => {
    return (
        <div className='flex flex-col lg:flex-row  items-center justify-center  gap-10  mt-10' data-aos="fade-up">
            <section className=' w-full   lg:w-[50%] flex flex-col gap-5 justify-start '>

                <h2 className='text-3xl font-bold text-mainColor tracking-wide  md:text-4xl   max-w-xl'>
                    {`Explore Your Future with Amphlo: Your Path to Studying Abroad in ${country?.title}`}
                </h2>
                <p className=' text-muted-foreground leading-8 lg:max-w-2xl'>
                    {`Dreaming of studying in ${country?.title}? With its world-renowned universities, diverse cultural experiences, and opportunities for global networking,  ${country?.title} offers students an enriching environment to learn and grow. At Amphlo, our CRM platform simplifies the study abroad process, providing a seamless experience to ensure you can focus on what truly matters: your education and personal journey.`}
                </p>
                <Button variant="outline" size="lg" className="rounded-full group w-fit" asChild>
                    <Link href="/contact-us" className="flex items-center">
                        Contact Us
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </Button>
            </section>
            <section className='flex-1'>
                <Image
                    src={country?.image || '/assets/partners.jpg'}
                    alt={`${country?.title}-image`}
                    height={500}
                    width={500}
                    className='object-cover  aspect-video lg:aspect-square rounded-xl shadow-lg' />
            </section>
        </div>
    )
}

export default USATopSection