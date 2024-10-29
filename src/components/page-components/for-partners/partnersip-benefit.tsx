import React from 'react';
import { Card } from '@/components/ui/card';
import Image from 'next/image';


const partnershipBenefits = [
    {
        title: "Access to Advanced Technology",
        description: "Leverage our state-of-the-art CRM tools to streamline your operations and enhance student engagement. Our platform is designed to simplify the study abroad process, making it easier for partners to support students.",
        image: "/assets/technological-advancement.png",
    },
    {
        title: "Networking Opportunities",
        description: "Join a global network of educational institutions, agencies, and service providers in the study abroad industry. Build valuable relationships that can lead to collaborative programs and initiatives.",
        image: "/assets/world.png",
    },
    {
        title: "Increased Visibility",
        description: "Promote your programs and services to a broader audience, attracting more students to your offerings. Our platform provides various marketing tools to enhance your visibility in the study abroad market.",
        image: "/assets/high-visibility.png",
    },
    {
        title: "Data-Driven Insights",
        description: "Utilize our analytics and reporting features to gain valuable insights into your operations. Make informed decisions to improve your services and better support your students’ needs.",
        image: "/assets/dashboard.png",
    },
    {
        title: "Comprehensive Support",
        description: "Receive extensive support from our dedicated team, including training, technical assistance, and marketing resources. We are here to help you maximize your impact and achieve your goals.",
        image: "/assets/support.png",
    },
    {
        title: "Enhanced Student Experience",
        description: "By partnering with us, you can offer students a more personalized and efficient study abroad experience. Our platform allows for improved communication and guidance throughout their journey.",
        image: "/assets/group.png",
    },
];

const PartnershipBenefits = () => {
    return (
        <div className="container mx-auto flex flex-col gap-10 py-16"  >
            <h2 className="text-center text-4xl font-bold text-mainColor ">
                Benefits of Partnership
            </h2>
            <div className="container mx-auto px-4" >
                {partnershipBenefits.map((benefit, index) => (
                    <Card key={index} className="mb-8 p-6 bg-white shadow-md rounded-lg transition-transform transform hover:scale-105" data-aos="fade-up">
                        <div className="flex items-center space-x-4">
                            <Image
                                height={300}
                                width={300}
                                src={benefit.image}
                                alt={benefit.title}
                                className="w-16 h-16 object-cover rounded-md"
                            />
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold text-mainColor mb-2">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-700">{benefit.description}</p>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default PartnershipBenefits;
