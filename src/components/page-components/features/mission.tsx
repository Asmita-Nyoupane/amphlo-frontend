import Image from "next/image";

const Mission = () => {
    return (
        <section className="flex flex-col md:flex-row-reverse  gap-12" data-aos="fade-up">
            <div className="md:w-1/2">
                <div className='relative w-full  min-h-[300px]   h-auto xl:h-full rounded-lg overflow-hidden'>
                    <Image
                        src="/assets/mission.jpg"
                        alt='Mission'
                        layout="fill"
                        objectFit="cover"
                        className='rounded-lg object-cover h-full w-full'
                    />
                </div>

            </div>
            <div className="md:w-1/2 flex-1">
                <h3 className="text-4xl font-bold text-mainColor mb-6">Our Mission</h3>
                <p className="text-muted-foreground text-lg">
                    Amphlo's mission is to transform the study abroad process through innovative CRM solutions that streamline communication, simplify application management, and enhance support for both students and partners. By optimizing workflows and offering data-driven insights, we strive to make international education more accessible, organized, and efficient for everyone involved.
                </p>
            </div>
        </section>
    );
};

export default Mission