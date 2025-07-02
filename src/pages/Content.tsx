
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Heart, MessageCircle, Share2, Search, Filter, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";

const Content = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Stories", "Articles", "Photos", "Videos", "Reviews"];

  const content = [
    {
      title: "My Journey Through Freshman Year",
      excerpt: "Reflecting on the challenges, friendships, and growth during my first year at BITS...",
      author: "Priya Sharma",
      category: "Stories",
      date: "2 days ago",
      likes: 45,
      comments: 12,
      image: "photo-1581091226825-a6a2a5aee158",
      readTime: "5 min read"
    },
    {
      title: "Building Our Award-Winning Robot",
      excerpt: "How our team developed an innovative solution for the national robotics competition...",
      author: "Arjun Patel",
      category: "Articles",
      date: "5 days ago",
      likes: 78,
      comments: 23,
      image: "photo-1518770660439-4636190af475",
      readTime: "8 min read"
    },
    {
      title: "Campus Life in Pictures",
      excerpt: "A visual journey through the most beautiful moments captured around our campus...",
      author: "Sneha Kumar",
      category: "Photos",
      date: "1 week ago",
      likes: 156,
      comments: 34,
      image: "photo-1439886183900-e79ec0057170",
      readTime: "3 min read"
    },
    {
      title: "Tech Symposium Highlights",
      excerpt: "Key takeaways and inspiring moments from this year's technology conference...",
      author: "Rahul Singh",
      category: "Articles",
      date: "1 week ago",
      likes: 92,
      comments: 18,
      image: "photo-1461749280684-dccba630e2f6",
      readTime: "6 min read"
    },
    {
      title: "Life at BITS: A Senior's Perspective",
      excerpt: "Four years of memories, lessons learned, and advice for incoming students...",
      author: "Ananya Gupta",
      category: "Stories",
      date: "2 weeks ago",
      likes: 203,
      comments: 45,
      image: "photo-1581092795360-fd1ca04f0952",
      readTime: "10 min read"
    },
    {
      title: "Cultural Night 2024 Recap",
      excerpt: "An amazing celebration of diversity with performances from students worldwide...",
      author: "Vikram Reddy",
      category: "Reviews",
      date: "2 weeks ago",
      likes: 134,
      comments: 28,
      image: "photo-1466442929976-97f336a657be",
      readTime: "4 min read"
    }
  ];

  const filteredContent = content.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      <Navigation />
      
      <div className="py-8 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Student Content</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover inspiring stories, articles, and creative content from the BITS community
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search content..."
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

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContent.map((item, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="h-48 relative overflow-hidden">
                <img
                  src={`https://images.unsplash.com/${item.image}?w=400&h=200&fit=crop`}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary">{item.category}</Badge>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{item.title}</h3>
                <p className="text-gray-600 mb-4 text-sm line-clamp-3">{item.excerpt}</p>
                
                <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">{item.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{item.readTime}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                  <span>{item.date}</span>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Heart className="h-4 w-4" />
                      <span>{item.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="h-4 w-4" />
                      <span>{item.comments}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button className="flex-1 bg-purple-600 hover:bg-purple-700">
                    Read More
                  </Button>
                  <Button variant="outline" size="sm">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No content found matching your search.</p>
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

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <Card className="p-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
            <h2 className="text-2xl font-bold mb-4">Share Your Story</h2>
            <p className="text-lg mb-6 opacity-90">
              Have an inspiring story or interesting article to share with the BITS community?
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
              Submit Content
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Content;
