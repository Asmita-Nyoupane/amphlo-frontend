import { Mail, MapPin, Phone } from "lucide-react";
import { studyAbroadDestinations } from "../page-components/home/explore-destination";
const countries = studyAbroadDestinations.map((destination) => ({
    link: `/destination/${destination.slug}`,
    name: destination.title,
}))

const navLinks = [
    { link: "/", name: "Home" },
    {
        link: "/about", name: "About Us",
        sublinks: [
            { link: "/for-universities", name: "For Universities" },
            { link: "/for-partners", name: "For Partners " },
        ]
    },
    { link: "/features", name: "Features" },
    {
        link: "/countries", name: "Countries",
        sublinks: countries
    }

];
const sideLink = [

    { link: "/", name: "Home" },
    { link: "/features", name: "Features" },
    { link: "/for-universities", name: "For Universities" },
    { link: "/for-partners", name: "For Partners " },
    ...countries

]
const footerLink = [
    { link: "/", name: "Home" },
    { link: "/features", name: "Features" },
    { link: "/for-universities", name: "For Universities" },
    { link: "/for-partners", name: "For Partners " },]

const contacts = [
    {
        icon: Phone,
        info: " 9779745432207",
    },
    {
        icon: Mail,
        info: "info@amphlo.com",
    },

    {
        icon: MapPin,
        info: "Yogikoti, Rupandehi",
    },
];
const socialMedia = [
    {
        image: "/assets/social-media/facebook.png",
        name: "facebook",
        link: "https://www.facebook.com",
    },
    {
        image: "/assets/social-media/instagram.png",
        name: "instagram",
        link: "https://www.instagram.com",
    },
    {
        image: "/assets/social-media/twitter.png",
        name: "whatshap",
        link: "https://www.x.com",
    },
];
export { navLinks, footerLink, contacts, sideLink, socialMedia, countries }