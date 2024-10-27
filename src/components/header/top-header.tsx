

"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "./navlink";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";


export type LinkItem = {
    name: string;
    link: string;
};

const TopHeader = () => {

    const path = usePathname();

    return (
        <header className="sticky top-0 left-0 right-0 z-50 bg-white shadow-md transition-colors duration-300 text-black">
            <div className="hidden md:flex justify-between items-center w-11/12 mx-auto h-[68px] px-2 py-2 lg:px-4">
                {/* Logo */}
                <Link href={"/"} className="flex items-center py-4">
                    <Image
                        src={"/assets/logo.png"}

                        alt="Ampholo logo"
                        height={300}
                        width={300}
                        quality={100}
                        priority
                        className="h-[60px] w-auto object-contain hover:scale-110 transition-transform duration-300 ease-in-out"
                    />

                </Link>

                {/* Navigation Links */}
                <nav className="flex items-center justify-end gap-6">
                    {navLinks.map((link: LinkItem, i) => (
                        <Link
                            key={i}
                            href={link.link}
                            className={`font-medium lg:text-md transition-all duration-300 ease-in-out transform hover:scale-110 ${path === link.link
                                ? "text-mainColor font-semibold"
                                : " hover:text-mainColor"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}


                </nav>

                <div className="flex gap-4 items-center">
                    <Button className="rounded-xl" variant={'ghost'}>
                        Join Us
                    </Button>
                    <Button className="rounded-xl" variant={'outline'} >
                        Contact Us
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default TopHeader;
