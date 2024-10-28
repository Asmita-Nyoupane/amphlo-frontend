import { Card } from '@/components/ui/card';
import Image from 'next/image';
import React from 'react';

const reasonsToChooseAmphlo = [
    {
        title: "Streamlined Application Process",
        description:
            "Amphlo simplifies and organizes the study abroad application process, allowing institutions and students to manage their applications, track progress, and receive updates all in one place.",
        image: "/assets/features/resume (1).png",
    },
    {
        title: "Automated Follow-ups and Reminders",
        description:
            "Our CRM ensures timely follow-ups and automated reminders for important deadlines, reducing manual effort and ensuring students stay informed every step of the way.",
        image: "/assets/follow-up.png",
    },

    {
        title: "Data-Driven Insights and Analytics",
        description:
            "Make informed decisions with Amphlo’s powerful analytics, which offer insights into application trends, student interests, and campaign performance to optimize engagement strategies.",
        image: "/assets/data-sec.png",
    },
    {
        title: "Customizable Workflows",
        description:
            "Tailor Amphlo’s workflows to fit your institution's unique processes, ensuring flexibility and a smooth transition with minimal disruption to existing procedures.",
        image: "/assets/workflow.png",
    },
    {
        title: "Top-Notch Data Security",
        description:
            "Amphlo adheres to industry-leading data security standards, ensuring that all personal information is safely stored and managed, giving institutions and students peace of mind.",
        image: "/assets/dashboard.png",
    },
    {
        title: "Global Network of Partners",
        description:
            "Join a vast network of universities, students, and educational consultants worldwide. Amphlo facilitates a collaborative ecosystem that enhances the study abroad experience.",
        image: "/assets/world.png",
    },
];

const WhyAmphlo = () => {
    return (
        <div className="flex flex-col gap-10 p-6">
            <section className="text-center flex gap-4 flex-col items-center justify-center">
                <h2 className="text-4xl font-bold ">Why Choose Amphlo?</h2>
                <p className=" text-muted-foreground max-w-2xl">
                    Discover the benefits Amphlo offers to universities and students alike.
                </p>
            </section>
            <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {reasonsToChooseAmphlo.map((reason, index) => (
                    <Card
                        key={index}
                        className=" p-6 flex flex-col  gap-3 items-center text-center hover:scale-105 transition-all duration-300 ease-in-out"
                    >
                        <Image
                            src={reason.image}
                            alt={reason.title}
                            height={50}
                            width={50}
                            className='object-contain'
                        />
                        <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                        <p className="text-muted-foreground">{reason.description}</p>
                    </Card>
                ))}
            </section>
        </div>
    );
};

export default WhyAmphlo;
