import Image from "next/image";

const Vision = () => {
    return (
        <section className="flex flex-col md:flex-row items-center gap-12" data-aos="fade-up"  >
            <div className="md:w-1/2">
                <div className='relative w-full  min-h-[300px]   h-auto xl:h-full rounded-lg overflow-hidden'>
                    <Image
                        src="/assets/vision.jpg"
                        alt='Mission'
                        layout="fill"
                        objectFit="cover"
                        className='rounded-lg object-cover h-full w-full'
                    />
                </div>
            </div>
            <div className="md:w-1/2 flex-1">
                <h3 className="text-4xl font-bold text-mainColor mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                    To empower students and educational institutions worldwide by creating a seamless, supportive, and accessible study abroad experience. Amphlo envisions a world where every student has the guidance, tools, and resources they need to succeed on their international education journey.
                </p>
            </div>
        </section>
    );
};
export default Vision