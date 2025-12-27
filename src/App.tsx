import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Industries from "./pages/Industries";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Surveying from "./pages/services/Surveying";
import InteriorDesign from "./pages/services/InteriorDesign";
import Construction from "./pages/services/Construction";
import Landscape from "./pages/services/Landscape";
import CoastalInfrastructure from "./pages/services/CoastalInfrastructure";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<PrivacyPolicy />} />
          <Route path="/services/surveying" element={<Surveying />} />
          <Route path="/services/interior-design" element={<InteriorDesign />} />
          <Route path="/services/construction" element={<Construction />} />
          <Route path="/services/landscape" element={<Landscape />} />
          <Route path="/services/coastal-infrastructure" element={<CoastalInfrastructure />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
