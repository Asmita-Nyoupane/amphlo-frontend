import Image from 'next/image'
import React from 'react'
import {
    UserCheck,
    LayoutDashboard,
    Search,
} from "lucide-react";

const features = [
    {
        title: "Comprehensive Student Management",
        description: "Efficiently manage student data and applications, ensuring seamless processing and tracking.",
        icon: UserCheck,
    },
    {
        title: "Customizable CRM Themes",
        description: "Tailor the CRM interface to match your brand identity and operational preferences.",
        icon: LayoutDashboard,
    },
    {
        title: "Advanced Course Searches",
        description: "Access a vast database of courses with intelligent search capabilities for optimal student placements.",
        icon: Search,
    },
];


const WhyChoose = () => {
    return (
        <div className='flex flex-col lg:flex-row gap-14 justify-between lg:px-4' data-aos="fade-up">
            <section className='w-full lg:w-[50%]  '>
                {/* <Image
                    src={'/choose.png'}
                    alt='choose-image'
                    height={700}
                    width={700}
                    className='object-cover  w-full aspect-video lg:aspect-square rounded-xl shadow-lg flex-grow' /> */}
                <div className='relative w-full bg-green-100  min-h-[400px]   h-auto xl:h-full rounded-lg overflow-hidden'>
                    <Image
                        src={'/choose.png'}
                        alt='choose-image'
                        layout="fill"
                        objectFit="cover"
                        className='rounded-lg object-cover h-full w-full'
                    />
                </div>
            </section>
            <section className='flex-1'>
                <div className=' flex flex-col gap-5'>
                    <p className='text-mainColor font-semibold text-lg'>Why Choose AMPHLO</p>
                    <h2 className='text-4xl font-bold'>Transform Your Abroad Study Management</h2>
                    <p className='text-muted-foreground'>Explore the unparalleled advantages of AMPHLO, designed to streamline your abroad study processes with precision and flexibility.</p>
                </div>
                <div className="flex flex-col gap-6 mt-5">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="flex flex-col gap-4 "
                        >
                            {/* Icon and Title */}
                            <div className="flex items-start gap-3">
                                <div className="p-4 rounded-full bg-gray-100 text-mainColor flex items-center justify-center">
                                    <feature.icon size={24} />
                                </div>
                                <div className='flex flex-col gap-3 '>

                                    <h3 className="text-lg font-semibold">{feature.title}</h3>
                                    <p className="text-muted-foreground ">{feature.description}</p>
                                </div>
                            </div>

                            {/* Description */}
                        </div>
                    ))}
                </div>

            </section>
        </div>
    )
}

export default WhyChoose