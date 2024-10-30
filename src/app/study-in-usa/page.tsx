import UniversityShowCase from '@/components/page-components/for-partners/university-showcase'
import USATopSection from '@/components/page-components/study-in-usa/usa-top-section'
import WhyChooseAmplo from '@/components/page-components/study-in-usa/why-choose.-amplo'
import React from 'react'

const StudyInUSAPage = () => {
    return (
        <div className='w-11/12 mx-auto flex flex-col gap-16  px-4 md:gap-20 mt-10'>
            <USATopSection />
            <WhyChooseAmplo />
            <UniversityShowCase />
        </div>
    )
}

export default StudyInUSAPage