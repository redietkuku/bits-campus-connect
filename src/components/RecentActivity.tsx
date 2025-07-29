
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Calendar, FileText } from "lucide-react";

const RecentActivity = () => {
  const activities = [
    {
      type: "event",
      title: "Tech Symposium 2024",
      description: "Annual technology conference by Computer Science Club",
      time: "2 hours ago",
      participants: 156,
      status: "happening"
    },
    {
      type: "club",
      title: "Photography Club",
      description: "New members welcomed with orientation session",
      time: "5 hours ago",
      participants: 24,
      status: "active"
    },
    {
      type: "content",
      title: "Campus Life Chronicles",
      description: "Student shares experience about freshman year",
      time: "1 day ago",
      participants: 89,
      status: "featured"
    },
    {
      type: "announcement",
      title: "Semester Break Schedule",
      description: "Important dates and campus facility timings",
      time: "2 days ago",
      participants: 124,
      status: "important"
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "event": return Calendar;
      case "club": return Users;
      case "content": return FileText;
      default: return Clock;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "happening": return "bg-green-100 text-green-800";
      case "active": return "bg-brand-primary/10 text-brand-primary";
      case "featured": return "bg-purple-100 text-purple-800";
      case "important": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-brand-text mb-4">Recent Activity</h2>
        <p className="text-lg text-brand-text/70">Stay updated with the latest happenings on campus</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {activities.map((activity, index) => {
          const Icon = getIcon(activity.type);
          
          return (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-l-brand-primary">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon className="h-6 w-6 text-brand-primary" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-brand-text truncate">{activity.title}</h3>
                    <Badge className={getStatusColor(activity.status)}>
                      {activity.status}
                    </Badge>
                  </div>
                  
                  <p className="text-brand-text/70 mb-3 text-sm">{activity.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-brand-text/60">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{activity.time}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{activity.participants} engaged</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default RecentActivity;
