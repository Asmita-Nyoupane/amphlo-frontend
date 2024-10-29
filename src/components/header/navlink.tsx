import { Mail, MapPin, Phone } from "lucide-react";

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
        sublinks: [
            { link: "/study-in-usa", name: "Study In USA" },
            { link: "/study-in-australia", name: "Study In Australia" },
        ]
    },
];
const footerLink = [
    { link: "/", name: "Home" },
    // { link: "/about", name: "About Us" },
    { link: "/features", name: "Features" },
    { link: "/study-in-usa", name: "Study In USA" },
    { link: "/study-in-australia", name: "Study In Australia" },
    { link: "/for-universities", name: "For Universities" },
    { link: "/for-partners", name: "For Partners " },
]
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
export { navLinks, footerLink, contacts, socialMedia }