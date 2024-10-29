import { Check } from "lucide-react";
import Image from "next/image";
import React from "react";
const whyChooseAmphlo = [
    {
        title: "Access to Top Universities",
    },
    {
        title: "End-to-End Guidance",
    },
    {
        title: "Country-Specific Resources",
    },
    {
        title: "Streamlined Communication",
    },
    {
        title: "Financial Aid & Scholarships",
    },
    {
        title: "Personalized Experience",
    },
];

const AboutAmphlo = () => {
    return (
        <div className="flex flex-col-reverse lg:flex-row justify-between gap-12 " data-aos="fade-up" >
            <section className="w-full lg:w-[50%] ">
                <Image
                    src={"/assets/about.jpg"}
                    alt="hero-image"
                    height={500}
                    width={500}
                    quality={100}
                    priority={true}
                    className="object-cover w-full   aspect-video lg:aspect-square rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
                />
            </section>
            <section className="  flex flex-col gap-5 flex-1 w-full">
                <div className="flex flex-col gap-2">
                    <p className=" font-semibold">About Amphlo</p>
                    <h2 className="text-mainColor text-4xl font-bold">
                        Empowering Global Education Management
                    </h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                    AMPHLO by Lopho Abroad Consultancy is your comprehensive CRM solution
                    for managing abroad study processes seamlessly. Since its inception,
                    Lopho has been at the forefront of revolutionizing global education
                    management. The evolution of Amphlo marks a significant milestone in
                    our journey, reflecting years of expertise and innovation in
                    streamlining abroad study processes. From humble beginnings to
                    becoming a leading CRM solution, we&apos;ve continuously adapted to meet
                    the changing needs of educational institutions and students worldwide.
                </p>
                <div className="flex flex-col gap-4">
                    <h2 className=" font-semibold text-mainColor text-lg">STRONG REASONS TO CHOOSE AMPHLO</h2>
                    {
                        whyChooseAmphlo.map((reason, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <p className='bg-mainColor text-white size-8 flex items-center justify-center rounded-full font-bold text-lg shadow-md'>
                                    <Check className="size-4 font-bold" />
                                </p>
                                <p className="text-gray-700">{reason.title}</p>
                            </div>
                        ))
                    }
                </div>
            </section>
        </div>
    );
};

export default AboutAmphlo;
