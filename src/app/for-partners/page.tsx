import Gallery from "@/components/page-components/for-partners/gallery";
import PartnerTopsection from "@/components/page-components/for-partners/partner-top-section";
import PartnershipBenefits from "@/components/page-components/for-partners/partnersip-benefit";
import UniversityShowCase from "@/components/page-components/for-partners/university-showcase";
import AmphloFeatures from "@/components/page-components/home/amphlo-differnciate";
import Excellence from "@/components/page-components/home/excellence";
import PartnerTestimonial from "@/components/page-components/home/testimonial/partner-testimonial";
import React from "react";

const ForPartnersPage = () => {
    return (
        <div className="flex flex-col gap-16 md:gap-20 ">
            <div className="w-11/12 mx-auto flex flex-col mt-10  px-4  gap-16 md:gap-20 " data-aos="fade-up">
                <PartnerTopsection />
            </div>
            <div className="bg-gray-50" >
                <PartnershipBenefits />
            </div>
            <Gallery />
            <div className="bg-gradient-to-r from-[#7fe7ec] to-[#66ff94]" data-aos="fade-up">
                <Excellence />
            </div>
            <UniversityShowCase />
            <div className="w-11/12 mx-auto flex flex-col  px-4  gap-16 md:gap-20" >
                <PartnerTestimonial />
            </div>
            <AmphloFeatures />
        </div>
    );
};

export default ForPartnersPage;
