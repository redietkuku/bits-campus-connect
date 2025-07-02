
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Megaphone, Calendar, AlertCircle, Info, CheckCircle, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";

const Announcements = () => {
  const announcements = [
    {
      title: "Semester Break Schedule",
      content: "Important information regarding campus facilities and timings during the upcoming semester break. Library hours will be reduced, and some facilities will be temporarily closed.",
      author: "Academic Office",
      date: "2 hours ago",
      priority: "high",
      category: "Academic",
      read: false
    },
    {
      title: "New Student Orientation Program",
      content: "Welcome session for incoming students scheduled for next month. All current students are encouraged to participate as mentors and help new students settle in.",
      author: "Student Affairs",
      date: "5 hours ago",
      priority: "medium",
      category: "Events",
      read: true
    },
    {
      title: "Library System Maintenance",
      content: "The digital library system will undergo scheduled maintenance this weekend. Services may be temporarily unavailable between 2 AM and 6 AM on Saturday.",
      author: "IT Department",
      date: "1 day ago",
      priority: "medium",
      category: "Technical",
      read: false
    },
    {
      title: "Scholarship Application Deadline",
      content: "Reminder: Merit-based scholarship applications are due by the end of this month. Don't miss this opportunity to apply for financial assistance for the next academic year.",
      author: "Financial Aid Office",
      date: "2 days ago",
      priority: "high",
      category: "Academic",
      read: true
    },
    {
      title: "Campus Safety Guidelines Update",
      content: "Updated safety protocols and guidelines for campus activities. Please review the new procedures and ensure compliance for everyone's safety and well-being.",
      author: "Security Office",
      date: "3 days ago",
      priority: "high",
      category: "Safety",
      read: false
    },
    {
      title: "Research Symposium Call for Papers",
      content: "Annual research symposium is accepting paper submissions from undergraduate and graduate students. Showcase your research work and contribute to academic excellence.",
      author: "Research Committee",
      date: "1 week ago",
      priority: "low",
      category: "Academic",
      read: true
    },
    {
      title: "New Food Court Opening",
      content: "Exciting news! A new food court with diverse cuisine options will be opening next month in the student center. Stay tuned for the grand opening announcement.",
      author: "Campus Services",
      date: "1 week ago",
      priority: "low",
      category: "Campus Life",
      read: true
    },
    {
      title: "Wi-Fi Network Upgrade Complete",
      content: "The campus-wide Wi-Fi infrastructure upgrade has been completed successfully. Students should experience improved connectivity and faster internet speeds.",
      author: "IT Department",
      date: "2 weeks ago",
      priority: "medium",
      category: "Technical",
      read: true
    }
  ];

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "high": return <AlertCircle className="h-5 w-5 text-red-600" />;
      case "medium": return <Info className="h-5 w-5 text-yellow-600" />;
      case "low": return <CheckCircle className="h-5 w-5 text-green-600" />;
      default: return <Info className="h-5 w-5 text-gray-600" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-red-100 text-red-800 border-red-200";
      case "medium": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "low": return "bg-green-100 text-green-800 border-green-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      "Academic": "bg-blue-100 text-blue-800",
      "Events": "bg-purple-100 text-purple-800",
      "Technical": "bg-gray-100 text-gray-800",
      "Safety": "bg-red-100 text-red-800",
      "Campus Life": "bg-green-100 text-green-800"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100">
      <Navigation />
      
      <div className="py-8 px-4 max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
              <Megaphone className="h-8 w-8 text-orange-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Official Announcements</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay informed with the latest updates and important notices from BITS administration
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="p-4 text-center">
            <div className="text-2xl font-bold text-red-600 mb-1">
              {announcements.filter(a => a.priority === 'high').length}
            </div>
            <div className="text-sm text-gray-600">High Priority</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-2xl font-bold text-yellow-600 mb-1">
              {announcements.filter(a => a.priority === 'medium').length}
            </div>
            <div className="text-sm text-gray-600">Medium Priority</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-600 mb-1">
              {announcements.filter(a => !a.read).length}
            </div>
            <div className="text-sm text-gray-600">Unread</div>
          </Card>
          <Card className="p-4 text-center">
            <div className="text-2xl font-bold text-gray-600 mb-1">
              {announcements.length}
            </div>
            <div className="text-sm text-gray-600">Total</div>
          </Card>
        </div>

        {/* Announcements List */}
        <div className="space-y-4">
          {announcements.map((announcement, index) => (
            <Card 
              key={index} 
              className={`p-6 hover:shadow-lg transition-all duration-300 ${
                !announcement.read ? 'border-l-4 border-l-orange-500 bg-orange-50/50' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-3">
                  {getPriorityIcon(announcement.priority)}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {announcement.title}
                      {!announcement.read && (
                        <span className="ml-2 w-2 h-2 bg-orange-500 rounded-full inline-block"></span>
                      )}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      {announcement.content}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Badge className={getPriorityColor(announcement.priority)}>
                    {announcement.priority.toUpperCase()} PRIORITY
                  </Badge>
                  <Badge className={getCategoryColor(announcement.category)}>
                    {announcement.category}
                  </Badge>
                </div>
                
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{announcement.date}</span>
                  </div>
                  <span className="font-medium">{announcement.author}</span>
                </div>
              </div>

              {!announcement.read && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <Button size="sm" variant="outline">
                    Mark as Read
                  </Button>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <Card className="p-6 bg-orange-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Stay Connected</h3>
            <p className="text-gray-600 mb-4">
              Never miss important updates by enabling notifications for BITS Engage
            </p>
            <Button className="bg-orange-600 hover:bg-orange-700">
              Enable Notifications
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
