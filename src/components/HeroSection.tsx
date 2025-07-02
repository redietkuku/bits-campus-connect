
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Calendar, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-brand-text mb-6 animate-fade-in">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-brand-primary to-green-600 bg-clip-text text-transparent">
              BITS Engage
            </span>
          </h1>
          <p className="text-xl text-brand-text/80 mb-8 max-w-3xl mx-auto animate-fade-in">
            Your gateway to campus life. Discover clubs, join events, share stories, and connect with the BITS community like never before.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
            <Link to="/clubs">
              <Button size="lg" className="bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                Explore Clubs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/events">
              <Button size="lg" variant="outline" className="border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white font-semibold px-8 py-3 rounded-full transition-all duration-300">
                View Events
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-brand-primary" />
              </div>
              <h3 className="text-xl font-semibold text-brand-text mb-2">50+ Active Clubs</h3>
              <p className="text-brand-text/70">Find your passion and connect with like-minded students</p>
            </div>
            
            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-brand-text mb-2">Weekly Events</h3>
              <p className="text-brand-text/70">Never miss out on exciting campus activities</p>
            </div>
            
            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-brand-text mb-2">Student Stories</h3>
              <p className="text-brand-text/70">Share your experiences and inspire others</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
