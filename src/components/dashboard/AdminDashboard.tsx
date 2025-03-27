
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart, 
  LineChart, 
  Users, 
  Shield, 
  Settings, 
  ShieldAlert, 
  Globe, 
  FileCheck, 
  Zap, 
  Database,
  AlertTriangle,
  Check,
  Activity,
  Network,
  Store,
  FileSearch,
  BarChart3,
  Leaf,
  Award,
  Bot,
  Lock
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent 
} from "@/components/ui/chart";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell 
} from "recharts";

export function AdminDashboard() {
  const { user } = useAuth();

  // Demo data for charts
  const trendData = [
    { name: "Jan", value: 65 },
    { name: "Feb", value: 59 },
    { name: "Mar", value: 80 },
    { name: "Apr", value: 81 },
    { name: "May", value: 56 },
    { name: "Jun", value: 55 },
    { name: "Jul", value: 78 },
    { name: "Aug", value: 82 },
    { name: "Sep", value: 88 },
  ];

  const pieData = [
    { name: "Compliant", value: 72 },
    { name: "At Risk", value: 18 },
    { name: "Non-Compliant", value: 10 },
  ];

  const COLORS = ["#10B981", "#FBBF24", "#EF4444"];

  // Recent supply chain verifications
  const verifications = [
    { id: 1, brand: "EcoWear Apparel", material: "Organic Cotton", region: "India", status: "verified", score: 92, date: "2 days ago" },
    { id: 2, brand: "Pure Style", material: "Recycled Polyester", region: "Vietnam", status: "at risk", score: 68, date: "1 day ago" },
    { id: 3, brand: "Green Earth Textiles", material: "Hemp Fabric", region: "China", status: "verified", score: 89, date: "3 days ago" },
    { id: 4, brand: "Conscious Couture", material: "Vegan Leather", region: "Mexico", status: "verified", score: 94, date: "5 hours ago" },
    { id: 5, brand: "Wildlife Friendly Co.", material: "Responsible Wool", region: "Australia", status: "pending", score: 75, date: "1 hour ago" },
  ];

  // Risk alerts
  const riskAlerts = [
    { id: 1, severity: "high", title: "Potential Wildlife Trafficking", region: "Southeast Asia", details: "Anomalous sourcing pattern detected", time: "3 hours ago" },
    { id: 2, severity: "medium", title: "Unusual Supply Chain Activity", region: "Central Africa", details: "Verification inconsistency", time: "1 day ago" },
    { id: 3, severity: "high", title: "Suspected Material Misrepresentation", region: "Eastern Europe", details: "Testing results mismatch", time: "4 hours ago" },
  ];

  // User management data
  const users = [
    { id: 1, name: "Sophia Chen", role: "Brand", status: "active", riskScore: "low", lastActive: "2 hours ago" },
    { id: 2, name: "James Wilson", role: "Supplier", status: "active", riskScore: "medium", lastActive: "1 day ago" },
    { id: 3, name: "Emma Rodriguez", role: "Regulator", status: "active", riskScore: "low", lastActive: "5 hours ago" },
    { id: 4, name: "Michael Thompson", role: "Brand", status: "suspended", riskScore: "high", lastActive: "10 days ago" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold tracking-tight">Welcome back, {user?.name}</h2>
        <p className="text-muted-foreground">
          Manage the Guardian-IO platform and oversee all system operations for wildlife protection and ethical fashion.
        </p>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid w-full md:w-auto md:inline-flex grid-cols-2 md:grid-cols-none gap-1 md:gap-0">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="supply-chain">Supply Chain</TabsTrigger>
          <TabsTrigger value="users">User Management</TabsTrigger>
          <TabsTrigger value="intelligence">Intelligence Hub</TabsTrigger>
          <TabsTrigger value="marketplace">Marketplace</TabsTrigger>
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
                <CardTitle className="text-sm font-medium">Ethical Score Avg.</CardTitle>
                <Award className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">85%</div>
                <p className="text-xs text-muted-foreground">
                  +6% from last quarter
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Security Alerts</CardTitle>
                <ShieldAlert className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-muted-foreground">
                  High priority issues detected
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid gap-4 grid-cols-1 md:grid-cols-6">
            <Card className="col-span-1 md:col-span-4">
              <CardHeader>
                <CardTitle>Ethical Verification Trend</CardTitle>
                <CardDescription>Supply chain verification volume and success rate</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={trendData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="name" />
                      <YAxis />
                      <CartesianGrid strokeDasharray="3 3" />
                      <Tooltip />
                      <Area type="monotone" dataKey="value" stroke="#8884d8" fillOpacity={1} fill="url(#colorValue)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card className="col-span-1 md:col-span-2">
              <CardHeader>
                <CardTitle>Supply Chain Compliance</CardTitle>
                <CardDescription>Overall ethical compliance status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex justify-center gap-6 mt-4">
                  {pieData.map((entry, index) => (
                    <div key={`legend-${index}`} className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                      <span className="text-sm">{entry.name}: {entry.value}%</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid gap-4 md:grid-cols-7">
            <Card className="col-span-full md:col-span-4">
              <CardHeader>
                <CardTitle>Recent Verifications</CardTitle>
                <CardDescription>Latest Guardian-IO verification activities</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Brand/Supplier</TableHead>
                      <TableHead>Material</TableHead>
                      <TableHead>Ethical Score</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {verifications.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.brand}</TableCell>
                        <TableCell>{item.material}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                              <div 
                                className={`h-2.5 rounded-full ${
                                  item.score >= 90 ? 'bg-green-600' : 
                                  item.score >= 70 ? 'bg-yellow-400' : 
                                  'bg-red-600'
                                }`} 
                                style={{ width: `${item.score}%` }}></div>
                            </div>
                            <span className="text-xs">{item.score}%</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            item.status === 'verified' ? 'bg-green-100 text-green-800' : 
                            item.status === 'at risk' ? 'bg-yellow-100 text-yellow-800' : 
                            'bg-blue-100 text-blue-800'
                          }`}>
                            {item.status}
                          </span>
                        </TableCell>
                        <TableCell>
                          <Button size="sm" variant="outline">View Details</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            
            <Card className="col-span-full md:col-span-3">
              <CardHeader>
                <CardTitle>Risk Alerts</CardTitle>
                <CardDescription>Wildlife protection and compliance alerts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {riskAlerts.map(alert => (
                    <div 
                      key={alert.id} 
                      className={`p-4 rounded-lg border ${
                        alert.severity === 'high' ? 'border-red-200 bg-red-50' : 
                        alert.severity === 'medium' ? 'border-yellow-200 bg-yellow-50' : 
                        'border-blue-200 bg-blue-50'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`mt-0.5 p-1.5 rounded-full ${
                          alert.severity === 'high' ? 'bg-red-100 text-red-600' : 
                          alert.severity === 'medium' ? 'bg-yellow-100 text-yellow-600' : 
                          'bg-blue-100 text-blue-600'
                        }`}>
                          <AlertTriangle className="h-4 w-4" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-semibold">{alert.title}</h4>
                            <span className="text-xs text-muted-foreground">{alert.time}</span>
                          </div>
                          <p className="text-sm mt-1">{alert.details}</p>
                          <div className="flex items-center mt-2 text-xs text-muted-foreground">
                            <Globe className="h-3 w-3 mr-1" />
                            {alert.region}
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2 mt-3">
                        <Button size="sm" variant="outline" className="text-xs h-8">Investigate</Button>
                        <Button size="sm" variant="outline" className="text-xs h-8">Dismiss</Button>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full">View All Alerts</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="supply-chain" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="col-span-full md:col-span-1">
              <CardHeader>
                <CardTitle>Ethical Supply Chain Hub</CardTitle>
                <CardDescription>AI-powered verification tools</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg border bg-card p-4 hover:bg-accent/50 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Zap className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Ethical Score Tracker</h3>
                      <p className="text-xs text-muted-foreground">Live monitoring of supply chains</p>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="text-sm font-medium mb-1">System Status</div>
                    <div className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-1.5 mr-2">
                        <div className="bg-green-500 h-1.5 rounded-full" style={{ width: "93%" }}></div>
                      </div>
                      <span className="text-xs font-medium">93%</span>
                    </div>
                  </div>
                </div>
                
                <div className="rounded-lg border bg-card p-4 hover:bg-accent/50 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Bot className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">AI Risk Detection</h3>
                      <p className="text-xs text-muted-foreground">Predicts ethical violations</p>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="flex items-center justify-between text-sm">
                      <span>Active monitoring</span>
                      <span className="text-green-600 font-medium flex items-center">
                        <Check className="h-3 w-3 mr-1" /> Online
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="rounded-lg border bg-card p-4 hover:bg-accent/50 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-full bg-primary/10">
                      <FileCheck className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Compliance Reports</h3>
                      <p className="text-xs text-muted-foreground">One-click ESG reporting</p>
                    </div>
                  </div>
                  <div className="mt-2 text-sm">
                    <span className="text-muted-foreground">17 reports generated today</span>
                  </div>
                </div>
                
                <div className="rounded-lg border bg-card p-4 hover:bg-accent/50 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Lock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Blockchain Verification</h3>
                      <p className="text-xs text-muted-foreground">Immutable supply chain records</p>
                    </div>
                  </div>
                  <div className="mt-2 text-sm">
                    <span className="font-medium">1,432</span>
                    <span className="text-muted-foreground ml-1">verified transactions today</span>
                  </div>
                </div>
                
                <Button className="w-full">Launch Verification Center</Button>
              </CardContent>
            </Card>
            
            <Card className="col-span-full md:col-span-2">
              <CardHeader>
                <CardTitle>Supply Chain Verification Dashboard</CardTitle>
                <CardDescription>Monitor and approve ethical verification requests</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-5">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-1 bg-green-50 rounded-lg p-4 border border-green-100">
                      <div className="flex flex-col items-center">
                        <Check className="h-8 w-8 text-green-600 mb-2" />
                        <div className="text-2xl font-bold">127</div>
                        <div className="text-sm text-green-800">Verified Chains</div>
                      </div>
                    </div>
                    
                    <div className="col-span-1 bg-yellow-50 rounded-lg p-4 border border-yellow-100">
                      <div className="flex flex-col items-center">
                        <Activity className="h-8 w-8 text-yellow-600 mb-2" />
                        <div className="text-2xl font-bold">48</div>
                        <div className="text-sm text-yellow-800">Pending Verification</div>
                      </div>
                    </div>
                    
                    <div className="col-span-1 bg-red-50 rounded-lg p-4 border border-red-100">
                      <div className="flex flex-col items-center">
                        <AlertTriangle className="h-8 w-8 text-red-600 mb-2" />
                        <div className="text-2xl font-bold">12</div>
                        <div className="text-sm text-red-800">At-Risk Chains</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <div className="p-4 bg-muted/30 border-b">
                      <h3 className="font-medium">Pending Verifications</h3>
                    </div>
                    <div className="p-0">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Request ID</TableHead>
                            <TableHead>Brand</TableHead>
                            <TableHead>Material</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Action</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-mono text-xs">#VER-23981</TableCell>
                            <TableCell>Eco Collection Co.</TableCell>
                            <TableCell>Sustainable Bamboo</TableCell>
                            <TableCell>
                              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">Pending</span>
                            </TableCell>
                            <TableCell>
                              <div className="flex gap-2">
                                <Button size="sm" className="h-7 text-xs">Approve</Button>
                                <Button size="sm" variant="outline" className="h-7 text-xs">Review</Button>
                              </div>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-mono text-xs">#VER-23980</TableCell>
                            <TableCell>Nature First Apparel</TableCell>
                            <TableCell>Organic Cotton</TableCell>
                            <TableCell>
                              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">Pending</span>
                            </TableCell>
                            <TableCell>
                              <div className="flex gap-2">
                                <Button size="sm" className="h-7 text-xs">Approve</Button>
                                <Button size="sm" variant="outline" className="h-7 text-xs">Review</Button>
                              </div>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-mono text-xs">#VER-23979</TableCell>
                            <TableCell>Green Path Textiles</TableCell>
                            <TableCell>Recycled Polyester</TableCell>
                            <TableCell>
                              <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">Review Required</span>
                            </TableCell>
                            <TableCell>
                              <div className="flex gap-2">
                                <Button size="sm" className="h-7 text-xs">Approve</Button>
                                <Button size="sm" variant="outline" className="h-7 text-xs">Review</Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                    <div className="p-4 border-t flex justify-center">
                      <Button variant="outline" size="sm">View All Verifications</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="users" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Advanced User Management</CardTitle>
              <CardDescription>Monitor and manage users by impact, behavior, and ethical score</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg border overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Risk Score</TableHead>
                      <TableHead>Last Active</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users.map(user => (
                      <TableRow key={user.id}>
                        <TableCell className="font-medium">{user.name}</TableCell>
                        <TableCell>{user.role}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            user.status === 'active' ? 'bg-green-100 text-green-800' : 
                            'bg-red-100 text-red-800'
                          }`}>
                            {user.status}
                          </span>
                        </TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            user.riskScore === 'low' ? 'bg-green-100 text-green-800' : 
                            user.riskScore === 'medium' ? 'bg-yellow-100 text-yellow-800' : 
                            'bg-red-100 text-red-800'
                          }`}>
                            {user.riskScore}
                          </span>
                        </TableCell>
                        <TableCell>{user.lastActive}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" className="h-7 text-xs">View</Button>
                            <Button size="sm" variant="outline" className="h-7 text-xs">Edit Role</Button>
                            {user.status === 'active' ? (
                              <Button size="sm" variant="outline" className="h-7 text-xs text-red-600 hover:text-red-700">Suspend</Button>
                            ) : (
                              <Button size="sm" variant="outline" className="h-7 text-xs text-green-600 hover:text-green-700">Activate</Button>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <div className="p-4 flex justify-between items-center border-t">
                  <div className="text-sm text-muted-foreground">Showing 4 of 1,284 users</div>
                  <Button variant="outline" size="sm">View All Users</Button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Role Distribution</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Consumers</span>
                        <span className="text-sm font-medium">712</span>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="bg-blue-500 h-full rounded-full" style={{ width: "55%" }}></div>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-sm">Brands</span>
                        <span className="text-sm font-medium">246</span>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="bg-green-500 h-full rounded-full" style={{ width: "19%" }}></div>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-sm">Suppliers</span>
                        <span className="text-sm font-medium">198</span>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="bg-amber-500 h-full rounded-full" style={{ width: "15%" }}></div>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-sm">Regulators</span>
                        <span className="text-sm font-medium">95</span>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="bg-purple-500 h-full rounded-full" style={{ width: "7%" }}></div>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-sm">Admins</span>
                        <span className="text-sm font-medium">33</span>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="bg-red-500 h-full rounded-full" style={{ width: "4%" }}></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="col-span-1 md:col-span-2">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">User Activity Monitoring</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center p-2 rounded-lg bg-muted/40 hover:bg-muted/60 transition-colors">
                        <div className="w-2 h-2 rounded-full bg-green-500 mr-3"></div>
                        <div className="flex-1">
                          <div className="text-sm">New brand registered: Urban Eco Styles</div>
                          <div className="text-xs text-muted-foreground">10 minutes ago</div>
                        </div>
                        <Button size="sm" variant="ghost" className="text-xs h-7">View</Button>
                      </div>
                      
                      <div className="flex items-center p-2 rounded-lg bg-muted/40 hover:bg-muted/60 transition-colors">
                        <div className="w-2 h-2 rounded-full bg-amber-500 mr-3"></div>
                        <div className="flex-1">
                          <div className="text-sm">Multiple failed login attempts: Supply Chain Partner</div>
                          <div className="text-xs text-muted-foreground">35 minutes ago</div>
                        </div>
                        <Button size="sm" variant="ghost" className="text-xs h-7">Investigate</Button>
                      </div>
                      
                      <div className="flex items-center p-2 rounded-lg bg-muted/40 hover:bg-muted/60 transition-colors">
                        <div className="w-2 h-2 rounded-full bg-blue-500 mr-3"></div>
                        <div className="flex-1">
                          <div className="text-sm">User role change: Eco Textiles → Brand Partner</div>
                          <div className="text-xs text-muted-foreground">2 hours ago</div>
                        </div>
                        <Button size="sm" variant="ghost" className="text-xs h-7">Review</Button>
                      </div>
                      
                      <div className="flex items-center p-2 rounded-lg bg-muted/40 hover:bg-muted/60 transition-colors">
                        <div className="w-2 h-2 rounded-full bg-red-500 mr-3"></div>
                        <div className="flex-1">
                          <div className="text-sm">User suspended: Potential Terms of Service violation</div>
                          <div className="text-xs text-muted-foreground">1 day ago</div>
                        </div>
                        <Button size="sm" variant="ghost" className="text-xs h-7">Details</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="intelligence" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Guardian-IO Intelligence Hub</CardTitle>
              <CardDescription>AI-powered analytics for wildlife protection and supply chain monitoring</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="col-span-2">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Wildlife Trafficking Risk Heatmap</CardTitle>
                      <CardDescription>Real-time global risk monitoring</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video rounded-md border border-dashed flex items-center justify-center p-6">
                        <Globe className="h-10 w-10 mr-4 text-muted-foreground" />
                        <div className="text-center">
                          <h3 className="font-medium mb-1">Global Wildlife Risk Monitoring</h3>
                          <p className="text-sm text-muted-foreground">Real-time heatmap tracking potential illegal trade hotspots</p>
                        </div>
                      </div>
                      <div className="flex justify-between mt-4">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                          <span className="text-xs">Low Risk</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                          <span className="text-xs">Medium Risk</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                          <span className="text-xs">High Risk</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                          <span className="text-xs">Critical</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="col-span-1">
                  <Card className="h-full">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">Predictive Risk Scoring</CardTitle>
                      <CardDescription>AI-powered risk assessment</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="p-3 border rounded-lg">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-medium text-sm">Southeast Asia</span>
                            <span className="text-xs text-red-600 font-medium">High Risk</span>
                          </div>
                          <div className="text-xs text-muted-foreground mb-2">Tigers, Pangolins, Exotic Leathers</div>
                          <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                            <div className="bg-red-500 h-full rounded-full" style={{ width: "85%" }}></div>
                          </div>
                          <div className="flex justify-between mt-1">
                            <span className="text-xs text-muted-foreground">Risk Score</span>
                            <span className="text-xs font-medium">85/100</span>
                          </div>
                        </div>
                        
                        <div className="p-3 border rounded-lg">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-medium text-sm">Central Africa</span>
                            <span className="text-xs text-yellow-600 font-medium">Medium Risk</span>
                          </div>
                          <div className="text-xs text-muted-foreground mb-2">Elephants, Primates, Exotic Woods</div>
                          <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                            <div className="bg-yellow-500 h-full rounded-full" style={{ width: "62%" }}></div>
                          </div>
                          <div className="flex justify-between mt-1">
                            <span className="text-xs text-muted-foreground">Risk Score</span>
                            <span className="text-xs font-medium">62/100</span>
                          </div>
                        </div>
                        
                        <div className="p-3 border rounded-lg">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-medium text-sm">South America</span>
                            <span className="text-xs text-red-600 font-medium">High Risk</span>
                          </div>
                          <div className="text-xs text-muted-foreground mb-2">Reptiles, Exotic Birds, Fur</div>
                          <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                            <div className="bg-red-500 h-full rounded-full" style={{ width: "78%" }}></div>
                          </div>
                          <div className="flex justify-between mt-1">
                            <span className="text-xs text-muted-foreground">Risk Score</span>
                            <span className="text-xs font-medium">78/100</span>
                          </div>
                        </div>
                        
                        <Button className="w-full">View All Risk Regions</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <div className="mt-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Deep Learning Analytics</CardTitle>
                    <CardDescription>AI-based illegal trade identification and reporting</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="p-4 rounded-lg border">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-4 rounded-lg bg-blue-50 border border-blue-100">
                          <div className="flex items-center mb-3">
                            <Bot className="h-5 w-5 text-blue-600 mr-2" />
                            <h3 className="font-medium">AI Detection</h3>
                          </div>
                          <p className="text-sm">Guardian-IO's AI has analyzed 24,562 supply chain transactions today, flagging 37 for potential review.</p>
                          <Button variant="outline" size="sm" className="mt-3 w-full">View AI Dashboard</Button>
                        </div>
                        
                        <div className="p-4 rounded-lg bg-purple-50 border border-purple-100">
                          <div className="flex items-center mb-3">
                            <BarChart3 className="h-5 w-5 text-purple-600 mr-2" />
                            <h3 className="font-medium">Ethical Trends</h3>
                          </div>
                          <p className="text-sm">Deep learning has identified a 24% improvement in overall wildlife protection compliance this quarter.</p>
                          <Button variant="outline" size="sm" className="mt-3 w-full">View Trend Analysis</Button>
                        </div>
                        
                        <div className="p-4 rounded-lg bg-green-50 border border-green-100">
                          <div className="flex items-center mb-3">
                            <Network className="h-5 w-5 text-green-600 mr-2" />
                            <h3 className="font-medium">Blockchain Security</h3>
                          </div>
                          <p className="text-sm">Smart contracts ensure immutable verification with 99.9% uptime and zero compromised transactions.</p>
                          <Button variant="outline" size="sm" className="mt-3 w-full">View Blockchain Status</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="marketplace" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Ethical Marketplace Oversight</CardTitle>
              <CardDescription>Monitor and manage verified products in the Guardian-IO marketplace</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2 mb-6">
                <div className="col-span-1 bg-green-50 rounded-lg p-4 border border-green-100">
                  <div className="flex flex-col items-center">
                    <Store className="h-8 w-8 text-green-600 mb-2" />
                    <div className="text-2xl font-bold">1,846</div>
                    <div className="text-sm text-green-800">Verified Products</div>
                  </div>
                </div>
                
                <div className="col-span-1 bg-blue-50 rounded-lg p-4 border border-blue-100">
                  <div className="flex flex-col items-center">
                    <Shield className="h-8 w-8 text-blue-600 mb-2" />
                    <div className="text-2xl font-bold">432</div>
                    <div className="text-sm text-blue-800">Certified Brands</div>
                  </div>
                </div>
                
                <div className="col-span-1 bg-yellow-50 rounded-lg p-4 border border-yellow-100">
                  <div className="flex flex-col items-center">
                    <FileSearch className="h-8 w-8 text-yellow-600 mb-2" />
                    <div className="text-2xl font-bold">58</div>
                    <div className="text-sm text-yellow-800">Pending Reviews</div>
                  </div>
                </div>
              </div>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Product Verification Queue</CardTitle>
                  <CardDescription>Products awaiting Guardian-IO certification</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Product</TableHead>
                        <TableHead>Brand</TableHead>
                        <TableHead>AI Screening</TableHead>
                        <TableHead>Material Check</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Sustainable Cotton Shirt</TableCell>
                        <TableCell>EcoWear Apparel</TableCell>
                        <TableCell>
                          <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Passed</span>
                        </TableCell>
                        <TableCell>
                          <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">Pending</span>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button size="sm" className="h-7 text-xs">Approve</Button>
                            <Button size="sm" variant="outline" className="h-7 text-xs">Reject</Button>
                            <Button size="sm" variant="outline" className="h-7 text-xs">View Details</Button>
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Recycled Denim Jeans</TableCell>
                        <TableCell>Pure Style</TableCell>
                        <TableCell>
                          <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Passed</span>
                        </TableCell>
                        <TableCell>
                          <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Verified</span>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button size="sm" className="h-7 text-xs">Approve</Button>
                            <Button size="sm" variant="outline" className="h-7 text-xs">Reject</Button>
                            <Button size="sm" variant="outline" className="h-7 text-xs">View Details</Button>
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Bamboo Fiber Dress</TableCell>
                        <TableCell>Green Earth Textiles</TableCell>
                        <TableCell>
                          <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">Failed</span>
                        </TableCell>
                        <TableCell>
                          <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">Pending</span>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" className="h-7 text-xs">Request Info</Button>
                            <Button size="sm" variant="outline" className="h-7 text-xs">Reject</Button>
                            <Button size="sm" variant="outline" className="h-7 text-xs">View Details</Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                  <div className="flex justify-center mt-4">
                    <Button variant="outline">View All Products</Button>
                  </div>
                </CardContent>
              </Card>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Sustainability Scoring</CardTitle>
                    <CardDescription>Environmental impact ratings</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <Leaf className="h-5 w-5 text-green-600 mr-3" />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Water Usage Efficiency</span>
                            <span className="text-xs font-medium">92%</span>
                          </div>
                          <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden mt-1">
                            <div className="bg-green-500 h-full rounded-full" style={{ width: "92%" }}></div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <Leaf className="h-5 w-5 text-green-600 mr-3" />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Carbon Footprint</span>
                            <span className="text-xs font-medium">78%</span>
                          </div>
                          <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden mt-1">
                            <div className="bg-green-500 h-full rounded-full" style={{ width: "78%" }}></div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <Leaf className="h-5 w-5 text-green-600 mr-3" />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Wildlife Protection Impact</span>
                            <span className="text-xs font-medium">94%</span>
                          </div>
                          <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden mt-1">
                            <div className="bg-green-500 h-full rounded-full" style={{ width: "94%" }}></div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <Leaf className="h-5 w-5 text-green-600 mr-3" />
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Ethical Labor Standards</span>
                            <span className="text-xs font-medium">86%</span>
                          </div>
                          <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden mt-1">
                            <div className="bg-green-500 h-full rounded-full" style={{ width: "86%" }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button className="w-full mt-4">Adjust Scoring Algorithms</Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Dispute Resolution</CardTitle>
                    <CardDescription>Manage reports from stakeholders</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="p-3 rounded-lg border">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-sm">Material Verification Challenge</span>
                          <span className="text-xs text-amber-600 font-medium">Medium Priority</span>
                        </div>
                        <p className="text-xs text-muted-foreground mb-3">Consumer reports suspicious leather material in "Vegan" product line</p>
                        <div className="flex justify-between">
                          <span className="text-xs text-muted-foreground">Filed by: Consumer protection alliance</span>
                          <span className="text-xs text-muted-foreground">2 days ago</span>
                        </div>
                        <div className="flex gap-2 mt-3">
                          <Button size="sm" className="text-xs h-7">Investigate</Button>
                          <Button size="sm" variant="outline" className="text-xs h-7">Dismiss</Button>
                        </div>
                      </div>
                      
                      <div className="p-3 rounded-lg border">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-sm">Labor Standards Complaint</span>
                          <span className="text-xs text-red-600 font-medium">High Priority</span>
                        </div>
                        <p className="text-xs text-muted-foreground mb-3">NGO alleges labor violations in certified supply chain</p>
                        <div className="flex justify-between">
                          <span className="text-xs text-muted-foreground">Filed by: Workers Rights Organization</span>
                          <span className="text-xs text-muted-foreground">1 day ago</span>
                        </div>
                        <div className="flex gap-2 mt-3">
                          <Button size="sm" className="text-xs h-7">Investigate</Button>
                          <Button size="sm" variant="outline" className="text-xs h-7">Dismiss</Button>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full mt-4">View All Disputes</Button>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="system" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>System Controls</CardTitle>
              <CardDescription>Configure platform settings and manage system operations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="h-full">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">System Performance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm">CPU Usage</span>
                          <span className="text-xs font-medium">24%</span>
                        </div>
                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div className="bg-green-500 h-full rounded-full" style={{ width: "24%" }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm">Memory</span>
                          <span className="text-xs font-medium">42%</span>
                        </div>
                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div className="bg-green-500 h-full rounded-full" style={{ width: "42%" }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm">Storage</span>
                          <span className="text-xs font-medium">68%</span>
                        </div>
                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div className="bg-yellow-500 h-full rounded-full" style={{ width: "68%" }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm">Network</span>
                          <span className="text-xs font-medium">18%</span>
                        </div>
                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div className="bg-green-500 h-full rounded-full" style={{ width: "18%" }}></div>
                        </div>
                      </div>
                      
                      <div className="pt-2">
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                          <span className="text-sm">All Systems Operational</span>
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          Last checked: 2 minutes ago
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="col-span-2">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Automated Reporting & Compliance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border rounded-lg p-4 hover:bg-muted/30 transition-colors cursor-pointer">
                        <div className="flex items-center gap-3 mb-3">
                          <FileCheck className="h-5 w-5 text-primary" />
                          <div>
                            <h3 className="font-medium">ESG Reports</h3>
                            <p className="text-xs text-muted-foreground">One-click ESG reporting for brands and investors</p>
                          </div>
                        </div>
                        <Button size="sm" className="w-full">Generate Reports</Button>
                      </div>
                      
                      <div className="border rounded-lg p-4 hover:bg-muted/30 transition-colors cursor-pointer">
                        <div className="flex items-center gap-3 mb-3">
                          <Shield className="h-5 w-5 text-primary" />
                          <div>
                            <h3 className="font-medium">Wildlife Protection</h3>
                            <p className="text-xs text-muted-foreground">Compliance checks and violation alerts</p>
                          </div>
                        </div>
                        <Button size="sm" className="w-full">View Compliance</Button>
                      </div>
                      
                      <div className="border rounded-lg p-4 hover:bg-muted/30 transition-colors cursor-pointer">
                        <div className="flex items-center gap-3 mb-3">
                          <FileSearch className="h-5 w-5 text-primary" />
                          <div>
                            <h3 className="font-medium">Regulatory Filings</h3>
                            <p className="text-xs text-muted-foreground">Modern Slavery Act, SDG, CITES</p>
                          </div>
                        </div>
                        <Button size="sm" className="w-full">Manage Filings</Button>
                      </div>
                      
                      <div className="border rounded-lg p-4 hover:bg-muted/30 transition-colors cursor-pointer">
                        <div className="flex items-center gap-3 mb-3">
                          <Database className="h-5 w-5 text-primary" />
                          <div>
                            <h3 className="font-medium">Data Insights</h3>
                            <p className="text-xs text-muted-foreground">Custom reports for policymakers & NGOs</p>
                          </div>
                        </div>
                        <Button size="sm" className="w-full">Generate Insights</Button>
                      </div>
                    </div>
                    
                    <div className="mt-4 p-4 rounded-lg bg-muted/30 border">
                      <h3 className="font-medium mb-2">Automated Reporting Schedule</h3>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Weekly Compliance Summary</span>
                          <span className="text-xs text-green-600">Active</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Monthly ESG Report</span>
                          <span className="text-xs text-green-600">Active</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Quarterly Regulatory Filing</span>
                          <span className="text-xs text-yellow-600">Pending</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="mt-3 w-full">Manage Schedule</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-6">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">System Maintenance</CardTitle>
                    <CardDescription>Security & optimization controls</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Button variant="outline" className="justify-start">
                        <Database className="mr-2 h-4 w-4" />
                        Database Optimization
                      </Button>
                      <Button variant="outline" className="justify-start">
                        <Lock className="mr-2 h-4 w-4" />
                        Security Audit
                      </Button>
                      <Button variant="outline" className="justify-start">
                        <Settings className="mr-2 h-4 w-4" />
                        System Settings
                      </Button>
                      <Button variant="outline" className="justify-start">
                        <Shield className="mr-2 h-4 w-4" />
                        Backup & Recovery
                      </Button>
                      <Button variant="outline" className="justify-start">
                        <Activity className="mr-2 h-4 w-4" />
                        Performance Monitoring
                      </Button>
                      <Button variant="outline" className="justify-start">
                        <Users className="mr-2 h-4 w-4" />
                        Admin Access Controls
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

