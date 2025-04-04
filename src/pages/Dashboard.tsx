
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Award, BarChart, BookOpen, Gamepad, Mic, User } from "lucide-react";
import { Link } from "react-router-dom";

const courseProgress = [
  { id: 1, title: "Electrical Wiring Basics", progress: 75, modules: 8, completed: 6 },
  { id: 2, title: "HVAC Installation", progress: 40, modules: 10, completed: 4 },
  { id: 3, title: "Welding Safety", progress: 90, modules: 5, completed: 4 },
];

const achievements = [
  { id: 1, title: "Voice Master", description: "Completed 5 voice exercises", icon: Mic },
  { id: 2, title: "Quick Learner", description: "Finished a module in under 30 minutes", icon: BookOpen },
  { id: 3, title: "Perfect Score", description: "100% accuracy in an assessment", icon: Award },
];

const recommendedCourses = [
  { 
    id: 1, 
    title: "Plumbing Essentials", 
    description: "Learn fundamental plumbing skills and techniques",
    level: "Beginner",
    duration: "3 hours" 
  },
  { 
    id: 2, 
    title: "Automotive Electronics", 
    description: "Master modern vehicle electrical systems",
    level: "Intermediate",
    duration: "5 hours" 
  },
];

const Dashboard = () => {
  const [progress, setProgress] = useState(65);

  return (
    <div className="min-h-screen bg-background">
      {/* Header with user info */}
      <div className="bg-skillplay-purple/10 border-b">
        <div className="container mx-auto pt-24 pb-6 px-4 md:px-0">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 bg-skillplay-purple text-white rounded-full flex items-center justify-center text-xl font-bold">
                JS
              </div>
              <div>
                <h1 className="text-2xl font-bold">Welcome back, John!</h1>
                <p className="text-muted-foreground">Continue your learning journey</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" className="gap-2">
                <User className="h-4 w-4" />
                Profile
              </Button>
              <Button className="btn-gradient gap-2">
                <Gamepad className="h-4 w-4" />
                Start Learning
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Dashboard content */}
      <div className="container mx-auto py-8 px-4 md:px-0">
        <Tabs defaultValue="overview">
          <TabsList className="mb-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="courses">My Courses</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6">
            {/* Overall Progress */}
            <Card>
              <CardHeader>
                <CardTitle>Overall Progress</CardTitle>
                <CardDescription>Your learning journey across all courses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span className="font-medium">{progress}%</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="p-4 rounded-lg border bg-muted/50">
                    <div className="flex items-center gap-2 mb-1">
                      <BookOpen className="h-4 w-4 text-skillplay-purple" />
                      <span className="font-medium">Courses</span>
                    </div>
                    <p className="text-2xl font-bold">3</p>
                    <p className="text-xs text-muted-foreground">In progress</p>
                  </div>
                  
                  <div className="p-4 rounded-lg border bg-muted/50">
                    <div className="flex items-center gap-2 mb-1">
                      <Award className="h-4 w-4 text-skillplay-purple" />
                      <span className="font-medium">Achievements</span>
                    </div>
                    <p className="text-2xl font-bold">7</p>
                    <p className="text-xs text-muted-foreground">Earned</p>
                  </div>
                  
                  <div className="p-4 rounded-lg border bg-muted/50">
                    <div className="flex items-center gap-2 mb-1">
                      <Mic className="h-4 w-4 text-skillplay-purple" />
                      <span className="font-medium">Voice Sessions</span>
                    </div>
                    <p className="text-2xl font-bold">14</p>
                    <p className="text-xs text-muted-foreground">Total completed</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Course Progress */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Current Courses</CardTitle>
                  <CardDescription>Your active learning paths</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {courseProgress.map((course) => (
                      <div key={course.id} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="font-medium">{course.title}</span>
                          <span className="text-sm text-muted-foreground">
                            {course.completed}/{course.modules} modules
                          </span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                        <div className="flex justify-end">
                          <Button variant="ghost" size="sm" asChild>
                            <Link to="/course" className="text-xs flex gap-1 items-center text-skillplay-purple">
                              Continue <ArrowRight className="h-3 w-3" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Recent Achievements</CardTitle>
                  <CardDescription>Skills and milestones you've mastered</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {achievements.map((achievement) => (
                      <div key={achievement.id} className="flex items-start gap-3 p-3 rounded-lg border">
                        <div className="h-10 w-10 rounded-full bg-skillplay-purple/10 flex items-center justify-center text-skillplay-purple">
                          <achievement.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium">{achievement.title}</h4>
                          <p className="text-sm text-muted-foreground">{achievement.description}</p>
                        </div>
                      </div>
                    ))}
                    
                    <Button variant="outline" className="w-full mt-2">View All Achievements</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Recommended Courses */}
            <Card>
              <CardHeader>
                <CardTitle>Recommended for You</CardTitle>
                <CardDescription>Courses that match your interests and career path</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recommendedCourses.map((course) => (
                    <div key={course.id} className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-lg border">
                      <div>
                        <h4 className="font-medium text-lg">{course.title}</h4>
                        <p className="text-sm text-muted-foreground">{course.description}</p>
                        <div className="flex gap-3 mt-2">
                          <span className="text-xs bg-skillplay-purple/10 text-skillplay-purple px-2 py-1 rounded-full">
                            {course.level}
                          </span>
                          <span className="text-xs bg-muted px-2 py-1 rounded-full flex items-center gap-1">
                            <BarChart className="h-3 w-3" /> {course.duration}
                          </span>
                        </div>
                      </div>
                      <Button className="shrink-0">Enroll Now</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="courses">
            <Card className="p-6">
              <p>Your courses content would appear here.</p>
            </Card>
          </TabsContent>
          
          <TabsContent value="achievements">
            <Card className="p-6">
              <p>Your achievements content would appear here.</p>
            </Card>
          </TabsContent>
          
          <TabsContent value="analytics">
            <Card className="p-6">
              <p>Your learning analytics would appear here.</p>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
