import AboutAmphlo from "@/components/page-components/home/about-amphlo";
import Excellence from "@/components/page-components/home/excellence";
import ExploreDestination from "@/components/page-components/home/explore-destination";
import Features from "@/components/page-components/home/features/features";
import HeroSection from "@/components/page-components/home/hero-section";
import PartnerTestimonial from "@/components/page-components/home/testimonial/partner-testimonial";
import WhyChoose from "@/components/page-components/home/why-choose";

export default function Home() {
  return (
    <div className=" flex flex-col   gap-16  md:gap-20">
      <div className="w-11/12 mx-auto mt-10 flex flex-col gap-16 md:gap-20  px-6">
        <HeroSection />
        <Features />
        <WhyChoose />
        <ExploreDestination />
      </div>

      <div className="bg-gray-50">
        <Excellence />
      </div>
      <div className="w-11/12 mx-auto  md:px-0 flex flex-col gap-16 md:gap-20  px-10" >
        <AboutAmphlo />
        <PartnerTestimonial />
      </div>
    </div>
  );
}
