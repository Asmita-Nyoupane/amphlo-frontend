"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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

const formSchema = z.object({
    name: z.string().min(1, { message: "Name is required." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    message: z
        .string()
        .min(10, { message: "Message should be at least 10 characters." }),
});

export function ContactForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log("🚀 ~ onSubmit ~ values:", values);
    }

    return (
        <Form {...form}>
            <h2 className="text-center text-2xl font-semibold pb-10">
                Connect With Us
            </h2>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6 -mt-10 "
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
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Your Message</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Type your message here..."
                                    id="message"
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
