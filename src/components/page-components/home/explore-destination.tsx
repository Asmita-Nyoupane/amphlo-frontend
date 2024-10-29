import { Card } from "@/components/ui/card";
import Image from "next/image";
import React from "react";


export const studyAbroadDestinations = [
    {
        image: "/assets/country/usa.jpeg",
        title: "United States",
    },
    {
        image: "/assets/country/uk.jpeg",
        title: "United Kingdom",
    },
    {
        image: "/assets/country/australia.jpeg",
        title: "Australia",
    },
    {
        image: "/assets/country/canda.jpeg",
        title: "Canada",
    },
    {
        image: "/assets/country/germany.jpeg",
        title: "Germany",
    },
    {
        image: "/assets/country/france.jpeg",
        title: "France",
    },
    {
        image: "/assets/country/japan.jpeg",
        title: "Japan",
    },
    {
        image: "/assets/country/netherland.jpeg",
        title: "Netherlands",
    },
];

const ExploreDestination = () => {
    return (
        <div className="flex flex-col gap-10 p-6" data-aos="fade-up">
            <div className="flex flex-col gap-4 items-center justify-center">
                <h2 className="text-4xl font-bold text-mainColor">
                    Explore Our Worldwide Presence
                </h2>
                <p className="text-center">
                    Discover the countries where Amphlo facilitates
                    study abroad opportunities, enhancing your global educational journey.
                </p>
            </div>
            <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {studyAbroadDestinations.map((destination, index) => (
                    <Card key={index} className="shadow-lg transition-transform transform hover:scale-105 relative  group">
                        <Image height={300}
                            width={300} src={destination.image} alt={destination.title} className="w-full h-48 object-cover rounded-t-lg" />

                        <div className="absolute bg-blue-100/70 w-full py-2 text-mainColor text-xl text-center bottom-0 opacity-0 group-hover:opacity-100">{destination.title}</div>

                    </Card>
                ))}
            </div>
        </div>
    );
};

export default ExploreDestination;