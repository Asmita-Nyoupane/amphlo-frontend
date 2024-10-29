import JoinAmphlo from '@/components/page-components/for-university/join-amphlo'
import JourneyAndImpact from '@/components/page-components/for-university/journey-impact'
import UniversityTopSection from '@/components/page-components/for-university/uni-top-section'
import WhyAmphlo from '@/components/page-components/for-university/why-amphlo'
import React from 'react'

const UniversityPage = () => {
    return (
        <div className='flex  flex-col gap-16 md:gap-20 '>
            <div className='bg-gray-50 px-4 py-12 lg:px-20 lg:py-16 '>

                <UniversityTopSection />
            </div>
            <div className='container  mx-auto'>

                <WhyAmphlo />
            </div>
            <JourneyAndImpact />
            <JoinAmphlo />
        </div>
    )
}

export default UniversityPage