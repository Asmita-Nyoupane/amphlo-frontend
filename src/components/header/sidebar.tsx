"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { sideLink } from "./navlink";
import { LinkItem } from "./top-header";
import { Button } from "../ui/button";


const SideHeader = () => {
    const path = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavBar = () => {
        setIsOpen(!isOpen);
    };

    const closeNavBar = () => {
        setIsOpen(false);
    };

    return (
        <div className="sticky top-0 left-0 right-0 z-50 shadow">
            {/* Top Bar for Mobile View */}
            <div className="md:hidden flex justify-between items-center px-4 py-3 bg-white text-gray-800">
                <Link href="/">
                    <Image
                        src="/assets/logo.png"
                        alt="logo"
                        height={120}
                        width={120}
                        quality={100}
                        priority={true}
                        className="h-[60px] w-auto object-contain"
                    />
                </Link>
                <button onClick={toggleNavBar} className="text-2xl text-mainColor ">
                    <Menu />
                </button>
            </div>

            {/* Sidebar for Mobile View */}
            <div
                className={`md:hidden fixed top-0 left-0 w-[40%] max-w-sm h-full bg-white text-gray-800 z-50 flex flex-col items-start p-6 transition-transform transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                    } duration-300 ease-in-out`}
            >
                {/* Sidebar Top Section */}
                <div className="w-full flex justify-between items-center  border-b border-gray-500 pb-4  ">
                    <Link href="/">
                        <Image
                            src="/assets/logo.png"
                            alt="logo"
                            height={120}
                            width={120}
                            quality={100}
                            priority={true}
                            className="h-[60px] w-auto object-contain"
                        />
                    </Link>
                    <button onClick={closeNavBar} className="text-mainColor hover:bg-gray-100 p-2 rounded-full">
                        <X size={20} />
                    </button>
                </div>

                {/* Navigation Links */}
                <nav className="w-full flex flex-col gap-3 mt-3">
                    {sideLink.map((link: LinkItem, i) => (
                        <Link
                            key={i}
                            href={link.link}
                            onClick={closeNavBar}
                            className={`font-medium hover:text-mainColor transition-all duration-300 ease-in-out ${path === link.link ? "text-mainColor font-semibold" : ""
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="flex gap-3 flex-col justify-start">
                        {/* <Button className="rounded-full  w-fit min-w-32" size={'lg'} variant={'secondary'} asChild>
                            <Link href='/' >
                                Join Us
                            </Link>
                        </Button> */}
                        <Button className="rounded-full w-fit  " size={'lg'} variant={'outline'} asChild >
                            <Link className="" href={'/contact-us'}>
                                Contact Us
                            </Link>
                        </Button>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default SideHeader;
