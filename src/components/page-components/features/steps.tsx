import React from 'react'

const crmSetupSteps = [
    {
        step: 1,
        title: "Initial Setup",
        description: "Customize your CRM theme and import existing data to get started quickly."
    },
    {
        step: 2,
        title: "Manage Processes",
        description: "Utilize the dashboard to oversee student applications and track progress efficiently."
    },
    {
        step: 3,
        title: "Enhance Communication",
        description: "Use built-in communication tools to keep your team and students informed."
    }
];



const Steps = () => {
    return (
        <div className="flex flex-col gap-8 items-center justify-center py-20 " data-aos="fade-up">
            <h2 className="text-4xl font-bold text-mainColor">How to Leverage AMPHLO</h2>
            <p className="text-muted-foreground text-center ">
                A step-by-step guide to maximizing the potential of AMPHLO for your consultancy.
            </p>
            <section className="flex  flex-wrap gap-10 items-center justify-center">
                {crmSetupSteps.map(({ step, title, description }) => (
                    <div key={title} className='w-[300px] flex flex-col gap-3' >
                        <div className='flex gap-4 items-center'>
                            <p className='bg-mainColor text-white w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg shadow-md'>
                                {step}
                            </p>
                            {step !== 3 && <div className="flex-grow h-px bg-mainColor"></div>}
                        </div>
                        <h2 className='text-xl font-semibold'>{title}</h2>
                        <p>{description}</p>
                    </div>
                ))}
            </section>
        </div>
    )
}

export default Steps