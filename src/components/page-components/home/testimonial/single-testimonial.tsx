import Image from 'next/image'
import React from 'react'
import { TTestimonial } from './partner-testimonial'
import Star from './star'

const SingleTestimonial = ({ selectedTestimonial }: {
    selectedTestimonial: TTestimonial
}) => {
    return (
        <div className='flex flex-col gap-10'>
            <p className="text-gray-500">{selectedTestimonial.testimonial}</p>
            <div className="flex items-center space-x-8">
                <Image
                    src={selectedTestimonial.image}
                    height={300}
                    width={300}
                    alt={selectedTestimonial.name}
                    className="object-cover size-20 rounded-full"
                />

                <div className='flex justify-between flex-col  gap-4 items-center'>
                    <Star stars={selectedTestimonial.rating} />
                    <p className='text-muted-foreground'>{selectedTestimonial.date}</p>
                </div>

            </div>
        </div>
    )
}

export default SingleTestimonial
