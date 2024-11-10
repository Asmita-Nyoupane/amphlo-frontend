"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight } from "lucide-react";
import { ContactFormSchema, formSchema } from "./contact-schema";


export function ContactForm() {
    const form = useForm<ContactFormSchema>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            country: "",
            purpose: "",
            representedAgency: "",

        },
    });

    async function onSubmit(values: ContactFormSchema) {
        console.log("🚀 ~ onSubmit ~ values:", values);
    }

    return (
        <Form {...form}>
            <h2 className="text-center text-2xl font-semibold pb-10">
                Connect With Us
            </h2>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6 -mt-10"
            >
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input type="text" placeholder="Enter your name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                                <Input
                                    type="email"
                                    placeholder="youremail@example.com"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Phone</FormLabel>
                            <FormControl>
                                <Input type="tel" placeholder="Enter your phone number" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Country</FormLabel>
                            <FormControl>
                                <Input type="text" placeholder="Enter your country" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="representedAgency"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Represented Agency (Optional)</FormLabel>
                            <FormControl>
                                <Input type="text" placeholder="Enter represented agency" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="purpose"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Your Purpose</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Write your purpose..."
                                    id="purpose"
                                    rows={5}
                                    style={{ resize: "none" }}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex items-center">
                    <Button type="submit">
                        Submit
                        <span className="ml-2">
                            <ArrowRight />
                        </span>
                    </Button>
                </div>
            </form>
        </Form>
    );
}
