import features, { featuresData } from '@/components/page-components/home/features/feature-data';
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../ui/card';
import Image from 'next/image';

const KeyFeatures = () => {
    return (
        <div className='flex flex-col gap-10'>
            <div className='flex flex-col gap-3 items-start justify-start'>

                <h2 className='text-mainColor text-xl font-semibold '>AMPHLO's Core Features</h2>
                <h2 className='text-4xl font-bold '>
                    Optimize Your Study Management
                </h2>
                <p className=' text-muted-foreground max-w-2xl '>
                    AMPHLO offers comprehensive solutions for student and application management, process tracking, and team collaboration.
                </p>
            </div>

            <section className="flex gap-8 flex-wrap items-center justify-center">
                {featuresData?.map((feature) => (
                    <Card
                        key={feature.title}
                        className="w-[340px] transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                    >
                        <CardHeader className="flex items-center gap-4 mb-4">
                            <Image
                                src={feature.icon}
                                alt={feature.title}
                                height={50}
                                width={50}
                                className='object-contain'
                            />
                            <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground text-center">
                                {feature.description}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </section>
        </div>
    );
}

export default KeyFeatures;
