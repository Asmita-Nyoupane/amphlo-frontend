import React from 'react'
import { ContactForm } from '../for-university/connect-partner-form'
import { Card } from "@/components/ui/card"
import ContactInfo from './contact-info'


const ContactTopSection = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="fade-up">
            <Card className='p-6' >

                <ContactForm />

            </Card>

            <ContactInfo />
        </div>
    )
}

export default ContactTopSection