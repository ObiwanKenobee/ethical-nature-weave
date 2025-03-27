
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart, 
  LineChart, 
  ShieldAlert, 
  Globe, 
  FileCheck, 
  Shield, 
  Database, 
  Activity,
  FileSearch,
  ChartLine
} from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useAuth } from "@/context/AuthContext";

export function RegulatorDashboard() {
  const { user } = useAuth();

  const riskRegions = [
    { id: 1, region: "Southeast Asia", riskLevel: "High", species: "Tigers, Pangolins", lastUpdate: "2 days ago" },
    { id: 2, region: "Central Africa", riskLevel: "Medium", species: "Elephants, Primates", lastUpdate: "5 days ago" },
    { id: 3, region: "South America", riskLevel: "High", species: "Reptiles, Exotic Birds", lastUpdate: "1 day ago" },
    { id: 4, region: "Eastern Europe", riskLevel: "Low", species: "Wolves, Bears", lastUpdate: "10 days ago" },
  ];

  const complianceAlerts = [
    { id: 1, title: "Supply Chain Irregularity", region: "Southeast Asia", detected: "2 days ago", severity: "high" },
    { id: 2, title: "Missing Documentation", region: "South America", detected: "3 days ago", severity: "medium" },
    { id: 3, title: "Suspicious Transaction Pattern", region: "Central Africa", detected: "1 day ago", severity: "high" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold tracking-tight">Welcome back, {user?.name}</h2>
        <p className="text-muted-foreground">
          Monitor compliance and ethical standards across the fashion industry with Guardian-IO's wildlife protection tools.
        </p>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="wildlife">Wildlife Protection</TabsTrigger>
          <TabsTrigger value="audits">Supply Chain Audits</TabsTrigger>
          <TabsTrigger value="risk-analysis">Risk Analysis</TabsTrigger>
          <TabsTrigger value="reports">Compliance Reports</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Audits</CardTitle>
                <FileSearch className="h-4 w-4 text-muted-foreground" />
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

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Protected Species</CardTitle>
                <Shield className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">42</div>
                <p className="text-xs text-muted-foreground">
                  Monitored in supply chains
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
                  <Globe className="h-8 w-8 mr-2 text-muted-foreground" />
                  <p className="text-muted-foreground">Global Wildlife Trafficking Hotspots</p>
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
                  {complianceAlerts.map(alert => (
                    <div key={alert.id} className="flex items-center gap-2 p-2 border rounded-md">
                      <div className={`w-2 h-2 rounded-full ${
                        alert.severity === 'high' ? 'bg-red-500' : 
                        alert.severity === 'medium' ? 'bg-amber-500' : 'bg-green-500'
                      }`}></div>
                      <div className="flex-1">
                        <div className="font-medium">{alert.title}</div>
                        <div className="text-xs text-muted-foreground">{alert.region} • Detected {alert.detected}</div>
                      </div>
                      <Button size="sm" variant="outline">Investigate</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="wildlife" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-8">
            <Card className="col-span-5">
              <CardHeader>
                <CardTitle>Wildlife Protection Monitoring</CardTitle>
                <CardDescription>AI-powered detection of endangered species in fashion supply chains</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] mb-6 rounded-md border border-dashed flex items-center justify-center">
                  <ChartLine className="h-8 w-8 mr-2 text-muted-foreground" />
                  <p className="text-muted-foreground">Wildlife Impact Trends</p>
                </div>
                
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Risk Region</TableHead>
                        <TableHead>Risk Level</TableHead>
                        <TableHead>Protected Species</TableHead>
                        <TableHead>Last Update</TableHead>
                        <TableHead>Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {riskRegions.map(region => (
                        <TableRow key={region.id}>
                          <TableCell className="font-medium">{region.region}</TableCell>
                          <TableCell>
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              region.riskLevel === 'High' ? 'bg-red-100 text-red-800' : 
                              region.riskLevel === 'Medium' ? 'bg-amber-100 text-amber-800' : 
                              'bg-green-100 text-green-800'
                            }`}>
                              {region.riskLevel}
                            </span>
                          </TableCell>
                          <TableCell>{region.species}</TableCell>
                          <TableCell>{region.lastUpdate}</TableCell>
                          <TableCell>
                            <Button size="sm" variant="outline">View Details</Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
            
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Wildlife Protection Tools</CardTitle>
                <CardDescription>Guardian-IO wildlife conservation features</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 rounded-md border bg-card hover:bg-accent/50 transition-colors cursor-pointer">
                  <div className="flex items-center mb-2">
                    <Database className="h-5 w-5 mr-2 text-primary" />
                    <h3 className="font-medium">Species Database</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Access the complete database of protected species and their status in fashion supply chains.</p>
                </div>
                
                <div className="p-4 rounded-md border bg-card hover:bg-accent/50 transition-colors cursor-pointer">
                  <div className="flex items-center mb-2">
                    <FileCheck className="h-5 w-5 mr-2 text-primary" />
                    <h3 className="font-medium">Compliance Reports</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Generate one-click compliance reports for regulators and conservation partners.</p>
                </div>
                
                <div className="p-4 rounded-md border bg-card hover:bg-accent/50 transition-colors cursor-pointer">
                  <div className="flex items-center mb-2">
                    <Activity className="h-5 w-5 mr-2 text-primary" />
                    <h3 className="font-medium">Risk Prediction</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">AI-powered predictions of potential wildlife trafficking risks in supply chains.</p>
                </div>
                
                <Button className="w-full">Launch Wildlife Protection Hub</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="audits" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Supply Chain Audits</CardTitle>
              <CardDescription>Monitor and verify ethical compliance across fashion supply chains</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] rounded-md border border-dashed flex flex-col items-center justify-center p-6">
                <FileSearch className="h-10 w-10 mb-4 text-muted-foreground" />
                <h3 className="text-lg font-medium mb-2">Supply Chain Audit Dashboard</h3>
                <p className="text-muted-foreground mb-4 text-center max-w-md">Access detailed audit reports, verify ethical compliance, and monitor supply chain transparency.</p>
                <Button>View Active Audits</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="risk-analysis" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Risk Analysis</CardTitle>
              <CardDescription>AI-powered detection of potential wildlife crime risks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] rounded-md border border-dashed flex flex-col items-center justify-center p-6">
                <ShieldAlert className="h-10 w-10 mb-4 text-muted-foreground" />
                <h3 className="text-lg font-medium mb-2">Risk Analysis Dashboard</h3>
                <p className="text-muted-foreground mb-4 text-center max-w-md">AI-powered detection of wildlife trafficking risks, ethical violations, and supply chain vulnerabilities.</p>
                <Button>Open Risk Dashboard</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Compliance Reports</CardTitle>
              <CardDescription>Generate and access wildlife protection compliance reports</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] rounded-md border border-dashed flex flex-col items-center justify-center p-6">
                <FileCheck className="h-10 w-10 mb-4 text-muted-foreground" />
                <h3 className="text-lg font-medium mb-2">Compliance Reporting</h3>
                <p className="text-muted-foreground mb-4 text-center max-w-md">Generate customized compliance reports for regulators, brands, and conservation partners.</p>
                <Button>Generate Reports</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
