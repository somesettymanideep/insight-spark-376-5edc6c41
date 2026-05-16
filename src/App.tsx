import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Contact from "./pages/Contact.tsx";
import About from "./pages/About.tsx";
import Team from "./pages/Team.tsx";
import Careers from "./pages/Careers.tsx";
import Manufacturing from "./pages/Manufacturing.tsx";
import Logistics from "./pages/Logistics.tsx";
import Staffing from "./pages/Staffing.tsx";
import Healthcare from "./pages/Healthcare.tsx";
import Finance from "./pages/Finance.tsx";
import Energy from "./pages/Energy.tsx";
import Retail from "./pages/Retail.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/industries/manufacturing" element={<Manufacturing />} />
          <Route path="/industries/logistics" element={<Logistics />} />
          <Route path="/industries/staffing" element={<Staffing />} />
          <Route path="/industries/healthcare" element={<Healthcare />} />
          <Route path="/industries/financial-services" element={<Finance />} />
          <Route path="/industries/energy" element={<Energy />} />
          <Route path="/industries/retail" element={<Retail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
