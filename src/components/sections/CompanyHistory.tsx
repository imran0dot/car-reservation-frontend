import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Flag, Rocket, Target, Users } from "lucide-react"
import Title from "../widget/Title"

export default function CompanyHistory() {
    return (
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4">
                <Title 
                    batch="Our Journey"
                    title="revolutionize the car rental industry"
                    subtitle="Since our founding in 1995, we've been on a mission to revolutionize the car rental industry. Here's a glimpse into our history and the values that drive us forward."
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="grid grid-cols-1 gap-8 mb-16">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Flag className="w-6 h-6 text-primary" />
                                    Our Mission
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">
                                    To provide exceptional car rental experiences that empower our customers to explore, connect, and create lasting memories. We strive to offer reliable, affordable, and sustainable transportation solutions that meet the diverse needs of our clients.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Rocket className="w-6 h-6 text-primary" />
                                    Our Vision
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">
                                    To be the leading innovator in the car rental industry, setting new standards for customer service, sustainability, and technological advancement. We envision a future where transportation is seamless, eco-friendly, and tailored to individual needs.
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    <div>
                        <div className="max-w-3xl mx-auto">
                            <div className="relative border-l border-gray-200 pl-8 pb-8">
                            <div className="absolute w-4 h-4 bg-indigo-700 rounded-full -left-2 border border-indigo-500"></div>
                                <div className="mb-8">
                                    <h4 className="font-semibold flex items-center gap-2">
                                        <Flag className="w-4 h-4 text-primary" />
                                        1995: The Beginning
                                    </h4>
                                    <p className="text-gray-600">Founded with a fleet of just 10 cars and a vision to change the rental landscape.</p>
                                </div>
                            </div>
                            <div className="relative border-l border-gray-200 pl-8 pb-8">
                            <div className="absolute w-4 h-4 bg-indigo-700 rounded-full -left-2 border border-indigo-500"></div>
                                <div className="mb-8">
                                    <h4 className="font-semibold flex items-center gap-2">
                                        <Users className="w-4 h-4 text-primary" />
                                        2005: Expansion
                                    </h4>
                                    <p className="text-gray-600">Reached 100 locations across the country, serving over 1 million customers annually.</p>
                                </div>
                            </div>
                            <div className="relative border-l border-gray-200 pl-8 pb-8">
                            <div className="absolute w-4 h-4 bg-indigo-700 rounded-full -left-2 border border-indigo-500"></div>
                                <div className="mb-8">
                                    <h4 className="font-semibold flex items-center gap-2">
                                        <Rocket className="w-4 h-4 text-primary" />
                                        2015: Innovation Leader
                                    </h4>
                                    <p className="text-gray-600">Launched our mobile app and introduced a fleet of electric vehicles, setting new industry standards.</p>
                                </div>
                            </div>
                            <div className="relative border-l border-gray-200 pl-8">
                                <div className="absolute w-4 h-4 bg-indigo-700 rounded-full -left-2 border border-indigo-500"></div>
                                <div>
                                    <h4 className="font-semibold flex items-center gap-2">
                                        <Target className="w-4 h-4 text-primary" />
                                        2023: Future-Ready
                                    </h4>
                                    <p className="text-gray-600">Committed to a fully sustainable fleet by 2030 and expanding into new mobility solutions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}