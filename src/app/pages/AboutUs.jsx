import { Card, CardContent } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Target, Users, Award, Globe, CheckCircle } from "lucide-react";

export default function AboutUs() {
  const values = [
    { icon: Target, title: "Our Mission", description: "To empower students with world-class education opportunities by providing expert guidance and comprehensive support throughout their study abroad journey." },
    { icon: Users, title: "Our Vision", description: "To be the most trusted study abroad consultancy, connecting ambitious students with their dream universities worldwide." },
    { icon: Award, title: "Our Values", description: "Integrity, Excellence, Student-Centric Approach, Innovation, and Commitment to Success." },
  ];

  const team = [
    { name: "Dr. Rajesh Kumar", role: "Founder & CEO", description: "15+ years in international education consultancy", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop" },
    { name: "Sarah Mitchell", role: "Head of Admissions", description: "Expert in UK & Europe university placements", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop" },
    { name: "Michael Chen", role: "Visa Specialist", description: "Specialist in USA, Canada & Australia visas", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop" },
    { name: "Priya Sharma", role: "Student Counselor", description: "Personalized guidance for 500+ students", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop" },
  ];

  const milestones = [
    { year: "2015", event: "Nobal Navigator Pvt Ltd founded" },
    { year: "2017", event: "Reached 100 successful student placements" },
    { year: "2019", event: "Expanded to 9 countries partnership" },
    { year: "2021", event: "Achieved 98% visa success rate" },
    { year: "2024", event: "1000+ students placed in top universities" },
  ];

  const features = [
    "Personalized career counseling", "University selection assistance",
    "Application processing support", "Visa documentation & filing",
    "Scholarship guidance", "Pre-departure orientation",
    "Post-landing support", "Test preparation guidance",
  ];

  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl mb-6">About Nobal Navigator</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Your trusted partner in making global education dreams a reality since 2015
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl text-blue-900 mb-6">Empowering Students Since 2015</h2>
              <p className="text-gray-600 mb-4 text-lg">Nobal Navigator Pvt Ltd is a premier study abroad consultancy dedicated to helping students achieve their international education goals. With over a decade of experience, we have successfully guided more than 1,000 students to prestigious universities across the globe.</p>
              <p className="text-gray-600 mb-4 text-lg">Our team of expert counselors provides comprehensive support throughout the entire journey - from selecting the right university and course to visa approval and pre-departure guidance.</p>
              <p className="text-gray-600 text-lg">What sets us apart is our personalized approach, high success rate, and commitment to student satisfaction.</p>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1739298061766-e2751d92e9db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwYnVzaW5lc3MlMjB0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3NzQ3MDU1MjN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Our team meeting"
                className="rounded-lg shadow-xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <value.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl text-blue-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 text-lg">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-blue-900 mb-4">Comprehensive Services We Offer</h2>
            <p className="text-xl text-gray-600">End-to-end support for your study abroad journey</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-blue-900 mb-4">Meet Our Expert Team</h2>
            <p className="text-xl text-gray-600">Experienced professionals dedicated to your success</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <ImageWithFallback src={member.image} alt={member.name} className="w-32 h-32 rounded-full object-cover mx-auto mb-4" />
                  <h3 className="text-xl text-blue-900 mb-1">{member.name}</h3>
                  <div className="text-blue-600 mb-3">{member.role}</div>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-blue-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Milestones that define our success</p>
          </div>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-1 bg-blue-50 p-6 rounded-lg">
                  <p className="text-lg text-gray-700">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Globe className="w-16 h-16 mx-auto mb-6 text-blue-300" />
            <h2 className="text-3xl md:text-4xl mb-6">Recognized Excellence</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Our commitment to excellence has earned us recognition as one of the leading study abroad consultancies.
              We maintain partnerships with over 50 universities and have achieved a remarkable 98% visa success rate.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div><div className="text-4xl mb-2">🏆</div><div className="text-blue-100">Best Consultancy 2023</div></div>
              <div><div className="text-4xl mb-2">⭐</div><div className="text-blue-100">4.9/5 Student Rating</div></div>
              <div><div className="text-4xl mb-2">🎓</div><div className="text-blue-100">Top University Partners</div></div>
              <div><div className="text-4xl mb-2">🌍</div><div className="text-blue-100">Global Reach</div></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}