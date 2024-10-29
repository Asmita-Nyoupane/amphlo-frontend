
import ContactTopSection from "@/components/page-components/contact-us/contact-top-section";
import MapSection from "@/components/page-components/contact-us/map-section";

export default function ContactPage() {
    return (
        <div className="w-11/12 mx-auto  flex flex-col gap-16 lg:gap-20 px-4 py-8">
            <div className="space-y-4">
                <h1 className="text-4xl font-bold text-center text-mainColor ">Contact Amphlo CRM</h1>
                <p className="text-center text-lg mb-12">
                    We&apos;re here to help streamline your study abroad process
                </p>
            </div>

            <ContactTopSection />
            <MapSection />

        </div>
    );
}
