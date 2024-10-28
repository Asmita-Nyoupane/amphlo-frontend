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
        question: "How does AMPHLO CRM help in managing student applications?",
        answer: "AMPHLO CRM provides a centralized dashboard where consultancies can track each student's application progress, making it easy to stay organized and ensure nothing is overlooked."
    },
    {
        question: "Can AMPHLO CRM help in enhancing communication with students?",
        answer: "Yes, AMPHLO CRM includes built-in communication tools that enable teams to keep students informed and up-to-date, ensuring smooth communication throughout the application process."
    },
    {
        question: "Is it possible to import existing data into AMPHLO CRM?",
        answer: "Yes, you can easily import your existing data into AMPHLO CRM, allowing you to seamlessly transition to the platform without losing any valuable information."
    },
    {
        question: "How secure is the data stored in AMPHLO CRM?",
        answer: "AMPHLO CRM uses industry-standard security protocols to ensure that all data, including student records and communications, is securely stored and protected."
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
        <div className='flex flex-col gap-6'>
            <h2 className='text-4xl text-mainColor font-bold '>AMPHLO FAQs</h2>
            {amphloFaqs.map((faq) =>
            (
                <Accordion type="multiple" className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className=' text-lg font-semibold'>{faq.question}</AccordionTrigger>
                        <AccordionContent className='text-base'>
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            )
            )}
        </div>
    )
}

export default AmpholoFAQ