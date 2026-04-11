import { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { toast } from "sonner";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success("Message sent successfully! We'll get back to you within 24 hours.");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: MapPin, title: "Visit Our Office", details: ["123 Education Street", "Business District", "City, State 12345"] },
    { icon: Phone, title: "Call Us", details: ["+1 (234) 567-8900", "+1 (234) 567-8901", "Mon-Sat: 9 AM - 6 PM"] },
    { icon: Mail, title: "Email Us", details: ["info@nobalnavigator.com", "support@nobalnavigator.com", "We reply within 24 hours"] },
    { icon: Clock, title: "Business Hours", details: ["Monday - Friday: 9 AM - 6 PM", "Saturday: 10 AM - 4 PM", "Sunday: Closed"] },
  ];

  const offices = [
    { city: "Main Office", address: "123 Education Street, Business District, City 12345", phone: "+1 (234) 567-8900", email: "info@nobalnavigator.com" },
    { city: "Regional Office", address: "456 University Avenue, Downtown, City 67890", phone: "+1 (234) 567-8901", email: "regional@nobalnavigator.com" },
  ];

  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl mb-6">Contact Us</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Get in touch with our expert team. We're here to answer your questions and guide you on your study abroad journey.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <info.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl text-blue-900 mb-3">{info.title}</h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm mb-1">{detail}</p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl text-blue-900 mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">Fill out the form below and our team will get back to you within 24 hours.</p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" required className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+1 (234) 567-8900" required className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="subject">Subject *</Label>
                  <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="Inquiry about study abroad programs" required className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your study abroad goals..." required className="mt-1 min-h-[150px]" />
                </div>
                <Button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 hover:bg-blue-700">
                  {isSubmitting ? "Sending..." : <><Send className="mr-2 w-4 h-4" />Send Message</>}
                </Button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl text-blue-900 mb-6">Visit Our Offices</h2>
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg h-64 mb-8 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                  <p className="text-gray-600">Interactive Map</p>
                  <p className="text-sm text-gray-500">Find us on Google Maps</p>
                </div>
              </div>
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <h3 className="text-xl text-blue-900 mb-3">{office.city}</h3>
                      <div className="space-y-2 text-gray-600">
                        <div className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                          <span className="text-sm">{office.address}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-blue-600 flex-shrink-0" />
                          <a href={`tel:${office.phone}`} className="text-sm hover:text-blue-600">{office.phone}</a>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-blue-600 flex-shrink-0" />
                          <a href={`mailto:${office.email}`} className="text-sm hover:text-blue-600">{office.email}</a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-blue-900 mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "How long does the consultation process take?", a: "Our initial consultation typically lasts 60-90 minutes. During this time, we assess your profile, discuss your goals, and recommend suitable universities and programs." },
              { q: "What documents do I need to bring?", a: "Please bring your academic transcripts, standardized test scores (if available), passport copy, and any relevant certificates or work experience documents." },
              { q: "Do you charge for the initial consultation?", a: "We offer a free initial consultation to understand your needs and explain our services. Detailed service charges will be discussed during the meeting." },
              { q: "How long does the visa process take?", a: "Visa processing times vary by country. Typically, student visas take 4-8 weeks for processing. We guide you through every step to ensure timely submission." },
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-lg text-blue-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">Book a free consultation with our expert counselors and take the first step towards your study abroad dreams.</p>
          <a href="/book">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">Book Free Consultation</Button>
          </a>
        </div>
      </section>
    </div>
  );
}