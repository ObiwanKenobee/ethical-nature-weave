
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, LineChart, Upload } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export function BrandDashboard() {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold tracking-tight">Welcome back, {user?.name}</h2>
        <p className="text-muted-foreground">
          Manage your ethical product line and transparency initiatives.
        </p>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="verification">Guardian-IO Verification</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Products</CardTitle>
                <BarChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">47</div>
                <p className="text-xs text-muted-foreground">
                  42 verified by Guardian-IO
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Monthly Sales</CardTitle>
                <LineChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$12,594</div>
                <p className="text-xs text-muted-foreground">
                  +18% from last month
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Transparency Score</CardTitle>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground"><path d="m9 12 2 2 4-4"></path><circle cx="12" cy="12" r="10"></circle></svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">92%</div>
                <p className="text-xs text-muted-foreground">
                  Top 5% among all brands
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Pending Verifications</CardTitle>
                <CardDescription>Guardian-IO verification requests</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="flex items-center justify-between p-2 border rounded-md">
                      <div>
                        <div className="font-medium">Product #{i}</div>
                        <div className="text-xs text-muted-foreground">Submitted 2 days ago</div>
                      </div>
                      <Button size="sm" variant="outline">Review</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Recent Impact</CardTitle>
                <CardDescription>Environmental and social metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex h-[180px] items-center justify-center rounded-md border border-dashed">
                  <LineChart className="h-8 w-8 text-muted-foreground" />
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2 text-sm">
                  <div className="flex flex-col">
                    <span className="font-medium">CO₂ Reduced</span>
                    <span className="text-xs text-muted-foreground">18.3 tons</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium">Water Saved</span>
                    <span className="text-xs text-muted-foreground">4,200 L</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium">Fair Wages</span>
                    <span className="text-xs text-muted-foreground">100%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="products" className="h-[400px] flex items-center justify-center border rounded-md">
          <div className="text-center">
            <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
            <h3 className="text-lg font-medium mb-2">Product Management</h3>
            <p className="text-muted-foreground mb-4">Upload, edit and manage your ethical fashion products</p>
            <Button>Upload New Product</Button>
          </div>
        </TabsContent>

        <TabsContent value="verification" className="h-[400px] flex items-center justify-center border rounded-md">
          <div className="text-center">
            <h3 className="text-lg font-medium mb-2">Guardian-IO Verifications</h3>
            <p className="text-muted-foreground mb-4">Verify your supply chain with blockchain technology</p>
            <Button>Request New Verification</Button>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="h-[400px] flex items-center justify-center border rounded-md">
          <div className="text-center">
            <h3 className="text-lg font-medium mb-2">Sales & Impact Analytics</h3>
            <p className="text-muted-foreground mb-4">Track your brand's performance and sustainability impact</p>
            <Button>View Analytics</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
