"use client"
import React from 'react'
import { testimonials } from './testimonial'
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card'
import Star from './star'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
const PartnerTestimonial = () => {
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
                breakpoint: 600,
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
    return (
        <div className='flex flex-col gap-10 '>
            <div className='flex flex-col gap-2'>

                <h2 className='text-4xl font-bold text-mainColor'>Partner Testimonials</h2>
                <p className='font-medium'> {testimonialLength} Reviews</p>
            </div>
            <div className="slider-container  flex flex-col gap-6">
                <Slider {...settings} className=''>

                    {
                        testimonials.map((testimonial) => (
                            <div key={testimonial.name} className=''>

                                <Card className='bg-gray-50 md:h-[310px]   lg:h-[280px] mx-4'>
                                    <CardHeader className='flex justify-between flex-row  items-center'>
                                        <Star stars={testimonial.rating} />
                                        <p className='text-muted-foreground'>{testimonial.date}</p>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription>
                                            {testimonial.testimonial}
                                        </CardDescription>
                                    </CardContent>
                                    <CardFooter>
                                        <div className="flex items-start space-x-4">
                                            <Avatar className="size-12">
                                                <AvatarImage className='object-cover object-top' src={testimonial.image} alt={testimonial.name} />
                                                <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                            </Avatar>
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
            </div>
        </div>
    )
}

export default PartnerTestimonial