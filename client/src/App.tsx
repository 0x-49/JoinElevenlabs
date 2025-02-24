import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/about";
import Careers from "@/pages/careers";
import Blog from "@/pages/blog";
import Press from "@/pages/press";
import Terms from "@/pages/terms";
import Privacy from "@/pages/privacy";
import Cookies from "@/pages/cookies";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/Footer";

function Router() {
  return (
    <div className="relative min-h-screen">
      <Navigation />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/careers" component={Careers} />
        <Route path="/blog" component={Blog} />
        <Route path="/press" component={Press} />
        <Route path="/terms" component={Terms} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/cookies" component={Cookies} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;