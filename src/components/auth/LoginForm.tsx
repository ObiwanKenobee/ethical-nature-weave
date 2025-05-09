import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Check, Loader2, Mail, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";

// Login form schema
const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }),
});

// Signup form schema
const signupSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }),
  confirmPassword: z.string().min(8, { message: "Password must be at least 8 characters" }),
})
.refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

// Magic link schema
const magicLinkSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
});

type LoginFormProps = {
  onLoginSuccess?: () => void;
};

export function LoginForm({ onLoginSuccess }: LoginFormProps) {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { login, signUp, sendMagicLink, socialLogin, isLoading } = useAuth();
  const [magicLinkSent, setMagicLinkSent] = useState(false);
  
  // Login form
  const loginForm = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Signup form
  const signupForm = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  // Magic link form
  const magicLinkForm = useForm<z.infer<typeof magicLinkSchema>>({
    resolver: zodResolver(magicLinkSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onLoginSubmit(values: z.infer<typeof loginSchema>) {
    try {
      await login(values.email, values.password);
      
      // Call the onLoginSuccess callback if provided
      if (onLoginSuccess) {
        onLoginSuccess();
      } else {
        // Otherwise navigate to dashboard
        navigate("/dashboard");
      }
    } catch (error) {
      // Error is already handled in the auth context
      console.error(error);
    }
  }

  async function onSignupSubmit(values: z.infer<typeof signupSchema>) {
    try {
      await signUp(values.email, values.password, values.confirmPassword);
      
      // Call the onLoginSuccess callback if provided
      if (onLoginSuccess) {
        onLoginSuccess();
      } else {
        // Otherwise navigate to dashboard
        navigate("/dashboard");
      }
    } catch (error) {
      // Error is already handled in the auth context
      console.error(error);
    }
  }

  async function onMagicLinkSubmit(values: z.infer<typeof magicLinkSchema>) {
    try {
      await sendMagicLink(values.email);
      setMagicLinkSent(true);
    } catch (error) {
      // Error is already handled in the auth context
      console.error(error);
    }
  }

  async function handleSocialLogin(provider: string) {
    try {
      await socialLogin(provider);
      
      // Call the onLoginSuccess callback if provided
      if (onLoginSuccess) {
        onLoginSuccess();
      } else {
        // Otherwise navigate to dashboard
        navigate("/dashboard");
      }
    } catch (error) {
      // Error is already handled in the auth context
      console.error(error);
    }
  }

  return (
    <div className="mx-auto max-w-md w-full p-6 rounded-lg border border-border bg-card text-card-foreground shadow-sm">
      <h2 className="text-2xl font-bold mb-6 text-center">Access Your Dashboard</h2>
      
      <Alert className="mb-6">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          Use these demo accounts with password: <strong>password123</strong>
          <div className="grid grid-cols-1 mt-2 gap-1 text-xs">
            <div><strong>Consumer:</strong> consumer@example.com</div>
            <div><strong>Brand:</strong> brand@example.com</div>
            <div><strong>Supplier:</strong> supplier@example.com</div>
            <div><strong>Regulator:</strong> regulator@example.com</div>
            <div><strong>Admin:</strong> admin@example.com</div>
          </div>
        </AlertDescription>
      </Alert>
      
      <Tabs defaultValue="login" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="signup">Sign Up</TabsTrigger>
          <TabsTrigger value="magic">Magic Link</TabsTrigger>
        </TabsList>
        
        {/* Login Form */}
        <TabsContent value="login" className="space-y-4 animate-fade-in">
          <Form {...loginForm}>
            <form onSubmit={loginForm.handleSubmit(onLoginSubmit)} className="space-y-4">
              <FormField
                control={loginForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="your.email@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={loginForm.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="••••••••" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Logging in...
                  </>
                ) : (
                  "Login"
                )}
              </Button>
              
              <div className="flex justify-between text-sm">
                <Button variant="link" size="sm" className="px-0">Forgot password?</Button>
              </div>
            </form>
          </Form>
          
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <Button 
              variant="outline" 
              type="button" 
              className="w-full"
              onClick={() => handleSocialLogin("Google")}
              disabled={isLoading}
            >
              Google
            </Button>
            <Button 
              variant="outline" 
              type="button" 
              className="w-full"
              onClick={() => handleSocialLogin("Apple")}
              disabled={isLoading}
            >
              Apple
            </Button>
          </div>
        </TabsContent>
        
        {/* Signup Form */}
        <TabsContent value="signup" className="space-y-4 animate-fade-in">
          <Form {...signupForm}>
            <form onSubmit={signupForm.handleSubmit(onSignupSubmit)} className="space-y-4">
              <FormField
                control={signupForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="your.email@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={signupForm.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="••••••••" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={signupForm.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="••••••••" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating account...
                  </>
                ) : (
                  "Create Account"
                )}
              </Button>
            </form>
          </Form>
          
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <Button 
              variant="outline" 
              type="button" 
              className="w-full"
              onClick={() => handleSocialLogin("Google")}
              disabled={isLoading}
            >
              Google
            </Button>
            <Button 
              variant="outline" 
              type="button" 
              className="w-full"
              onClick={() => handleSocialLogin("Apple")}
              disabled={isLoading}
            >
              Apple
            </Button>
          </div>
        </TabsContent>
        
        {/* Magic Link Form */}
        <TabsContent value="magic" className="space-y-4 animate-fade-in">
          {magicLinkSent ? (
            <div className="text-center py-8 space-y-4">
              <div className="mx-auto bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Check className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium">Magic Link Sent!</h3>
              <p className="text-muted-foreground">
                Check your inbox for a login link. It will expire in 10 minutes.
              </p>
              <Button 
                variant="outline" 
                onClick={() => setMagicLinkSent(false)}
                className="mt-4"
              >
                Send a new link
              </Button>
            </div>
          ) : (
            <Form {...magicLinkForm}>
              <form onSubmit={magicLinkForm.handleSubmit(onMagicLinkSubmit)} className="space-y-4">
                <div className="text-center mb-6">
                  <div className="mx-auto bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-muted-foreground">
                    We'll email you a magic link for password-free sign in
                  </p>
                </div>
                
                <FormField
                  control={magicLinkForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="your.email@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending link...
                    </>
                  ) : (
                    "Send Magic Link"
                  )}
                </Button>
              </form>
            </Form>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
