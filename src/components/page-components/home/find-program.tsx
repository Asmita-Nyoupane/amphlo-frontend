import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FindProgram = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-8 justify-between w-full px-10 py-20  text-white" data-aos="fade-up">
            <section className="flex flex-col items-start gap-6 lg:w-[56%] w-full px-8 py-14   ">
                {/* custom tailwind property leading didn't work so we have to use inline css */}
                <h2 className="text-4xl lg:text-6xl font-extrabold tracking-wide" style={{ lineHeight: '5rem' }}>
                    Explore Top Programs with AMPHLO
                </h2>
                <p className="text-lg lg:text-xl font-medium">
                    Apply today and start your journey with us!
                </p>
                <Button size="lg" className="rounded-full text-mainColor" variant={'secondary'} asChild>
                    <Link href="/features">
                        Find Program
                    </Link>
                </Button>
            </section>

            <div className="flex-1    flex justify-center">
                <Image
                    src="/assets/laptop-interface.png"
                    alt="Laptop interface showcasing programs"
                    height={500}
                    width={500}
                    className="object-cover w-full transition-transform transform hover:scale-125  duration-300 ease-in-out"
                />
            </div>
        </div>
    );
};

export default FindProgram;
