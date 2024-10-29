import AmpholoFAQ from '@/components/page-components/features/faq'
import KeyFeatures from '@/components/page-components/features/key-features'
import Steps from '@/components/page-components/features/steps'
import FeatureTopSection from '@/components/page-components/features/top-section'
import React from 'react'

const FeaturePage = () => {
    return (
        <div className='flex  flex-col gap-16 md:gap-20 px-4 lg:px-0 mt-10'>
            <div className='flex container mx-auto flex-col gap-16 md:gap-20 px-4 lg:px-0'>

                <FeatureTopSection />
                <KeyFeatures />
            </div>
            <div className='bg-gray-50'>

                <Steps />
            </div>
            <div className='flex container mx-auto flex-col gap-16 md:gap-20 px-4  lg:px-0'>

                <AmpholoFAQ />
            </div>
        </div>
    )
}

export default FeaturePage