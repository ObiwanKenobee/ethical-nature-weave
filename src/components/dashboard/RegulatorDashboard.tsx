
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, LineChart, ShieldAlert } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export function RegulatorDashboard() {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold tracking-tight">Welcome back, {user?.name}</h2>
        <p className="text-muted-foreground">
          Monitor compliance and ethical standards across the fashion industry.
        </p>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="audits">Audits</TabsTrigger>
          <TabsTrigger value="risk-analysis">Risk Analysis</TabsTrigger>
          <TabsTrigger value="wildlife">Wildlife Protection</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Audits</CardTitle>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">14</div>
                <p className="text-xs text-muted-foreground">
                  3 high-priority
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Risk Alerts</CardTitle>
                <ShieldAlert className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2</div>
                <p className="text-xs text-muted-foreground">
                  Down from 5 last month
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Industry Compliance</CardTitle>
                <BarChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">76%</div>
                <p className="text-xs text-muted-foreground">
                  +8% from previous quarter
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid gap-4 md:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Risk Heatmap</CardTitle>
                <CardDescription>Wildlife crime risk areas in supply chains</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[250px] rounded-md border border-dashed flex items-center justify-center">
                  <p className="text-muted-foreground">Supply Chain Risk Heatmap</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Compliance Alerts</CardTitle>
                <CardDescription>Recent issues requiring attention</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="flex items-center gap-2 p-2 border rounded-md">
                      <div className="w-2 h-2 rounded-full bg-red-500"></div>
                      <div className="flex-1">
                        <div className="font-medium">Supply Chain Irregularity</div>
                        <div className="text-xs text-muted-foreground">Region {i} • Detected 2 days ago</div>
                      </div>
                      <Button size="sm" variant="outline">Investigate</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="audits" className="h-[400px] flex items-center justify-center border rounded-md">
          <div className="text-center">
            <h3 className="text-lg font-medium mb-2">Supply Chain Audits</h3>
            <p className="text-muted-foreground mb-4">Monitor and verify ethical compliance</p>
            <Button>View Active Audits</Button>
          </div>
        </TabsContent>

        <TabsContent value="risk-analysis" className="h-[400px] flex items-center justify-center border rounded-md">
          <div className="text-center">
            <ShieldAlert className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
            <h3 className="text-lg font-medium mb-2">Risk Analysis</h3>
            <p className="text-muted-foreground mb-4">AI-powered detection of potential wildlife crime risks</p>
            <Button>Open Risk Dashboard</Button>
          </div>
        </TabsContent>

        <TabsContent value="wildlife" className="h-[400px] flex items-center justify-center border rounded-md">
          <div className="text-center">
            <h3 className="text-lg font-medium mb-2">Wildlife Protection</h3>
            <p className="text-muted-foreground mb-4">Monitor conservation impacts across the fashion industry</p>
            <Button>View Protection Initiatives</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
