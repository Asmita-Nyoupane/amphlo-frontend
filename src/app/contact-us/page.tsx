
import { ContactForm } from "@/components/page-components/contact-us/connect-partner-form";
import ContactTopSection from "@/components/page-components/contact-us/contact-top-section";
import MapSection from "@/components/page-components/contact-us/map-section";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function ContactPage() {
    return (
        <div className="w-11/12 mx-auto  flex flex-col gap-16 lg:gap-20 px-4 py-8">
            <div className="space-y-4">
                <h1 className="text-4xl font-bold text-center text-mainColor ">Contact Amphlo CRM</h1>
                <p className="text-center text-lg mb-12">
                    We&apos;re here to help streamline your study abroad process
                </p>
            </div>
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <Card className=" py-10 px-6">

                    <ContactForm />
                </Card>
                <div className='relative w-full  min-h-[500px]   h-auto xl:h-full rounded-lg overflow-hidden'>
                    <Image
                        src={"/assets/contact.png"}
                        alt='cover image'
                        layout="fill"
                        objectFit="cover"
                        className='rounded-lg object-cover h-full w-full'
                    />
                </div>
            </section>
        </div>
    );
}
