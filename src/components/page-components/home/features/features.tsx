import React from 'react';
import features, { featuresData } from './feature-data';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
import Image from 'next/image';

const Features = () => {
    return (
        <div className="flex flex-col gap-8 items-center justify-center p-8">
            <h2 className="text-4xl font-bold text-mainColor">Key Features of AMPHLO</h2>
            <p className="text-muted-foreground text-center max-w-lg">
                Discover how AMPHLO can enhance your abroad study management with advanced tools and customizable themes.
            </p>

            <section className="flex gap-8 flex-wrap items-center justify-center">
                {featuresData?.map((feature) => (
                    <Card key={feature.title} className="w-[340px] trasition-all duration-300 ease-in-out transform hover:scale-105">
                        <CardHeader className="flex items-center gap-3 mb-4">

                            <Image
                                src={feature.icon}
                                alt={feature.title}
                                height={300}
                                width={300}
                                className='object-cover size-20'
                            />
                            <CardTitle className="text-xl font-semibold text-center">{feature.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className="text-muted-foreground text-base text-center">
                                {feature.description}
                            </CardDescription>
                        </CardContent>
                    </Card>
                ))}
            </section>
        </div>
    );
};

export default Features;
