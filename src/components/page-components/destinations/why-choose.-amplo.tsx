import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import React from 'react';

const studyAbroadBenefits = [
    {
        title: "Access to Top Universities",
        description: "USA is home to some of the world’s most prestigious universities, with courses that cater to every field of interest, from engineering and medicine to liberal arts and business. Amphlo ensures that students have updated information about academic programs, application requirements, and scholarship opportunities so that you can choose the best fit.",
        imageUrl: "/university.png"
    },
    {
        title: "Step-by-Step Support",
        description: "Amphlo’s platform is designed to take the stress out of the study abroad process. Our automated workflows and personalized communication provide a step-by-step guide for every requirement. From university application tracking to visa guidance, Amphlo has you covered with a user-friendly interface and real-time notifications.",
        imageUrl: "/assets/support.png"
    },
    {
        title: "Country-Specific Resources",
        description: "Each country has unique application processes and requirements. With Amphlo, students gain access to localized resources tailored for studying in USA, including detailed visa information, housing recommendations, and local culture tips. This ensures you’re prepared and confident as you transition into your new life abroad.",
        imageUrl: "/assets/technological-advancement.png"
    },
    {
        title: "Simplified Communication & Support",
        description: "With Amphlo, communication with advisors, university representatives, and local experts is easy. Our CRM keeps all your essential documents, application updates, and correspondence in one place, allowing for transparent, instant support whenever you need it.",
        imageUrl: "/assets/follow-up.png"
    },
    {
        title: "Financial Aid & Scholarships Guidance",
        description: "Studying abroad can be costly, but Amphlo simplifies the search for scholarships, grants, and financial aid options available in USA. Our platform automatically filters financial aid opportunities, so students never miss a chance to ease their financial journey.",
        imageUrl: "/assets/workflow.png"
    }
];

const WhyChooseAmphlo = () => {
    return (
        <section className="flex flex-col gap-10" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-center text-mainColor ">Why Choose Amphlo?</h2>
            <section className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center justify-center">
                {studyAbroadBenefits?.map((feature) => (
                    <Card key={feature.title} className="h-[480px]   overflow-hidden trasition-all duration-300 ease-in-out transform hover:scale-105">
                        <CardHeader className="flex items-center gap-3 mb-4">

                            <Image
                                src={feature.imageUrl}
                                alt={feature.title}
                                height={300}
                                width={300}
                                className='object-cover size-20'
                            />
                            <CardTitle className="text-xl font-semibold text-center">{feature.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className="text-muted-foreground text-base  mb-4">
                                {feature.description}
                            </CardDescription>
                        </CardContent>
                    </Card>
                ))}
            </section>
        </section>
    );
};

export default WhyChooseAmphlo;
