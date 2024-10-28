import React from 'react';

const statisticsData = [
    {
        title: "Years of Experience",
        value: 5,
        description: "Years of expertise in streamlining the study abroad process.",
    },
    {
        title: "Students Enrolled",
        value: "10,000+",
        description: "A growing community of students successfully enrolled through Amphlo.",
    },
    {
        title: "Universities Partnered",
        value: "150+",
        description: "Partnering with universities worldwide to enhance educational opportunities.",
    },
    {
        title: "Global Partners",
        value: "150+",
        description: "Collaborating with global partners to expand educational access.",
    },
];

const JourneyAndImpact = () => {
    return (
        <div className='flex flex-col gap-10 bg-mainColor/95 text-white px-4 py-12 lg:px-20 lg:py-16'>
            <section className='flex flex-col gap-4'>
                <h2 className='text-4xl font-bold'>Our Journey and Impact</h2>
                <p>
                    AMPHLO has been a pivotal tool in transforming the abroad study management landscape. Our CRM facilitates seamless student and application management, ensuring efficient processes and enhanced communication. With advanced course searches and commission management, we empower our partners to customize their experience and achieve exceptional outcomes.
                </p>
            </section>
            <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {statisticsData.map((stat) => (
                    <div
                        key={stat.title}
                        className='flex flex-col  gap-3 items-center justify-center bg-white text-gray-800 rounded-lg p-6 shadow-md transition-transform transform hover:scale-105'
                    >
                        <h3 className='text-3xl font-bold'>{stat.value}</h3>
                        <p className='text-lg text-center font-semibold'>{stat.title}</p>
                        <p className='text-muted-foreground text-center'>{stat.description}</p>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default JourneyAndImpact;
