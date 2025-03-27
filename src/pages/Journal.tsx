
import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArticlePreview } from "@/components/journal/ArticlePreview";
import { LoginForm } from "@/components/auth/LoginForm";
import { useAuth } from "@/context/AuthContext";

// Mock data for journal articles
const articles = [
  {
    id: 1,
    title: "Sustainable Fashion in the Modern Era",
    excerpt: "How ethical fashion is changing the industry landscape and protecting wildlife...",
    image: "/placeholder.svg",
    category: "Sustainability",
    date: "May 15, 2023",
    author: "Emma Johnson",
  },
  {
    id: 2,
    title: "The Supply Chain Revolution",
    excerpt: "Blockchain technology is making supply chains more transparent than ever before...",
    image: "/placeholder.svg",
    category: "Technology",
    date: "April 22, 2023",
    author: "Michael Chen",
  },
  {
    id: 3,
    title: "Wildlife Conservation Through Fashion",
    excerpt: "How your clothing choices can directly impact wildlife conservation efforts globally...",
    image: "/placeholder.svg",
    category: "Conservation",
    date: "June 3, 2023",
    author: "Sarah Williams",
  },
];

export default function Journal() {
  const { user, logout } = useAuth();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const defaultTab = searchParams.get("tab") || "articles";

  // Function to handle login success - redirect to dashboard
  const handleLoginSuccess = () => {
    navigate("/dashboard");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-5xl mx-auto">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                Our Journal
              </span>
            </h1>
            
            <Tabs defaultValue={defaultTab} className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
                <TabsTrigger value="articles">Articles</TabsTrigger>
                <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              </TabsList>
              
              <TabsContent value="articles" className="space-y-8 animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {articles.map((article) => (
                    <ArticlePreview key={article.id} article={article} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="dashboard" className="animate-fade-in">
                {user ? (
                  <div className="p-6 rounded-lg border border-border bg-card text-card-foreground shadow-sm">
                    <h2 className="text-2xl font-bold mb-4">Welcome to your Dashboard, {user.name}</h2>
                    <p className="text-muted-foreground mb-4">
                      You are logged in as a <span className="font-semibold capitalize">{user.role}</span>.
                    </p>
                    <div className="flex gap-3">
                      <Button 
                        onClick={() => navigate("/dashboard")}
                        className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                      >
                        Go to Dashboard
                      </Button>
                      <Button 
                        variant="outline"
                        onClick={logout}
                      >
                        Sign Out
                      </Button>
                    </div>
                  </div>
                ) : (
                  <LoginForm onLoginSuccess={handleLoginSuccess} />
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
