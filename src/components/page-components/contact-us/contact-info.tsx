
import { MapPin, Phone, Mail } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { socialMedia } from '@/components/header/navlink';
import Link from 'next/link';
import Image from 'next/image';
const ContactInfo = () => {
    return (
        <Card className="p-6   border border-gray-200" >
            <CardHeader className="-mt-4">
                <CardTitle className="text-2xl font-semibold ">Contact Information</CardTitle>
                <CardDescription className="text-gray-600">
                    You can also reach us through these channels:
                </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
                <Card className="flex items-center space-x-3 p-4 bg-teal-50 ">

                    <MapPin className=" w-5 h-5" />
                    <span className="">Tilotama-4, Rupandehi</span>
                </Card>

                <Card className="flex items-center space-x-3 p-4 bg-teal-50 ">

                    <Phone className=" w-5 h-5" />
                    <span className="">98346356478</span>
                </Card>

                <Card className="flex items-center space-x-3 p-4 bg-teal-50 ">

                    <Mail className=" w-5 h-5" />
                    <span className="">contact@amphlocrm.com</span>
                </Card>


            </CardContent>
            <CardFooter>
                <div className="flex items-center gap-6 mt-6">
                    {socialMedia.map((media) => (
                        <Link href={media.link} key={media.name} className="hover:scale-110 transition-transform duration-200">
                            <Image
                                src={media.image}
                                alt={media.name}
                                height={32}
                                width={32}
                                className="sizd-16 object-contain"
                            />
                        </Link>
                    ))}
                </div>
            </CardFooter>
        </Card>
    );
};

export default ContactInfo;
