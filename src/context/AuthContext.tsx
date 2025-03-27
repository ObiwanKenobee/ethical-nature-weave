
import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "sonner";

export type UserRole = "consumer" | "brand" | "supplier" | "regulator" | "admin";

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, confirmPassword: string) => Promise<void>;
  sendMagicLink: (email: string) => Promise<void>;
  logout: () => void;
  socialLogin: (provider: string) => Promise<void>;
}

// Demo accounts for each user role
const DEMO_USERS: Record<string, User> = {
  "consumer@example.com": {
    id: "consumer-1",
    email: "consumer@example.com",
    name: "Alex Consumer",
    role: "consumer",
    avatar: "/placeholder.svg",
  },
  "brand@example.com": {
    id: "brand-1",
    email: "brand@example.com",
    name: "Taylor Brand",
    role: "brand",
    avatar: "/placeholder.svg",
  },
  "supplier@example.com": {
    id: "supplier-1",
    email: "supplier@example.com",
    name: "Sam Supplier",
    role: "supplier",
    avatar: "/placeholder.svg",
  },
  "regulator@example.com": {
    id: "regulator-1",
    email: "regulator@example.com",
    name: "Riley Regulator",
    role: "regulator",
    avatar: "/placeholder.svg",
  },
  "admin@example.com": {
    id: "admin-1",
    email: "admin@example.com",
    name: "Andy Admin",
    role: "admin",
    avatar: "/placeholder.svg",
  },
};

// All demo accounts use the same password: "password123"
const DEMO_PASSWORD = "password123";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Check for stored user session on initial load
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Check if email exists in demo accounts
      const lowerCaseEmail = email.toLowerCase();
      const demoUser = DEMO_USERS[lowerCaseEmail];
      
      if (!demoUser || password !== DEMO_PASSWORD) {
        throw new Error("Invalid credentials");
      }
      
      // Store user in localStorage for persistence
      localStorage.setItem("user", JSON.stringify(demoUser));
      setUser(demoUser);
      
      toast.success(`Welcome back, ${demoUser.name}!`);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Login failed");
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signUp = async (email: string, password: string, confirmPassword: string) => {
    setIsLoading(true);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Validate password match
      if (password !== confirmPassword) {
        throw new Error("Passwords don't match");
      }
      
      // In a real app, you would create a new user here
      // For demo purposes, just use the consumer demo account
      const newUser: User = {
        id: `user-${Date.now()}`,
        email: email.toLowerCase(),
        name: email.split('@')[0],
        role: "consumer",
        avatar: "/placeholder.svg",
      };
      
      localStorage.setItem("user", JSON.stringify(newUser));
      setUser(newUser);
      
      toast.success("Account created successfully!");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Sign up failed");
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const sendMagicLink = async (email: string) => {
    setIsLoading(true);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success(`Magic link sent to ${email}`);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Failed to send magic link");
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    toast.info("You have been logged out");
  };

  const socialLogin = async (provider: string) => {
    setIsLoading(true);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, use a consumer account
      const demoUser = DEMO_USERS["consumer@example.com"];
      localStorage.setItem("user", JSON.stringify(demoUser));
      setUser(demoUser);
      
      toast.success(`Logged in with ${provider}!`);
    } catch (error) {
      toast.error(`${provider} login failed`);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, isLoading, login, signUp, sendMagicLink, logout, socialLogin }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
