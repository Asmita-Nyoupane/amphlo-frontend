import USATopSection from '@/components/page-components/study-in-usa/usa-top-section'
import WhyChooseAmplo from '@/components/page-components/study-in-usa/why-choose.-amplo'
import React from 'react'

const StudyInUSAPage = () => {
    return (
        <div className='container mx-auto flex flex-col gap-16 mt-10'>
            <USATopSection />
            <WhyChooseAmplo />
        </div>
    )
}

export default StudyInUSAPage