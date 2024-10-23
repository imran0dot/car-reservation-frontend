import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Title from "../widget/Title"

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "CEO & Founder",
    image: "/placeholder.svg?height=100&width=100",
    bio: "Visionary leader with 10+ years in tech innovation."
  },
  {
    name: "Sarah Lee",
    role: "CTO",
    image: "/placeholder.svg?height=100&width=100",
    bio: "Expert in AI and machine learning technologies."
  },
  {
    name: "Michael Chen",
    role: "Lead Designer",
    image: "/placeholder.svg?height=100&width=100",
    bio: "Award-winning UX/UI designer with a passion for user-centric design."
  },
  {
    name: "Emily Taylor",
    role: "Marketing Director",
    image: "/placeholder.svg?height=100&width=100",
    bio: "Strategic marketer with a track record of successful campaigns."
  }
]

export default function TeamSection() {
  return (
    <section className="py-12 bg-gray-50">
        <Title subtitle="Meet our team members" title="Our team" />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden transition-all hover:shadow-lg">
              <CardHeader className="text-center">
                <Avatar className="w-24 h-24 mx-auto">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <CardTitle className="mt-4">{member.name}</CardTitle>
                <CardDescription>{member.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center text-sm text-gray-600">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}