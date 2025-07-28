
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Users, Mail, Filter } from "lucide-react";
import Navigation from "@/components/Navigation";

const Clubs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [joinedClubs, setJoinedClubs] = useState<string[]>([]);
const [joinMessage, setJoinMessage] = useState<string | null>(null);


  const categories = ["All", "Technology", "Arts", "Sports", "Academic", "Social"];

  const clubs = [
    {
      name: "Computer Science Club",
      description: "Fostering innovation and technical excellence through coding competitions, hackathons, and tech talks.",
      category: "Technology",
      members: 156,
      email: "cs-club@bits.edu",
      image: "photo-1461749280684-dccba630e2f6",
      status: "Active"
    },
    {
      name: "Photography Society",
      description: "Capturing moments and memories while exploring the art of visual storytelling.",
      category: "Arts",
      members: 89,
      email: "photo@bits.edu",
      image: "photo-1439886183900-e79ec0057170",
      status: "Active"
    },
    {
      name: "Debate & Literary Society",
      description: "Enhancing communication skills through debates, discussions, and literary events.",
      category: "Academic",
      members: 67,
      email: "debate@bits.edu",
      image: "photo-1473177104440-ffee2f376098",
      status: "Active"
    },
    {
      name: "Robotics Club",
      description: "Building the future through innovative robotics projects and competitions.",
      category: "Technology",
      members: 134,
      email: "robotics@bits.edu",
      image: "photo-1518770660439-4636190af475",
      status: "Active"
    },
    {
      name: "Cultural Committee",
      description: "Organizing festivals, cultural events, and celebrating diversity on campus.",
      category: "Social",
      members: 203,
      email: "cultural@bits.edu",
      image: "photo-1466442929976-97f336a657be",
      status: "Active"
    },
    {
      name: "Music Club",
      description: "Harmonizing talents through musical performances, jam sessions, and concerts.",
      category: "Arts",
      members: 92,
      email: "music@bits.edu",
      image: "photo-1465146344425-f00d5f5c8f07",
      status: "Active"
    }
  ];

  const filteredClubs = clubs.filter(club => {
    const matchesSearch = club.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         club.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || club.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleJoinClub = (clubName: string) => {
    if (!joinedClubs.includes(clubName)) {
      setJoinedClubs([...joinedClubs, clubName]);
      setJoinMessage(`You are now a member of ${clubName}!`);
      setTimeout(() => setJoinMessage(null), 3000); // auto-dismiss
    }
  };
  
  const handleLeaveClub = (clubName: string) => {
    setJoinedClubs(joinedClubs.filter(name => name !== clubName));
  };
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navigation />
      
      <div className="py-8 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Student Clubs</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover your passion and connect with like-minded students across campus
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search clubs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="rounded-full"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredClubs.length} of {clubs.length} clubs
          </p>
        </div>

        {/* Clubs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClubs.map((club, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-500 relative overflow-hidden">
                <img
                  src={`https://images.unsplash.com/${club.image}?w=400&h=200&fit=crop`}
                  alt={club.name}
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white text-gray-900">{club.status}</Badge>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{club.name}</h3>
                  <Badge variant="outline">{club.category}</Badge>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm">{club.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2 text-gray-500">
                    <Users className="h-4 w-4" />
                    <span className="text-sm">{club.members} members</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-500">
                    <Mail className="h-4 w-4" />
                    <span className="text-sm">{club.email}</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
  {joinedClubs.includes(club.name) ? (
    <Button 
      className="flex-1 bg-gray-600 hover:bg-red-600"
      onClick={() => handleLeaveClub(club.name)}
    >
      Leave Club
    </Button>
  ) : (
    <Button 
      className="flex-1 bg-blue-600 hover:bg-blue-700"
      onClick={() => handleJoinClub(club.name)}
    >
      Join Club
    </Button>
  )}
  <Button variant="outline" className="flex-1">
    Learn More
  </Button>
</div>

              </div>
            </Card>
          ))}
        </div>

        {joinMessage && (
  <div className="text-center py-4">
    <p className="text-green-600 font-medium">{joinMessage}</p>
  </div>
)}


        {filteredClubs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No clubs found matching your criteria.</p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
              className="mt-4"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Clubs;
