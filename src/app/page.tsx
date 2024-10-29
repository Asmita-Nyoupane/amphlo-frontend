import Excellence from "@/components/page-components/home/excellence";
import Features from "@/components/page-components/home/features/features";
import HeroSection from "@/components/page-components/home/hero-section";
import PartnerTestimonial from "@/components/page-components/home/testimonial/partner-testimonial";
import WhyChoose from "@/components/page-components/home/why-choose";

export default function Home() {
  return (
    <div className=" flex flex-col   gap-16  md:gap-20">
      <div className="container mx-auto px-4 md:px-0 mt-10 flex flex-col gap-16 md:gap-20">
        <HeroSection />
        <Features />
        <WhyChoose />
      </div>

      <div className="bg-blue-50">
        <Excellence />
      </div>
      <div className="container mx-auto px-4 md:px-0 flex flex-col gap-16 md:gap-20">
        <PartnerTestimonial />
      </div>
    </div>
  );
}
