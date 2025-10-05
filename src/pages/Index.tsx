import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import PatientEducation from "@/components/PatientEducation";
import Credentials from "@/components/Credentials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <PatientEducation />
      <Credentials />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
