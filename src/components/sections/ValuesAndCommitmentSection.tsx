import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { HeartHandshake, Leaf, Shield, Trophy, Users, Zap } from "lucide-react"
import Title from "../widget/Title"

const values = [
    {
        title: "Customer-Centric",
        description: "We put our customers first, ensuring a seamless and enjoyable experience from booking to return.",
        icon: HeartHandshake,
    },
    {
        title: "Sustainability",
        description: "Committed to reducing our environmental impact through eco-friendly practices and vehicle options.",
        icon: Leaf,
    },
    {
        title: "Safety",
        description: "Your safety is our top priority. We maintain our fleet to the highest standards.",
        icon: Shield,
    },
    {
        title: "Innovation",
        description: "Continuously improving our services with the latest technology and industry best practices.",
        icon: Zap,
    },
    {
        title: "Community",
        description: "Actively contributing to and supporting the communities we serve.",
        icon: Users,
    },
    {
        title: "Excellence",
        description: "Striving for excellence in every aspect of our service to exceed your expectations.",
        icon: Trophy,
    },
]

export default function ValuesAndCommitment() {
    return (
        <section className="py-16 bg-gradient-to-b from-white to-gray-100">

            <div className="container mx-auto px-4">
                <Title
                    batch="Values & Commitment"
                    title="Our Values And Commitment"
                    subtitle="At our core, we're driven by a set of values that shape everything we do. Our commitment to these principles ensures that we deliver the best possible experience for our customers and community."
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {values.map((value, index) => (
                        <Card key={index} className="bg-white transition-all hover:shadow-lg">
                            <CardHeader>
                                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                                    <value.icon size={24} />
                                </div>
                                <CardTitle className="text-xl">{value.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-gray-600">{value.description}</CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <div className="mt-16 text-center">
                    <h3 className="text-2xl font-semibold mb-4">Our Promise to You</h3>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        We're more than just a car rental company. We're your partner in exploration, adventure, and reliable transportation. Our commitment to these values drives us to continually improve and provide you with the best possible service. When you choose us, you're choosing a company that cares about your journey as much as you do.
                    </p>
                </div>
            </div>
        </section>
    )
}