import React from 'react'
import { ContactForm } from './connect-partner-form'
import { Card } from "@/components/ui/card"
import ContactInfo from './contact-info'


const ContactTopSection = () => {
    return (
        <div className="grid  gap-8 items-center" data-aos="fade-up">

            <ContactForm />

        </div>
    )
}

export default ContactTopSection