import AmpholoFAQ from '@/components/page-components/features/faq'
import KeyFeatures from '@/components/page-components/features/key-features'
import Steps from '@/components/page-components/features/steps'
import FeatureTopSection from '@/components/page-components/features/top-section'
import React from 'react'

const FeaturePage = () => {
    return (
        <div className='flex container mx-auto flex-col gap-16 mt-10'>
            <FeatureTopSection />
            <KeyFeatures />
            <Steps />
            <AmpholoFAQ />
        </div>
    )
}

export default FeaturePage