import React from "react";
import Image from "next/image";

export const uniData = [
    { name: "University ABC", image: "/assets/uni-1.png" },
    { name: "University XYZ", image: "/assets/uni-2.png" },
    { name: "Global University", image: "/assets/uni-3.png" },
    { name: "TopTech Institute", image: "/assets/uni-4.png" },
    { name: "EduWorld College", image: "/assets/uni-5.png" },
    { name: "University ABC1", image: "/assets/uni-1.png" },
    { name: "University XYZ2", image: "/assets/uni-2.png" },
    { name: "Global Universit1y", image: "/assets/uni-3.png" },
    { name: "TopTech Institute1", image: "/assets/uni-4.png" },
    { name: "EduWorld College1", image: "/assets/uni-5.png" },
];

const UniversityTopSection = () => {
    return (
        <div className="flex flex-col gap-12 w-11/12 mx-auto   mt-10 " data-aos="fade-up">
            {/* Header Section */}
            <div className="flex flex-col items-center md:text-center gap-6 max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold text-mainColor tracking-wide leading-tight">
                    Explore our trusted university partnerships designed to provide
                    students with seamless global opportunities.
                </h2>
                <p className="md:text-lg text-gray-600 leading-relaxed">
                    Amphlo collaborates with top universities worldwide to simplify the
                    admissions process, making it more efficient for both students and
                    universities. Our CRM platform connects institutions with prospective
                    students from around the world, enhancing communication, improving
                    application tracking, and ensuring timely responses.
                </p>
            </div>

            {/* University Logos Section */}
            {/* <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 items-center justify-center">
                {uniData.map((uni, index) => (
                    <div key={index} className="flex items-center justify-center">
                        <Image
                            src={uni.image}
                            alt={`${uni.name} logo`}
                            width={100}
                            height={100}
                            className="w-24 h-24 object-contain hover:scale-105 transition-transform duration-300 ease-in-out"
                        />
                    </div>
                ))}
            </section> */}
            {/* infinite scrolling */}
            <div className="flex flex-wrap justify-center space-x-8 py-10">
                <div className="flex overflow-hidden space-x-16 group   mx-auto">
                    <div className="flex space-x-16 animate-loop-scroll  group-hover:paused">
                        {uniData.map((sponser, index) => (
                            <Image
                                key={index}
                                src={sponser.image}
                                alt={sponser.name}
                                width={100}
                                height={100}
                                loading="lazy"
                                className="max-w-none"
                            />
                        ))}
                    </div>

                    <div
                        className="flex space-x-16 animate-loop-scroll  group-hover:paused"
                        aria-hidden="true"
                    >
                        {uniData.map((sponser, index) => (
                            <Image
                                key={index}
                                src={sponser.image}
                                alt={sponser.name}
                                width={100}
                                height={100}
                                loading="lazy"
                                className="max-w-none"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UniversityTopSection;
