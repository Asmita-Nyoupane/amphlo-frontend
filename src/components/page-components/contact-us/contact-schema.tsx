
import { z } from "zod";

export const formSchema = z.object({
    name: z.string().min(1, { message: "Name is required." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    phone: z.string().min(10, { message: "Phone number is required and should be at least 10 digits." }),
    country: z.string().min(1, { message: "Country is required." }),
    representedAgency: z.string().optional(),
    purpose: z.string().min(10, { message: "Message should be at least 10 characters." }),
});

export type ContactFormSchema = z.infer<typeof formSchema>;
