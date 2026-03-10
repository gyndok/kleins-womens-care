import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MochiHealth from "@/components/MochiHealth";
import { Button } from "@/components/ui/button";
import dabomBadge from "@/assets/dabom-badge.png";

const WeightLoss = () => {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="py-20 text-white" style={{ background: "linear-gradient(135deg, var(--teal), var(--deep-teal))" }}>
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Weight Loss Clinic</h1>
          <p className="text-xl text-white/80 mb-2">Board Certified Obesity Medicine</p>
          <p className="text-lg text-white/70">Personalized programs to help you achieve your health goals</p>
        </div>
      </section>

      {/* Video */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: "var(--dark-olive)" }}>
            Welcome to the Weight Loss Clinic
          </h2>
          <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/L7BjNZTAF_M"
              title="Welcome to the Weight Loss Clinic"
              width="100%"
              height="100%"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* About the program */}
      <section className="py-16" style={{ backgroundColor: "rgba(198, 197, 185, 0.2)" }}>
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--dark-olive)" }}>Our Approach</h2>
          <div className="space-y-4 text-lg" style={{ color: "var(--charcoal)" }}>
            <p>
              Dr. Klein is Board Certified with the American Board of Obesity Medicine and takes a comprehensive,
              evidence-based approach to weight management. Treatment plans are personalized to each patient's
              unique health profile and goals.
            </p>
            <p>
              Anti-obesity medications, including GLP-1 receptor agonists, may be prescribed as part of your
              individualized treatment plan to help you achieve sustainable results.
            </p>
          </div>
          <div className="mt-8 flex justify-center">
            <a href="https://www.abom.org" target="_blank" rel="noopener noreferrer">
              <img
                src={dabomBadge}
                alt="Diplomate - American Board of Obesity Medicine"
                className="h-24 md:h-28 w-auto"
              />
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-xl text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--dark-olive)" }}>
            Ready to Get Started?
          </h2>
          <p className="mb-8" style={{ color: "var(--charcoal)" }}>
            Fill out the obesity clinic intake form and our staff will contact you to schedule your first appointment.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="bg-[var(--deep-teal)] hover:bg-[var(--teal)] text-white">
              <a href="https://intakeq.com/new/k3r67k" target="_blank" rel="noopener noreferrer">
                Obesity Clinic Intake Form
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-[var(--teal)] text-[var(--teal)] hover:bg-[var(--teal)] hover:text-white">
              <a href="tel:2815570300">Call (281) 557-0300</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Telemedicine divider */}
      <section className="py-0 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px" style={{ backgroundColor: "var(--pale-silver)" }} />
            <span className="text-sm font-medium uppercase tracking-wider" style={{ color: "var(--charcoal)" }}>
              or
            </span>
            <div className="flex-1 h-px" style={{ backgroundColor: "var(--pale-silver)" }} />
          </div>
          <div className="text-center mt-6">
            <p className="text-lg font-semibold" style={{ color: "var(--dark-olive)" }}>
              Prefer a Telemedicine Option?
            </p>
            <p className="text-sm mt-2 max-w-xl mx-auto" style={{ color: "var(--charcoal)" }}>
              For patients who prefer the convenience of virtual care, I also offer weight loss management
              through Mochi Health — a fully online membership with physician access, medications, and coaching
              from anywhere.
            </p>
          </div>
        </div>
      </section>

      <MochiHealth />
      <Footer />
    </main>
  );
};

export default WeightLoss;
