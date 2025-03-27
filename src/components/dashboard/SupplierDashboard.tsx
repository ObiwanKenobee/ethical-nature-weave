
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, LineChart, Truck } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export function SupplierDashboard() {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold tracking-tight">Welcome back, {user?.name}</h2>
        <p className="text-muted-foreground">
          Manage your ethical supply chain operations and material tracking.
        </p>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="shipments">Shipments</TabsTrigger>
          <TabsTrigger value="materials">Materials</TabsTrigger>
          <TabsTrigger value="compliance">Compliance</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Shipments</CardTitle>
                <Truck className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8</div>
                <p className="text-xs text-muted-foreground">
                  3 awaiting verification
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Materials Logged</CardTitle>
                <BarChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">27</div>
                <p className="text-xs text-muted-foreground">
                  All with blockchain verification
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Compliance Score</CardTitle>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground"><path d="m9 12 2 2 4-4"></path><circle cx="12" cy="12" r="10"></circle></svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">98%</div>
                <p className="text-xs text-muted-foreground">
                  All certifications up to date
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Recent Shipments</CardTitle>
                <CardDescription>Track your material shipments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="flex items-center justify-between p-2 border rounded-md">
                      <div>
                        <div className="font-medium">Shipment #00{i}</div>
                        <div className="text-xs text-muted-foreground">Organic Cotton • Brand {i}</div>
                      </div>
                      <Button size="sm" variant="outline">Track</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Supply Chain Metrics</CardTitle>
                <CardDescription>Efficiency and sustainability performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex h-[180px] items-center justify-center rounded-md border border-dashed">
                  <LineChart className="h-8 w-8 text-muted-foreground" />
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2 text-sm">
                  <div className="flex flex-col">
                    <span className="font-medium">On-Time Delivery</span>
                    <span className="text-xs text-muted-foreground">94%</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium">Quality Rating</span>
                    <span className="text-xs text-muted-foreground">4.8/5</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium">Carbon Footprint</span>
                    <span className="text-xs text-muted-foreground">-12%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="shipments" className="h-[400px] flex items-center justify-center border rounded-md">
          <div className="text-center">
            <Truck className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
            <h3 className="text-lg font-medium mb-2">Shipment Management</h3>
            <p className="text-muted-foreground mb-4">Log and track ethical material shipments</p>
            <Button>Add New Shipment</Button>
          </div>
        </TabsContent>

        <TabsContent value="materials" className="h-[400px] flex items-center justify-center border rounded-md">
          <div className="text-center">
            <h3 className="text-lg font-medium mb-2">Materials Inventory</h3>
            <p className="text-muted-foreground mb-4">Manage your ethical materials with blockchain verification</p>
            <Button>Manage Inventory</Button>
          </div>
        </TabsContent>

        <TabsContent value="compliance" className="h-[400px] flex items-center justify-center border rounded-md">
          <div className="text-center">
            <h3 className="text-lg font-medium mb-2">Compliance Reports</h3>
            <p className="text-muted-foreground mb-4">Monitor and maintain ethical standards compliance</p>
            <Button>View Compliance Status</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
