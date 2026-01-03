import { Toaster } from "@/components/ui/sonner";
import ScrollToTop from "@/components/ScrollToTop";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetail from "@/pages/ServiceDetail";
import LocalLanding from "@/pages/LocalLanding";
import ProblemDetail from "./pages/ProblemDetail";
import Comparisons from "./pages/Comparisons";
import ComparisonDetail from "./pages/ComparisonDetail";
import Locations from "./pages/Locations";
import LocationDetail from "./pages/LocationDetail";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Science from "./pages/Science";
import Book from "./pages/Book";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import FirstTimeOffer from "./pages/FirstTimeOffer";
import Quiz from "./pages/Quiz";
import Memberships from "./pages/Memberships";
import Pricing from "./pages/Pricing";
import MembershipSignup from "./pages/MembershipSignup";
import AdminDashboard from "./pages/AdminDashboard";
import Layout from "./components/Layout";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"}  component={Home} />
      <Route path={"/services"} component={Services} />
       <Route path="/service/:id" component={ServiceDetail} />
      <Route path={"/problem/:id"} component={ProblemDetail} />
      <Route path={"/comparisons"} component={Comparisons} />
      <Route path={"/comparison/:slug"} component={ComparisonDetail} />
      <Route path={"/locations"} component={Locations} />
      <Route path={"/location/:id"} component={LocationDetail} />
      <Route path={"/blog"} component={Blog} />
      <Route path={"/blog/:slug"} component={BlogPost} />
      <Route path={"/science"} component={Science} />
      <Route path={"/book"} component={Book} />
      <Route path={"/about"} component={About} />
      <Route path={"/faq"} component={FAQ} />
      <Route path={"quiz"} component={Quiz} />
      <Route path={"memberships"} component={Memberships} />
      <Route path={"pricing"} component={Pricing} />
      <Route path={"contact"} component={Contact} />
      <Route path="/membership/:id" component={MembershipSignup} />
      <Route path="/admin" component={() => <Layout><AdminDashboard /></Layout>} />
      <Route path={"/first-time-offer"} component={FirstTimeOffer} />
      <Route path={"/404"} component={NotFound} />
      
      {/* Dynamic route for local landing pages (e.g. /cryotherapy-dublin, /iv-drip-easton) */}
      {/* Must be near the end to avoid intercepting other top-level routes */}
      <Route path="/:slug" component={LocalLanding} />

      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <ScrollToTop />
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
