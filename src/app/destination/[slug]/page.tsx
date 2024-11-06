"use client"
import USATopSection from '@/components/page-components/destinations/country-top-section';
import WhyChooseAmphlo from '@/components/page-components/destinations/why-choose.-amplo';
import UniversityShowCase from '@/components/page-components/for-partners/university-showcase';
import { studyAbroadDestinations } from '@/components/page-components/home/explore-destination';
import { useParams } from 'next/navigation';
import React from 'react';


const CountryDetail = () => {

    const { slug } = useParams()
    const country = studyAbroadDestinations.find(dest => dest.slug === slug);

    if (!country) {
        return <div className='text-xl flex justify-center items-center h-[50vh] font-semibold text-muted-foreground'>Country not found</div>;
    }

    return (
        <div className="w-11/12  mx-auto py-10 flex flex-col gap-16 md:gap-20">

            <USATopSection country={country} />
            <WhyChooseAmphlo />
            <UniversityShowCase />
        </div >
    );
};

export default CountryDetail;
