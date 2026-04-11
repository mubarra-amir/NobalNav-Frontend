import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import {
  GraduationCap,
  Globe,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
  MapPin,
  Clock,
  Star
} from "lucide-react";

export default function Home() {
  const countries = [
    { name: "United Kingdom", image: "https://images.unsplash.com/photo-1649162458697-cda48dea1ad0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVbml0ZWQlMjBLaW5nZG9tJTIwTG9uZG9uJTIwbGFuZG1hcmtzfGVufDF8fHx8MTc3NTI5MDU2MHww&ixlib=rb-4.1.0&q=80&w=1080" },
    { name: "Ireland", image: "https://images.unsplash.com/photo-1623184506225-8f85bcb5c3ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJcmVsYW5kJTIwRHVibGluJTIwZ3JlZW4lMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzc1MjkwNTYwfDA&ixlib=rb-4.1.0&q=80&w=1080" },
    { name: "Sweden", image: "https://images.unsplash.com/photo-1663058629330-7bdc15b0681a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTd2VkZW4lMjBTdG9ja2hvbG0lMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc1MjkwNTYxfDA&ixlib=rb-4.1.0&q=80&w=1080" },
    { name: "Finland", image: "https://images.unsplash.com/photo-1517078556925-fdb0909b1483?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxGaW5sYW5kJTIwSGVsc2lua2klMjBuYXR1cmV8ZW58MXx8fHwxNzc1MjkwNTYxfDA&ixlib=rb-4.1.0&q=80&w=1080" },
    { name: "USA", image: "https://images.unsplash.com/photo-1643678469017-10c1600dc8bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVU0ElMjBOZXclMjBZb3JrJTIwc2t5bGluZXxlbnwxfHx8fDE3NzUyOTA1NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080" },
    { name: "Australia", image: "https://images.unsplash.com/photo-1718185795639-c442aff612cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBdXN0cmFsaWElMjBTeWRuZXklMjBPcGVyYSUyMEhvdXNlfGVufDF8fHx8MTc3NTI5MDU2Mnww&ixlib=rb-4.1.0&q=80&w=1080" },
    { name: "Canada", image: "https://images.unsplash.com/photo-1666490971707-d499de4c532b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDYW5hZGElMjBUb3JvbnRvJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc3NTI5MDU2M3ww&ixlib=rb-4.1.0&q=80&w=1080" },
    { name: "Cyprus", image: "https://images.unsplash.com/photo-1710106793368-82f483165c7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDeXBydXMlMjBNZWRpdGVycmFuZWFuJTIwYmVhY2h8ZW58MXx8fHwxNzc1MjkwNTYzfDA&ixlib=rb-4.1.0&q=80&w=1080" },
    { name: "Europe", image: "https://images.unsplash.com/photo-1722409706045-f76ae8f9abe9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxFdXJvcGUlMjBQYXJpcyUyMEVpZmZlbCUyMFRvd2VyfGVufDF8fHx8MTc3NTI5MDU2NHww&ixlib=rb-4.1.0&q=80&w=1080" },
  ];

  const services = [
    { icon: GraduationCap, title: "Study Abroad Consultancy", description: "Expert guidance for pursuing higher education in top universities worldwide." },
    { icon: Globe, title: "Visa Assistance", description: "Complete visa support including documentation and application processing." },
    { icon: Users, title: "University Selection", description: "Personalized university recommendations based on your profile and goals." },
    { icon: Award, title: "Application Support", description: "End-to-end assistance with application forms, essays, and documentation." },
  ];

  const stats = [
    { number: "1000+", label: "Students Placed" },
    { number: "50+", label: "Partner Universities" },
    { number: "9", label: "Countries" },
    { number: "98%", label: "Success Rate" },
  ];

  const testimonials = [
    { name: "Sarah Johnson", country: "UK", text: "Nobal Navigator made my dream of studying at Oxford a reality. Their guidance was invaluable!", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" },
    { name: "Raj Patel", country: "Canada", text: "The visa process seemed daunting, but the team handled everything smoothly. Highly recommended!", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" },
    { name: "Emma Williams", country: "Australia", text: "Professional, responsive, and genuinely caring. They helped me secure admission to my top choice!", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" },
  ];

  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
                Your Gateway to
                <span className="block text-blue-300">Global Education</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Expert consultancy for study abroad programs and visa assistance.
                Turn your international education dreams into reality with our FREE consultation.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/book">
                  <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 shadow-lg">
                    Book FREE Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" className="bg-white border-2 border-white text-blue-900 hover:bg-blue-50 shadow-lg transition-all">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1735613981597-78903fbe4156?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwYWJyb2FkJTIwZ3JhZHVhdGlvbnxlbnwxfHx8fDE3NzQ3ODc3ODh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Students celebrating graduation"
                className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-blue-900 mb-4">Study Destinations We Serve</h2>
            <p className="text-xl text-gray-600">Choose from top educational destinations worldwide</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {countries.map((country, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow cursor-pointer overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-32 overflow-hidden">
                    <ImageWithFallback src={country.image} alt={country.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-3 text-center bg-white">
                    <div className="text-sm text-gray-700">{country.name}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-blue-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive support for your study abroad journey</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl text-blue-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1648301033733-44554c74ec50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwaW50ZXJuYXRpb25hbCUyMHN0dWRlbnRzfGVufDF8fHx8MTc3NDc4Nzc4OHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="University campus with international students"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl text-blue-900 mb-6">Why Choose Nobal Navigator?</h2>
              <div className="space-y-4">
                {[
                  { title: "Expert Counselors", desc: "Experienced team with in-depth knowledge of international education systems." },
                  { title: "End-to-End Support", desc: "From university selection to visa approval and pre-departure guidance." },
                  { title: "High Success Rate", desc: "98% visa approval rate and successful placements in top universities." },
                  { title: "Personalized Approach", desc: "Tailored guidance based on your academic profile and career goals." },
                ].map((item, index) => (
                  <div key={index} className="flex gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl text-blue-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-blue-900 mb-4">What Our Students Say</h2>
            <p className="text-xl text-gray-600">Success stories from students who achieved their dreams</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <ImageWithFallback src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <div className="text-blue-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">Studying in {testimonial.country}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">Ready to Start Your Study Abroad Journey?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Book a FREE consultation with our expert counselors today and take the first step towards your global education dreams.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/book">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 shadow-lg">
                <Clock className="mr-2 w-5 h-5" />
                Book FREE Appointment Now
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-blue-900 transition-all shadow-lg">
                <MapPin className="mr-2 w-5 h-5" />
                Find Our Office
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}