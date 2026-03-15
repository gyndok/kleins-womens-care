import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/doctor-hero.jpg";
import heroBgTexture from "@/assets/generated/hero-bg-texture.png";

const Hero = () => {
  return (
    <section className="relative min-h-[500px] flex items-center overflow-hidden" style={{ background: "linear-gradient(135deg, #fff 0%, #e8e7e0 100%)" }}>
      <div className="absolute inset-0" style={{ backgroundImage: `url(${heroBgTexture})`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.25 }} />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text side */}
          <div className="flex-1 max-w-xl text-center md:text-center">
            <p
              className="text-sm font-semibold tracking-widest uppercase mb-3"
              style={{ color: "var(--teal)" }}
            >
              Women's Health & Weight Management
            </p>
            <h1
              className="text-4xl md:text-5xl font-bold leading-tight mb-4"
              style={{ color: "var(--dark-olive)" }}
            >
              Geffrey H. Klein, MD, FACOG
            </h1>
            <p className="text-lg mb-1" style={{ color: "var(--charcoal)" }}>
              Board Certified Obstetrics & Gynecology
            </p>
            <p className="text-lg mb-4" style={{ color: "var(--charcoal)" }}>
              Board Certified Obesity Medicine
            </p>
            <p className="italic text-lg mb-8" style={{ color: "var(--teal)" }}>
              "Taking care of women through all stages of life"
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="bg-[var(--deep-teal)] hover:bg-[var(--teal)] text-white px-8">
                <Link to="/appointment">Book Appointment</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-[var(--teal)] text-[var(--teal)] hover:bg-[var(--teal)] hover:text-white px-8">
                <Link to="/weight-loss">Weight Loss Clinic</Link>
              </Button>
            </div>
          </div>

          {/* Photo side */}
          <div className="flex-shrink-0">
            <div className="w-64 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
              <img
                src={heroImage}
                alt="Dr. Geffrey H. Klein"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Hero;
