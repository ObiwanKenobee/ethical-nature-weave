
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ConsumerDashboard } from "@/components/dashboard/ConsumerDashboard";
import { BrandDashboard } from "@/components/dashboard/BrandDashboard";
import { SupplierDashboard } from "@/components/dashboard/SupplierDashboard";
import { RegulatorDashboard } from "@/components/dashboard/RegulatorDashboard";
import { AdminDashboard } from "@/components/dashboard/AdminDashboard";
import { LoginForm } from "@/components/auth/LoginForm";
import { useAuth } from "@/context/AuthContext";
import { ShieldAlert } from "lucide-react";

export default function Dashboard() {
  const { user, isLoading } = useAuth();
  const navigate = useNavigate();

  // Redirect to login tab if not authenticated
  useEffect(() => {
    if (!isLoading && !user) {
      navigate("/journal?tab=dashboard");
    }
  }, [user, isLoading, navigate]);

  // Render different dashboard based on user role
  const renderDashboard = () => {
    if (!user) return null;

    switch (user.role) {
      case "consumer":
        return <ConsumerDashboard />;
      case "brand":
        return <BrandDashboard />;
      case "supplier":
        return <SupplierDashboard />;
      case "regulator":
        return <RegulatorDashboard />;
      case "admin":
        return <AdminDashboard />;
      default:
        return <div>Unknown user role</div>;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-8">
          {user ? (
            renderDashboard()
          ) : (
            <div className="max-w-md mx-auto text-center py-12">
              <ShieldAlert className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <h2 className="text-2xl font-bold mb-2">Authentication Required</h2>
              <p className="text-muted-foreground mb-4">
                Please log in to access your dashboard
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
