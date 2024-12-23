import Image from 'next/image'
import React from 'react'
import { uniData } from '../for-university/uni-top-section'


const UniversityShowCase = () => {
    return (
        <div className='flex flex-col gap-10  w-11/12 mx-auto items-center justify-center' data-aos="fade-up">
            <div className='space-y-3'>

                <h2 className='text-4xl text-center font-bold text-mainColor'>Global University Network</h2>
                <p className='text-center text-muted-foreground'>Connecting Students with Top Educational Institutions</p>
            </div>
            {/* University Logos Section */}
            <section className="flex flex-wrap gap-8 items-center justify-center  w-full">
                {uniData.map((uni, index) => (
                    <div key={index} className="flex items-center justify-center ">
                        <Image
                            src={uni.image}
                            alt={`${uni.name} logo`}
                            width={300}
                            height={300}
                            className="w-24 h-24 object-contain hover:scale-105 transition-transform duration-300 ease-in-out"
                        />
                    </div>
                ))}
            </section>
        </div>
    )
}

export default UniversityShowCase