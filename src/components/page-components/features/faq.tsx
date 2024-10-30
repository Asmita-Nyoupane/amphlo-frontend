import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


const amphloFaqs = [
    {
        question: "What is AMPHLO CRM?",
        answer: "AMPHLO CRM is a comprehensive platform designed to streamline the study abroad process, helping consultancies manage student applications, communications, and data effectively."
    },

    {
        question: "Can AMPHLO CRM help in enhancing communication with students?",
        answer: "Yes, AMPHLO CRM includes built-in communication tools that enable teams to keep students informed and up-to-date, ensuring smooth communication throughout the application process."
    },

    {
        question: "Does AMPHLO CRM offer customizable themes?",
        answer: "Yes, AMPHLO CRM offers customization options, allowing consultancies to align the platform’s look and feel with their brand identity."
    },
    {
        question: "Can AMPHLO CRM track application deadlines?",
        answer: "Yes, AMPHLO CRM enables you to set and track application deadlines, helping ensure that all applications are submitted on time."
    },
    {
        question: "Is there a support team available for AMPHLO CRM users?",
        answer: "AMPHLO CRM provides dedicated support to assist users with any questions or technical issues they may encounter."
    }
];




const AmpholoFAQ = () => {
    return (
        <div className='flex flex-col gap-6' data-aos="fade-up">
            <h2 className='text-4xl text-mainColor font-bold '>AMPHLO FAQs</h2>

            <section className=''>
                {amphloFaqs.map((faq) =>
                (
                    <Accordion type="multiple" className="w-full" key={faq.question}>
                        <AccordionItem value={faq.answer}>
                            <AccordionTrigger className=' text-lg font-medium text-start'>{faq.question}</AccordionTrigger>
                            <AccordionContent className='text-base text-gray-600'>
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                )
                )}
            </section>
        </div>
    )
}

export default AmpholoFAQ