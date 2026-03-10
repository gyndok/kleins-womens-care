import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import MochiHealth from "@/components/MochiHealth";
import Reviews from "@/components/Reviews";
import Community from "@/components/Community";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <MochiHealth />
      <Reviews />
      <Community />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
