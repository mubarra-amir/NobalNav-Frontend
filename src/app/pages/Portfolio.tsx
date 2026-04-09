import { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";

export default function Portfolio() {
  const [selectedCountry, setSelectedCountry] = useState("all");

  const successStories = [
    {
      name: "Ananya Reddy",
      photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop",
      country: "UK",
      university: "Imperial College London",
      course: "Master's in Artificial Intelligence",
      year: "2024",
      achievement: "Received £15,000 scholarship",
      story: "From a small town in India to one of the world's top tech universities, Ananya's journey showcases determination and excellent guidance.",
    },
    {
      name: "James Mitchell",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
      country: "Canada",
      university: "McGill University",
      course: "Bachelor's in Medicine",
      year: "2023",
      achievement: "Full tuition scholarship",
      story: "With a dream to become a doctor, James secured admission and full funding at one of Canada's most prestigious medical schools.",
    },
    {
      name: "Li Wei",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
      country: "Australia",
      university: "Australian National University",
      course: "PhD in Quantum Physics",
      year: "2024",
      achievement: "Research fellowship awarded",
      story: "Li Wei's exceptional research proposal and our guidance helped secure a competitive research position at ANU.",
    },
    {
      name: "Sofia Martinez",
      photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop",
      country: "USA",
      university: "Stanford University",
      course: "MBA",
      year: "2023",
      achievement: "$50,000 merit scholarship",
      story: "Sofia's leadership experience combined with strategic application guidance led to admission at Stanford GSB with significant funding.",
    },
    {
      name: "Yuki Tanaka",
      photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop",
      country: "Finland",
      university: "University of Helsinki",
      course: "Master's in Environmental Science",
      year: "2024",
      achievement: "Selected for research project",
      story: "Yuki's passion for sustainability was perfectly matched with Helsinki's cutting-edge environmental programs.",
    },
    {
      name: "Mohammed Al-Rashid",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
      country: "Sweden",
      university: "KTH Royal Institute of Technology",
      course: "Master's in Sustainable Engineering",
      year: "2023",
      achievement: "Swedish Institute Scholarship",
      story: "Mohammed's innovative approach to sustainable technology impressed the admissions committee at KTH.",
    },
    {
      name: "Emma O'Connor",
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
      country: "Ireland",
      university: "Trinity College Dublin",
      course: "Master's in Computer Science",
      year: "2024",
      achievement: "Dean's List Scholar",
      story: "Emma's strong academic background and our application strategy secured her a prestigious scholarship at Trinity.",
    },
    {
      name: "Alex Petrov",
      photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop",
      country: "Cyprus",
      university: "University of Cyprus",
      course: "Master's in International Business",
      year: "2023",
      achievement: "EU scholarship recipient",
      story: "Alex's international business acumen and multilingual skills made him an ideal candidate for Cyprus.",
    },
  ];

  const placementStats = {
    "2024": {
      totalStudents: 250,
      countries: ["UK", "USA", "Canada", "Australia", "Europe"],
      topUniversities: 15,
      scholarships: 180,
    },
    "2023": {
      totalStudents: 220,
      countries: ["UK", "USA", "Canada", "Australia", "Europe"],
      topUniversities: 12,
      scholarships: 155,
    },
    "2022": {
      totalStudents: 180,
      countries: ["UK", "USA", "Canada", "Australia"],
      topUniversities: 10,
      scholarships: 120,
    },
  };

  const achievements = [
    {
      icon: "🎓",
      number: "1000+",
      label: "Students Placed",
    },
    {
      icon: "🏆",
      number: "98%",
      label: "Visa Success Rate",
    },
    {
      icon: "💰",
      number: "$2M+",
      label: "Scholarships Secured",
    },
    {
      icon: "🌍",
      number: "50+",
      label: "Partner Universities",
    },
  ];

  const countries = ["all", "UK", "USA", "Canada", "Australia", "Europe"];

  const filteredStories = selectedCountry === "all" 
    ? successStories 
    : successStories.filter(story => story.country === selectedCountry);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl mb-6">Our Portfolio</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Celebrating the success stories of students we've helped achieve their dreams
            </p>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-2">{achievement.icon}</div>
                <div className="text-4xl text-blue-600 mb-2">{achievement.number}</div>
                <div className="text-gray-600">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-blue-900 mb-4">
              Student Success Stories
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Real students, real achievements, real impact
            </p>
            
            {/* Country Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {countries.map((country) => (
                <button
                  key={country}
                  onClick={() => setSelectedCountry(country)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    selectedCountry === country
                      ? "bg-blue-600 text-white"
                      : "bg-blue-50 text-blue-900 hover:bg-blue-100"
                  }`}
                >
                  {country === "all" ? "All Countries" : country}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map((story, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow overflow-hidden">
                <div className="relative h-48 bg-gradient-to-br from-blue-100 to-blue-50">
                  <ImageWithFallback
                    src={story.photo}
                    alt={story.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    {story.country}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl text-blue-900 mb-2">{story.name}</h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <GraduationCap className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">{story.course}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">{story.university}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">Class of {story.year}</span>
                    </div>
                    <div className="flex items-center gap-2 text-blue-600">
                      <Award className="w-4 h-4" />
                      <span className="text-sm">{story.achievement}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm italic">"{story.story}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Yearly Placements */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-blue-900 mb-4">
              Placement Statistics
            </h2>
            <p className="text-xl text-gray-600">
              Year-by-year breakdown of our success
            </p>
          </div>

          <Tabs defaultValue="2024" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="2024">2024</TabsTrigger>
              <TabsTrigger value="2023">2023</TabsTrigger>
              <TabsTrigger value="2022">2022</TabsTrigger>
            </TabsList>
            
            {Object.entries(placementStats).map(([year, stats]) => (
              <TabsContent key={year} value={year} className="mt-8">
                <div className="grid md:grid-cols-4 gap-6">
                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="text-4xl text-blue-600 mb-2">{stats.totalStudents}</div>
                      <div className="text-gray-600">Total Students</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="text-4xl text-blue-600 mb-2">{stats.countries.length}</div>
                      <div className="text-gray-600">Countries</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="text-4xl text-blue-600 mb-2">{stats.topUniversities}</div>
                      <div className="text-gray-600">Top 50 Unis</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="text-4xl text-blue-600 mb-2">{stats.scholarships}</div>
                      <div className="text-gray-600">Scholarships</div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-blue-900 mb-4">
              Celebration Moments
            </h2>
            <p className="text-xl text-gray-600">
              Capturing the joy of success
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1760348082270-3a46a3512850?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWNjZXNzZnVsJTIwc3R1ZGVudCUyMGNlbGVicmF0aW5nfGVufDF8fHx8MTc3NDc4Nzc4OXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Students celebrating"
                className="w-full h-full object-cover hover:scale-105 transition-transform"
              />
            </div>
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1735613981597-78903fbe4156?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwYWJyb2FkJTIwZ3JhZHVhdGlvbnxlbnwxfHx8fDE3NzQ3ODc3ODh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Graduation celebration"
                className="w-full h-full object-cover hover:scale-105 transition-transform"
              />
            </div>
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1648301033733-44554c74ec50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwaW50ZXJuYXRpb25hbCUyMHN0dWRlbnRzfGVufDF8fHx8MTc3NDc4Nzc4OHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Campus life"
                className="w-full h-full object-cover hover:scale-105 transition-transform"
              />
            </div>
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758928807847-ed94f9ed3cad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXNzcG9ydCUyMHZpc2ElMjB0cmF2ZWwlMjBkb2N1bWVudHN8ZW58MXx8fHwxNzc0Nzg3Nzg5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Travel documents"
                className="w-full h-full object-cover hover:scale-105 transition-transform"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            Be Our Next Success Story
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of successful students who turned their study abroad dreams into reality with Nobal Navigator.
          </p>
          <a href="/book">
            <button className="bg-white text-blue-900 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
              Start Your Journey Today
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}
