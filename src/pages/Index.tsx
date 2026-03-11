import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Reviews from "@/components/Reviews";
import Community from "@/components/Community";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Dr. Geffrey Klein | OBGYN & Obesity Medicine | Webster, TX</title>
        <meta name="description" content="Board-certified OBGYN and obesity medicine specialist providing comprehensive women's health and weight management in Clear Lake and Webster, Texas." />
        <link rel="canonical" href="https://geffreyklein.com/" />
        <meta property="og:title" content="Dr. Geffrey Klein | OBGYN & Obesity Medicine | Webster, TX" />
        <meta property="og:description" content="Board-certified OBGYN and obesity medicine specialist providing comprehensive women's health and weight management in Clear Lake and Webster, Texas." />
        <meta property="og:url" content="https://geffreyklein.com/" />
      </Helmet>
      <Header />
      <Hero />
      <About />
      <Services />
      <Reviews />
      <Community />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
