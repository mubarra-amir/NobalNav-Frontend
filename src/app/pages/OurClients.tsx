import { Card, CardContent } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Star, Quote } from "lucide-react";

export default function OurClients() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      university: "University of Oxford",
      country: "United Kingdom",
      course: "Master's in Computer Science",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      text: "Nobal Navigator was instrumental in helping me secure admission to Oxford. Their guidance on crafting my personal statement and preparing for interviews was invaluable. The team was always available to answer my questions and provided support at every step.",
      rating: 5,
    },
    {
      name: "Raj Patel",
      university: "University of Toronto",
      country: "Canada",
      course: "MBA",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      text: "The visa process seemed overwhelming at first, but the team at Nobal Navigator handled everything professionally. They prepared all my documents meticulously and coached me for the visa interview. I got my visa approved on the first attempt!",
      rating: 5,
    },
    {
      name: "Emma Williams",
      university: "University of Melbourne",
      country: "Australia",
      course: "Bachelor's in Medicine",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      text: "I was confused about which country and university to choose. The counselors at Nobal Navigator took time to understand my career goals and helped me find the perfect fit. Now I'm studying my dream course at Melbourne!",
      rating: 5,
    },
    {
      name: "Ahmed Hassan",
      university: "Technical University of Munich",
      country: "Germany",
      course: "Master's in Engineering",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
      text: "Outstanding service! They helped me find scholarship opportunities and guided me through the entire application process. Their expertise in European universities is exceptional. Highly recommended!",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      university: "Harvard University",
      country: "USA",
      course: "Master's in Public Health",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop",
      text: "Getting into an Ivy League school was my dream, and Nobal Navigator made it come true. Their counselors are highly knowledgeable about US admissions and helped me build a competitive application. Forever grateful!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      university: "University College Dublin",
      country: "Ireland",
      course: "Master's in Data Science",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
      text: "Professional, responsive, and genuinely caring - that's how I'd describe Nobal Navigator. They went above and beyond to ensure my application was perfect. The post-landing support was also excellent!",
      rating: 5,
    },
    {
      name: "Sofia Rodriguez",
      university: "University of Sydney",
      country: "Australia",
      course: "Bachelor's in Business",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
      text: "I appreciated the personalized attention I received. The team understood my financial constraints and helped me find affordable universities with scholarship options. They made my study abroad dream achievable!",
      rating: 5,
    },
    {
      name: "David Kim",
      university: "University of British Columbia",
      country: "Canada",
      course: "PhD in Physics",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop",
      text: "As a PhD applicant, I needed help with complex application requirements. Nobal Navigator's expertise was evident in how they guided me through research proposals and connecting with potential supervisors. Excellent service!",
      rating: 5,
    },
    {
      name: "Aisha Mohammed",
      university: "KTH Royal Institute of Technology",
      country: "Sweden",
      course: "Master's in Sustainable Energy",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
      text: "The consultants were knowledgeable about Scandinavian universities and helped me navigate the unique application process. Their support with accommodation and pre-departure preparations was also very helpful.",
      rating: 5,
    },
  ];

  const stats = [
    { number: "1000+", label: "Happy Students" },
    { number: "98%", label: "Success Rate" },
    { number: "50+", label: "Partner Universities" },
    { number: "4.9/5", label: "Average Rating" },
  ];

  const universities = [
    "University of Oxford",
    "Harvard University",
    "University of Toronto",
    "University of Melbourne",
    "Technical University of Munich",
    "University College Dublin",
    "ETH Zurich",
    "University of British Columbia",
    "KTH Royal Institute of Technology",
    "University of Helsinki",
    "University of Cyprus",
    "Australian National University",
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl mb-6">Our Success Stories</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Hear from students who achieved their dreams with our guidance
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
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

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-blue-900 mb-4">
              What Our Students Say
            </h2>
            <p className="text-xl text-gray-600">
              Real experiences from students we've helped succeed
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <Quote className="w-8 h-8 text-blue-200 mb-4" />
                  
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                  
                  <div className="border-t pt-4">
                    <div className="flex items-center gap-3 mb-3">
                      <ImageWithFallback
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <div className="text-blue-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-500">{testimonial.country}</div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600">
                      <div className="mb-1">{testimonial.university}</div>
                      <div className="text-blue-600">{testimonial.course}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Universities */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-blue-900 mb-4">
              Our Partner Universities
            </h2>
            <p className="text-xl text-gray-600">
              We work with prestigious institutions worldwide
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {universities.map((university, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-600 text-2xl">🎓</span>
                  </div>
                  <div className="text-gray-700">{university}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Placeholder */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-blue-900 mb-4">
              Video Testimonials
            </h2>
            <p className="text-xl text-gray-600">
              Watch our students share their experiences
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="hover:shadow-xl transition-shadow overflow-hidden">
                <div className="relative bg-gradient-to-br from-blue-100 to-blue-50 aspect-video flex items-center justify-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="text-gray-700">Student Success Story {item}</div>
                  <div className="text-sm text-gray-500">Watch how we helped them succeed</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of successful students who achieved their study abroad dreams with Nobal Navigator.
          </p>
          <a href="/book">
            <button className="bg-white text-blue-900 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
              Book Your Free Consultation
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}
