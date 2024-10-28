import Gallery from "@/components/page-components/for-partners/gallery";
import PartnerTopsection from "@/components/page-components/for-partners/partner-top-section";
import PartnershipBenefits from "@/components/page-components/for-partners/partnersip-benefit";
import UniversityShowCase from "@/components/page-components/for-partners/university-showcase";
import Excellence from "@/components/page-components/home/excellence";
import PartnerTestimonial from "@/components/page-components/home/testimonial/partner-testimonial";
import React from "react";

const ForPartnersPage = () => {
    return (
        <div className="flex flex-col gap-16 ">
            <div className="container mx-auto flex flex-col gap-16">
                <PartnerTopsection />
            </div>
            <div className="bg-gray-50">
                <PartnershipBenefits />
            </div>
            <Gallery />
            <div className="bg-teal-50">
                <Excellence />
            </div>
            <div className="container mx-auto flex flex-col gap-16">
                <PartnerTestimonial />
            </div>
            <UniversityShowCase />
        </div>
    );
};

export default ForPartnersPage;