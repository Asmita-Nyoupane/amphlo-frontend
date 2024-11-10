import AmpholoFAQ from '@/components/page-components/features/faq'
import KeyFeatures from '@/components/page-components/features/key-features'
import Mission from '@/components/page-components/features/mission'
import Steps from '@/components/page-components/features/steps'
import FeatureTopSection from '@/components/page-components/features/top-section'
import Vision from '@/components/page-components/features/vision'
import React from 'react'

const FeaturePage = () => {
    return (
        <div className='flex  flex-col gap-16 md:gap-24  mt-10'>
            <div className='flex w-11/12 mx-auto flex-col gap-16 md:gap-24 px-4 '>

                <FeatureTopSection />
                <KeyFeatures />
            </div>
            <div className='bg-gray-50'>

                <Steps />
            </div>
            <div className='flex mt-16 md:mt-20 w-11/12 mx-auto flex-col gap-16 md:gap-24 px-4  '>
                <Vision />
                <Mission />
                <AmpholoFAQ />
            </div>
        </div>
    )
}

export default FeaturePage