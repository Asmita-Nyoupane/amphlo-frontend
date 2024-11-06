import AboutAmphlo from "@/components/page-components/home/about-amphlo";
import Excellence from "@/components/page-components/home/excellence";
import ExploreDestination from "@/components/page-components/home/explore-destination";
import Features from "@/components/page-components/home/features/features";
import FindProgram from "@/components/page-components/home/find-program";
import HeroSection from "@/components/page-components/home/hero-section";
import PartnerTestimonial from "@/components/page-components/home/testimonial/partner-testimonial";
import TrasformJourney from "@/components/page-components/home/transform-journey";
import WhyChoose from "@/components/page-components/home/why-choose";

export default function Home() {
  return (
    <div className=" flex flex-col   gap-16  md:gap-20">
      <div className="w-11/12 mx-auto mt-10 flex flex-col gap-16 md:gap-20  px-6">
        <HeroSection />
        <Features />
      </div>
      <div className="bg-gradient-to-r from-[#003235] to-[#66ff94]">
        <FindProgram />
      </div>

      <div className="w-11/12 mx-auto mt-10 flex flex-col gap-16 md:gap-20  px-6">
        <WhyChoose />
        <ExploreDestination />
      </div>
      <div className="bg-gradient-to-r from-[#003235] to-[#66ff94]">
        <Excellence />
      </div>
      <div className="w-11/12 mx-auto  flex flex-col gap-16 md:gap-20  px-6" >
        <AboutAmphlo />
        <TrasformJourney />
        <PartnerTestimonial />
      </div>
    </div>
  );
}
