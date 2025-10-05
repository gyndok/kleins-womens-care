import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";
import heroImage from "@/assets/doctor-hero.jpg";
const Hero = () => {
  return <section className="relative min-h-[600px] flex items-center overflow-hidden">
      <div className="absolute inset-0 opacity-95" style={{
      background: 'var(--hero-gradient)'
    }} />
      <div className="absolute inset-0">
        <img src={heroImage} alt="Dr. Geffrey H. Klein" className="w-full h-full object-cover object-center mix-blend-overlay opacity-30" />
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-4">
            Geffrey H. Klein, MD, FACOG
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-3">
            Board Certified Obstetrics and Gynecology
          </p>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-3">
            Board Certified Obesity Medicine
          </p>
          <p className="text-lg text-primary-foreground/80 mb-8 italic">
            Taking care of women through all stages of life
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            
            
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;