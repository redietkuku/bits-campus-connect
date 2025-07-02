
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Calendar, FileText, Megaphone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FeatureCards = () => {
  const features = [
    {
      icon: Users,
      title: "Club Directory",
      description: "Browse and discover student clubs with detailed information, contact details, and member counts.",
      color: "primary",
      link: "/clubs",
      stats: "50+ Active Clubs"
    },
    {
      icon: Calendar,
      title: "Event Calendar",
      description: "Stay updated with upcoming events, RSVP to activities, and never miss important campus happenings.",
      color: "green",
      link: "/events",
      stats: "Weekly Events"
    },
    {
      icon: FileText,
      title: "Student Content",
      description: "Read inspiring stories, articles, and multimedia content created by fellow students.",
      color: "purple",
      link: "/content",
      stats: "200+ Stories"
    },
    {
      icon: Megaphone,
      title: "Announcements",
      description: "Get verified updates and important announcements from college administration and clubs.",
      color: "orange",
      link: "/announcements",
      stats: "Daily Updates"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: {
        bg: "bg-brand-primary/10",
        icon: "text-brand-primary",
        button: "bg-brand-primary hover:bg-brand-primary/90",
        border: "border-brand-primary/20"
      },
      green: {
        bg: "bg-green-50",
        icon: "text-green-600",
        button: "bg-green-600 hover:bg-green-700",
        border: "border-green-200"
      },
      purple: {
        bg: "bg-purple-50",
        icon: "text-purple-600",
        button: "bg-purple-600 hover:bg-purple-700",
        border: "border-purple-200"
      },
      orange: {
        bg: "bg-orange-50",
        icon: "text-orange-600",
        button: "bg-orange-600 hover:bg-orange-700",
        border: "border-orange-200"
      }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-brand-text mb-4">Everything You Need</h2>
        <p className="text-xl text-brand-text/70 max-w-2xl mx-auto">
          Comprehensive tools to enhance your campus experience and stay connected with the BITS community.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          const colors = getColorClasses(feature.color);
          
          return (
            <Card 
              key={index} 
              className={`p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 ${colors.bg} ${colors.border} border-2`}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <Icon className={`h-8 w-8 ${colors.icon}`} />
                </div>
                <h3 className="text-xl font-semibold text-brand-text mb-3">{feature.title}</h3>
                <p className="text-brand-text/70 mb-4 text-sm leading-relaxed">{feature.description}</p>
                <div className="text-sm font-medium text-brand-text/60 mb-4">{feature.stats}</div>
                <Link to={feature.link}>
                  <Button 
                    className={`w-full ${colors.button} text-white font-medium rounded-full transition-all duration-300 hover:shadow-lg`}
                    size="sm"
                  >
                    Explore
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default FeatureCards;
