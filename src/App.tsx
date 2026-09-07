import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";

const WeightLoss = lazy(() => import("./pages/WeightLoss"));
const Videos = lazy(() => import("./pages/Videos"));
const Appointment = lazy(() => import("./pages/Appointment"));
const ConsentForms = lazy(() => import("./pages/ConsentForms"));
const PatientEducation = lazy(() => import("./pages/PatientEducation"));
const PregnancyCalculator = lazy(() => import("./pages/PregnancyCalculator"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<div className="min-h-screen" />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/weight-loss" element={<WeightLoss />} />
              <Route path="/videos" element={<Videos />} />
              <Route path="/appointment" element={<Appointment />} />
              <Route path="/consent-forms" element={<ConsentForms />} />
              <Route path="/patient-education" element={<PatientEducation />} />
              <Route path="/pregnancy-calculator" element={<PregnancyCalculator />} />

              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
