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
        <div className='flex flex-col lg:flex-row gap-14 w-11/12 mx-auto  px-4 py-20' data-aos="fade-up">
            <section className='flex flex-col gap-4 w-full lg:w-[50%]'>

                <h2 className='text-4xl font-bold'>
                    Excellence in Global Education Management
                </h2>
                <p className='leading-7 '>
                    AMPHLO empowers partners with top-tier tools for managing study abroad processes. Our platform is designed to streamline student enrollments, enhance team communication, and optimize commission tracking.
                </p>
            </section>
            <section className="relative w-full lg:w-[50%] h-64 mx-auto text-center grid grid-cols-2 gap-4">
                {/* X and Y axis lines */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-full h-[0.5px] bg-slate-300 absolute top-1/2 transform -translate-y-1/2" /> {/* X-axis */}
                    <div className="h-full w-[0.5px] bg-slate-300 absolute left-1/2 transform -translate-x-1/2" /> {/* Y-axis */}
                </div>

                {/* Statistic items */}
                {statistics.map((stat) => (
                    <div key={stat.title} className="flex flex-col items-center gap-2 p-4">
                        <span className="text-4xl font-bold text-mainColor">{stat.value}</span>
                        <span className="text-xl capitalize font-semibold text-gray-800">{stat.title}</span>
                    </div>
                ))}
            </section>
        </div>
    )
}

export default Excellence