
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, LineChart, PieChart } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export function ConsumerDashboard() {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold tracking-tight">Welcome back, {user?.name}</h2>
        <p className="text-muted-foreground">
          Track your sustainable fashion impact and explore ethical products.
        </p>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="products">My Products</TabsTrigger>
          <TabsTrigger value="impact">My Impact</TabsTrigger>
          <TabsTrigger value="community">Community</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Products Tracked</CardTitle>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                  +3 New
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">
                  All with verified ethical supply chains
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Carbon Offset</CardTitle>
                <BarChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3.2 tons</div>
                <p className="text-xs text-muted-foreground">
                  +12% from last month
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Wildlife Protected</CardTitle>
                <LineChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24 species</div>
                <p className="text-xs text-muted-foreground">
                  Through your ethical purchases
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Recommended for You</CardTitle>
                <CardDescription>Sustainable fashion matching your style</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6].map(i => (
                    <div key={i} className="rounded-md overflow-hidden bg-muted h-32 flex items-center justify-center">
                      <span className="text-muted-foreground">Product {i}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Supply Chain Impact</CardTitle>
                <CardDescription>Your contribution to ethical fashion</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex h-[180px] items-center justify-center rounded-md border border-dashed">
                  <PieChart className="h-8 w-8 text-muted-foreground" />
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2 text-sm">
                  <div className="flex flex-col">
                    <span className="font-medium">Ethical Labor</span>
                    <span className="text-xs text-muted-foreground">78%</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium">Wildlife Safe</span>
                    <span className="text-xs text-muted-foreground">100%</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium">Carbon Neutral</span>
                    <span className="text-xs text-muted-foreground">92%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="products" className="h-[400px] flex items-center justify-center border rounded-md">
          <div className="text-center">
            <h3 className="text-lg font-medium mb-2">Your Tracked Products</h3>
            <p className="text-muted-foreground mb-4">Track and verify your ethical fashion purchases</p>
            <Button>View All Products</Button>
          </div>
        </TabsContent>

        <TabsContent value="impact" className="h-[400px] flex items-center justify-center border rounded-md">
          <div className="text-center">
            <h3 className="text-lg font-medium mb-2">Your Sustainability Impact</h3>
            <p className="text-muted-foreground mb-4">See how your choices are making a difference</p>
            <Button>View Impact Report</Button>
          </div>
        </TabsContent>

        <TabsContent value="community" className="h-[400px] flex items-center justify-center border rounded-md">
          <div className="text-center">
            <h3 className="text-lg font-medium mb-2">Ethical Fashion Community</h3>
            <p className="text-muted-foreground mb-4">Connect with like-minded ethical shoppers</p>
            <Button>Browse Community</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
