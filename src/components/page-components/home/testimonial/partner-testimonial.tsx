"use client"
import React, { useState } from 'react'
import { testimonials } from './testimonial'
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card'
import Star from './star'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import Image from 'next/image'
import { ResponsiveDialog } from '@/components/custom/responsive-dailog';
import SingleTestimonial from './single-testimonial'
export type TTestimonial = {
    name: string,
    position: string,
    testimonial: string,
    rating: number,

    image: string,
    date: string
}
const PartnerTestimonial = () => {
    const [selectedTestimonial, setSelectedTestimonial] = useState<TTestimonial | null>(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const testimonialLength = testimonials.length
    const settings = {
        dots: false,
        infinite: true,
        arrows: true,
        speed: 500,
        centerPadding: "30px",
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                },
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    arrows: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
        ],
    };
    // Handle click to open dialog with selected testimonial
    const handleCardClick = (testimonial: TTestimonial) => {
        setSelectedTestimonial(testimonial);
        setIsDialogOpen(true);
    };
    return (
        <div className='flex flex-col gap-10 ' >
            <div className='flex flex-col gap-2' >

                <h2 className='text-4xl font-bold text-mainColor'>Partner Testimonials</h2>
                <p className='font-medium text-muted-foreground'> {testimonialLength} Reviews </p>
            </div>
            <div className="slider-w-11/12  flex flex-col gap-6">
                <Slider {...settings} className=''>

                    {
                        testimonials.map((testimonial) => (
                            <div key={testimonial.name} className=''>

                                <Card className=' mx-4 cursor-pointer' onClick={() => handleCardClick(testimonial)} >
                                    <CardHeader className='flex justify-between flex-row  items-center'>
                                        <Star stars={testimonial.rating} />
                                        <p className='text-muted-foreground'>{testimonial.date}</p>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className='line-clamp-3'>
                                            {testimonial.testimonial}
                                        </CardDescription>
                                    </CardContent>
                                    <CardFooter className='bg-gray-50  '>
                                        <div className="flex items-start space-x-4 pt-4">
                                            <div className='rounded-full'>
                                                <Image
                                                    src={testimonial.image}
                                                    height={100}
                                                    width={100}

                                                    alt={testimonial.name}
                                                    className="object-cover size-10 object-top rounded-full "
                                                />

                                            </div>
                                            <div className="space-y-1">
                                                <h3 className="font-semibold">{testimonial.name}</h3>
                                                <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                                            </div>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </div>
                        ))
                    }

                </Slider>
                {/* Modal to show full testimonial */}
                <ResponsiveDialog
                    isOpen={isDialogOpen}
                    setIsOpen={setIsDialogOpen}
                    title={selectedTestimonial?.name || 'Testimonial'}
                    description={selectedTestimonial?.position}
                >
                    {selectedTestimonial && (
                        <SingleTestimonial selectedTestimonial={selectedTestimonial} />
                    )}
                </ResponsiveDialog>
            </div>
        </div>
    )
}

export default PartnerTestimonial