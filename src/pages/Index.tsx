
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Users, FileText, Megaphone, Search, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeatureCards from "@/components/FeatureCards";
import RecentActivity from "@/components/RecentActivity";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navigation />
      <HeroSection />
      <FeatureCards />
      <RecentActivity />
      
      {/* Quick Actions Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Actions</h2>
          <p className="text-lg text-gray-600">Get started with BITS Engage</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link to="/clubs">
            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer border-l-4 border-l-blue-500">
              <div className="flex items-center space-x-3">
                <Users className="h-8 w-8 text-blue-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Find Clubs</h3>
                  <p className="text-sm text-gray-600">Discover new interests</p>
                </div>
              </div>
            </Card>
          </Link>
          
          <Link to="/events">
            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer border-l-4 border-l-green-500">
              <div className="flex items-center space-x-3">
                <Calendar className="h-8 w-8 text-green-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">View Events</h3>
                  <p className="text-sm text-gray-600">See what's happening</p>
                </div>
              </div>
            </Card>
          </Link>
          
          <Link to="/content">
            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer border-l-4 border-l-purple-500">
              <div className="flex items-center space-x-3">
                <FileText className="h-8 w-8 text-purple-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Read Stories</h3>
                  <p className="text-sm text-gray-600">Student content</p>
                </div>
              </div>
            </Card>
          </Link>
          
          <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer border-l-4 border-l-orange-500">
            <div className="flex items-center space-x-3">
              <Plus className="h-8 w-8 text-orange-600" />
              <div>
                <h3 className="font-semibold text-gray-900">Submit Content</h3>
                <p className="text-sm text-gray-600">Share your story</p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
