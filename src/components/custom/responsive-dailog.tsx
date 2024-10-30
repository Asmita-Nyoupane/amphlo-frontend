import * as React from 'react';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
} from '@/components/ui/drawer';


// Custom hook to detect mobile screen size
function useMediaQuery(query: string) {
    const [matches, setMatches] = React.useState(false);

    React.useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        const listener = () => setMatches(media.matches);
        media.addListener(listener);
        return () => media.removeListener(listener);
    }, [matches, query]);

    return matches;
}
export function ResponsiveDialog({
    children,
    isOpen,
    setIsOpen,
    title,
    description,
    className
}: {
    children: React.ReactNode;
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    title: string;
    description?: string;
    className?: string;
}) {
    const isMobile = useMediaQuery("(max-width: 768px)");

    // if (!isMobile) {
    //     return (
    //         <Dialog open={isOpen} onOpenChange={setIsOpen}>
    //             <DialogContent className={className}>
    //                 <DialogHeader>
    //                     <DialogTitle>{title}</DialogTitle>
    //                     {description && (
    //                         <DialogDescription>{description}</DialogDescription>
    //                     )}
    //                 </DialogHeader>
    //                 {children}
    //             </DialogContent>
    //         </Dialog>
    //     );
    // }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className={className}>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    {description && (
                        <DialogDescription>{description}</DialogDescription>
                    )}
                </DialogHeader>
                {children}
            </DialogContent>
        </Dialog>
    );
}