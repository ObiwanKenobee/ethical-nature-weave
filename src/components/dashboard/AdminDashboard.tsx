
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, LineChart, Users, Shield, Settings, ShieldAlert } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export function AdminDashboard() {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold tracking-tight">Welcome back, {user?.name}</h2>
        <p className="text-muted-foreground">
          Manage the Guardian-IO platform and oversee all system operations.
        </p>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="users">User Management</TabsTrigger>
          <TabsTrigger value="verifications">Verifications</TabsTrigger>
          <TabsTrigger value="system">System</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,284</div>
                <p className="text-xs text-muted-foreground">
                  +12% growth this month
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Verifications</CardTitle>
                <Shield className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">842</div>
                <p className="text-xs text-muted-foreground">
                  28 pending approval
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">System Load</CardTitle>
                <Settings className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24%</div>
                <p className="text-xs text-muted-foreground">
                  All systems operating normally
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Security Alerts</CardTitle>
                <ShieldAlert className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">0</div>
                <p className="text-xs text-muted-foreground">
                  No security issues detected
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Platform Analytics</CardTitle>
                <CardDescription>User activity and system performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[250px] rounded-md border border-dashed flex items-center justify-center">
                  <LineChart className="h-8 w-8 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest platform events</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {[1, 2, 3, 4, 5].map(i => (
                    <div key={i} className="flex items-center gap-2 p-2 border-b last:border-0">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <div>
                        <div className="text-sm">New brand verification request</div>
                        <div className="text-xs text-muted-foreground">2 minutes ago</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="users" className="h-[400px] flex items-center justify-center border rounded-md">
          <div className="text-center">
            <Users className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
            <h3 className="text-lg font-medium mb-2">User Management</h3>
            <p className="text-muted-foreground mb-4">Manage users, roles and permissions</p>
            <Button>View All Users</Button>
          </div>
        </TabsContent>

        <TabsContent value="verifications" className="h-[400px] flex items-center justify-center border rounded-md">
          <div className="text-center">
            <Shield className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
            <h3 className="text-lg font-medium mb-2">Verification Management</h3>
            <p className="text-muted-foreground mb-4">Review and approve Guardian-IO verifications</p>
            <Button>View Verification Queue</Button>
          </div>
        </TabsContent>

        <TabsContent value="system" className="h-[400px] flex items-center justify-center border rounded-md">
          <div className="text-center">
            <Settings className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
            <h3 className="text-lg font-medium mb-2">System Settings</h3>
            <p className="text-muted-foreground mb-4">Configure platform settings and maintenance</p>
            <Button>Access System Controls</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
