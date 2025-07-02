
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users, Filter } from "lucide-react";
import Navigation from "@/components/Navigation";

const Events = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const filters = ["All", "This Week", "This Month", "Workshops", "Competitions", "Social"];

  const events = [
    {
      title: "Tech Symposium 2024",
      description: "Annual technology conference featuring industry leaders and student presentations",
      date: "March 15, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Main Auditorium",
      organizer: "Computer Science Club",
      attendees: 156,
      maxAttendees: 200,
      category: "Workshops",
      status: "Open",
      image: "photo-1461749280684-dccba630e2f6"
    },
    {
      title: "Photography Workshop",
      description: "Learn advanced techniques in portrait and landscape photography",
      date: "March 18, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Art Studio",
      organizer: "Photography Society",
      attendees: 24,
      maxAttendees: 30,
      category: "Workshops",
      status: "Open",
      image: "photo-1439886183900-e79ec0057170"
    },
    {
      title: "Coding Competition",
      description: "Test your programming skills in this exciting competitive coding event",
      date: "March 22, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Computer Lab A",
      organizer: "Robotics Club",
      attendees: 89,
      maxAttendees: 100,
      category: "Competitions",
      status: "Open",
      image: "photo-1518770660439-4636190af475"
    },
    {
      title: "Cultural Night",
      description: "Celebrate diversity with performances, food, and cultural exchange",
      date: "March 25, 2024",
      time: "6:00 PM - 10:00 PM",
      location: "Campus Grounds",
      organizer: "Cultural Committee",
      attendees: 234,
      maxAttendees: 300,
      category: "Social",
      status: "Open",
      image: "photo-1466442929976-97f336a657be"
    },
    {
      title: "Music Jam Session",
      description: "Open mic night for all music enthusiasts to showcase their talent",
      date: "March 28, 2024",
      time: "7:00 PM - 9:00 PM",
      location: "Music Room",
      organizer: "Music Club",
      attendees: 45,
      maxAttendees: 50,
      category: "Social",
      status: "Almost Full",
      image: "photo-1465146344425-f00d5f5c8f07"
    },
    {
      title: "Debate Championship",
      description: "Inter-club debate tournament on current affairs and social issues",
      date: "April 2, 2024",
      time: "1:00 PM - 6:00 PM",
      location: "Conference Hall",
      organizer: "Debate & Literary Society",
      attendees: 67,
      maxAttendees: 80,
      category: "Competitions",
      status: "Open",
      image: "photo-1473177104440-ffee2f376098"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open": return "bg-green-100 text-green-800";
      case "Almost Full": return "bg-yellow-100 text-yellow-800";
      case "Full": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const filteredEvents = events.filter(event => {
    if (selectedFilter === "All") return true;
    return event.category === selectedFilter;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100">
      <Navigation />
      
      <div className="py-8 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Campus Events</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join exciting events, workshops, and activities happening on campus
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="mb-8 flex items-center justify-center">
          <div className="flex items-center gap-4 flex-wrap">
            <Filter className="h-5 w-5 text-gray-500" />
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={selectedFilter === filter ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedFilter(filter)}
                className="rounded-full"
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="h-48 relative overflow-hidden">
                <img
                  src={`https://images.unsplash.com/${event.image}?w=400&h=200&fit=crop`}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className={getStatusColor(event.status)}>{event.status}</Badge>
                </div>
                <div className="absolute bottom-4 left-4">
                  <Badge variant="secondary">{event.category}</Badge>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{event.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600 text-sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Users className="h-4 w-4 mr-2" />
                    <span>{event.attendees}/{event.maxAttendees} attending</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-500">Organized by <span className="font-medium">{event.organizer}</span></p>
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    className="flex-1 bg-green-600 hover:bg-green-700"
                    disabled={event.status === "Full"}
                  >
                    {event.status === "Full" ? "Event Full" : "RSVP"}
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Details
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No events found for the selected filter.</p>
            <Button 
              variant="outline" 
              onClick={() => setSelectedFilter("All")}
              className="mt-4"
            >
              Show All Events
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
