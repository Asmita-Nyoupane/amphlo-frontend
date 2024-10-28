"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin } from "lucide-react"
import ContactTopSection from '@/components/page-components/contact-us/contact-top-section'

export default function ContactPage() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Here you would typically send the form data to your backend
        console.log('Form submitted:', { name, email, message })
        // Reset form fields
        setName('')
        setEmail('')
        setMessage('')
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center mb-4">Contact Amphlo CRM</h1>
            <p className="text-center text-lg mb-12">We're here to help streamline your study abroad process</p>

            <ContactTopSection />

            <div className="mt-12">
                <Card>
                    <CardHeader>
                        <CardTitle className='text-2xl text-mainColor'>Our Location</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="aspect-video  flex items-center justify-center">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.6635269358503!2d83.46291407546593!3d27.665880076206292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996850023dc034f%3A0xde2f6844941a9b38!2sLopho%20Abroad%20Consultancy%20(Head%20Office)!5e0!3m2!1sen!2snp!4v1730111145285!5m2!1sen!2snp" width="1200" height="800" loading="lazy" ></iframe>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}