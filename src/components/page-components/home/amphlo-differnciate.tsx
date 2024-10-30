import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Filter, Palette, Globe, GraduationCap, BarChart } from 'lucide-react'

export default function AmphloFeatures() {
    const features = [
        {
            icon: <Filter className="h-6 w-6" />,
            title: "Advanced Course Filtering",
            description: "Easily find the perfect courses with our powerful filtering system."
        },
        {
            icon: <Palette className="h-6 w-6" />,
            title: "Personalized Theme Settings",
            description: "Customize the look and feel of your CRM to match your brand."
        },
        {
            icon: <Globe className="h-6 w-6" />,
            title: "Wide Range of Countries",
            description: "Access information on educational opportunities from around the world."
        },
        {
            icon: <GraduationCap className="h-6 w-6" />,
            title: "Extensive University Database",
            description: "Comprehensive information on universities and their offerings."
        },
        {
            icon: <BarChart className="h-6 w-6" />,
            title: "Advanced Analytics",
            description: "Gain insights with our powerful data analysis tools."
        }
    ]

    return (
        <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5" data-aos="fade-up" >
            <div className="w-11/12 mx-auto px-6" >
                <h2 className="text-4xl font-bold  text-mainColor text-center mb-6">
                    What Makes Amphlo <span className="text-primary">Different</span>
                </h2>
                <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Amphlo goes beyond traditional CRM systems, offering unique features tailored for the education sector.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                            <CardContent className="p-6">
                                <div className="mb-4">
                                    <Badge variant="outline" className="p-2 bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                                        {feature.icon}
                                    </Badge>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                <p className="text-muted-foreground">{feature.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}