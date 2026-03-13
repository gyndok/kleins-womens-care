import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import WeightLoss from "./pages/WeightLoss";
import Videos from "./pages/Videos";
import Appointment from "./pages/Appointment";
import ConsentForms from "./pages/ConsentForms";
import PatientEducation from "./pages/PatientEducation";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/weight-loss" element={<WeightLoss />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/consent-forms" element={<ConsentForms />} />
          <Route path="/patient-education" element={<PatientEducation />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </HelmetProvider>
);

export default App;
