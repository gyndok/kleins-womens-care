import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import AppointmentForm from "@/components/AppointmentForm";
import PatientEducation from "@/components/PatientEducation";
import Credentials from "@/components/Credentials";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <section id="appointment" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AppointmentForm />
          </div>
        </div>
      </section>
      <PatientEducation />
      <Credentials />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
