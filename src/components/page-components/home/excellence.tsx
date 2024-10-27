import React from 'react'

const statistics = [
    {
        title: "Top-ranked countries",
        value: "5",
        description: "Countries recognized for excellence in study abroad programs."
    },
    {
        title: "Leading sub-agents",
        value: "20+",
        description: "Trusted sub-agents supporting students globally."
    },
    {
        title: "Students enrolled",
        value: "10K+",
        description: "Students currently enrolled in our partner institutions."
    },
    {
        title: "Average partner rating",
        value: "4.8/5",
        description: "Our average rating based on partner feedback."
    }
];


const Excellence = () => {
    return (
        <div className='flex flex-col md:flex-row gap-14 container mx-auto  py-20'>
            <section className='flex flex-col gap-4 w-full md:w-[50%]'>

                <h2 className='text-4xl font-bold'>
                    Excellence in Global Education Management
                </h2>
                <p className='leading-7'>
                    AMPHLO empowers partners with top-tier tools for managing study abroad processes. Our platform is designed to streamline student enrollments, enhance team communication, and optimize commission tracking.
                </p>
            </section>
            <section className="grid grid-cols-2 gap-4 w-full md:w-[50%] text-center ">
                {statistics.map((stat) => (
                    <div key={stat.title} className="flex flex-col gap-3 ">
                        <span className="text-4xl font-bold text-mainColor">{stat.value}</span>
                        <span className="text-xl capitalize font-semibold text-gray-800">{stat.title}</span>

                    </div>
                ))}

            </section>
        </div>
    )
}

export default Excellence