import USATopSection from '@/components/page-components/study-in-usa/usa-top-section'
import WhyChooseAmphlo from '@/components/page-components/study-in-usa/why-choose.-amplo'
import React from 'react'

const StudyInAustraliaPage = () => {
    return (
        <div className='w-11/12 mx-auto flex flex-col gap-16 px-4  lg:gap-20 mt-10'>
            <USATopSection />
            <WhyChooseAmphlo />
        </div>
    )
}

export default StudyInAustraliaPage