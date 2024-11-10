import JoinAmphlo from '@/components/page-components/for-university/join-amphlo'
import JourneyAndImpact from '@/components/page-components/for-university/journey-impact'
import UniversityTopSection from '@/components/page-components/for-university/uni-top-section'
import WhyAmphlo from '@/components/page-components/for-university/why-amphlo'
import AmphloFeatures from '@/components/page-components/home/amphlo-differnciate'
import React from 'react'

const UniversityPage = () => {
    return (
        <div className='flex  flex-col gap-16md:gap-24 '>
            <div className='bg-gray-50 py-12 llg:py-16 '>

                <UniversityTopSection />
            </div>
            <div className='w-11/12  mx-auto'>

                <WhyAmphlo />
            </div>
            <JourneyAndImpact />
            <AmphloFeatures />
            <JoinAmphlo />
        </div>
    )
}

export default UniversityPage