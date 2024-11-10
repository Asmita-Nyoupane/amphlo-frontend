import React from 'react'

const agentSteps = [
    {
        step: 1,
        title: "Contact Us",
        description: "Reach out to us through our contact form to express your interest in becoming an agent."
    },
    {
        step: 2,
        title: "Get Connected",
        description: "We’ll connect with you as soon as possible to discuss your goals and answer any questions."
    },
    {
        step: 3,
        title: "Register and Begin",
        description: "After finalizing terms, register in our system and streamline the study abroad process."
    }
];

const Steps = () => {
    return (
        <div className="flex flex-col gap-8 items-center justify-center py-20 " data-aos="fade-up">
            <h2 className="text-4xl font-bold text-mainColor">Steps to Become an Agent</h2>
            <p className="text-muted-foreground text-center ">
                Follow these steps to join our team and help streamline the study abroad process.
            </p>
            <section className="flex flex-wrap gap-10 items-center justify-center">
                {agentSteps.map(({ step, title, description }) => (
                    <div key={title} className="w-[300px] flex flex-col gap-3">
                        <div className="flex gap-4 items-center">
                            <p className="bg-mainColor text-white w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg shadow-md">
                                {step}
                            </p>
                            {step !== 3 && <div className="flex-grow h-px bg-mainColor"></div>}
                        </div>
                        <h2 className="text-xl font-semibold">{title}</h2>
                        <p>{description}</p>
                    </div>
                ))}
            </section>
        </div>
    )
}

export default Steps;
