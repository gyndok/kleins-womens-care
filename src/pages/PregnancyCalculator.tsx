import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const CALCULATOR_URL = "https://pregnancy-calculator-self.vercel.app";

const PregnancyCalculator = () => {
  const [blocked, setBlocked] = useState(false);
  const loaded = useRef(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (!loaded.current) setBlocked(true);
    }, 4000);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main id="main-content" className="min-h-dvh">
      <Helmet>
        <title>Pregnancy Due Date Calculator | Dr. Geffrey Klein</title>
        <meta name="description" content="Estimate your due date and see your pregnancy timeline with the calculator from Dr. Geffrey Klein, board-certified OBGYN in Webster, TX." />
        <link rel="canonical" href="https://geffreyklein.com/pregnancy-calculator" />
        <meta property="og:title" content="Pregnancy Due Date Calculator | Dr. Geffrey Klein" />
        <meta property="og:description" content="Estimate your due date and see your pregnancy timeline." />
        <meta property="og:url" content="https://geffreyklein.com/pregnancy-calculator" />
      </Helmet>
      <Header />

      <section className="py-20 text-white" style={{ background: "linear-gradient(135deg, var(--teal), var(--deep-teal))" }}>
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Pregnancy Due Date Calculator</h1>
          <p className="text-xl text-white/85">
            Estimate your due date and explore your pregnancy timeline week by week.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          {blocked ? (
            <div
              className="rounded-2xl border p-10 text-center"
              style={{ borderColor: "var(--pale-silver)" }}
            >
              <h2 className="text-2xl font-bold mb-3" style={{ color: "var(--dark-olive)" }}>
                Open the calculator
              </h2>
              <p className="mb-6" style={{ color: "var(--charcoal)" }}>
                The calculator opens in a new tab.
              </p>
              <Button asChild size="lg" className="bg-[var(--deep-teal)] hover:bg-[var(--teal)] text-white">
                <a href={CALCULATOR_URL} target="_blank" rel="noopener noreferrer">
                  Open Pregnancy Calculator
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          ) : (
            <div
              className="rounded-2xl overflow-hidden border shadow-lg"
              style={{ borderColor: "var(--pale-silver)" }}
            >
              <iframe
                src={CALCULATOR_URL}
                title="Pregnancy due date calculator"
                loading="lazy"
                onLoad={() => {
                  loaded.current = true;
                }}
                className="w-full"
                style={{ height: "1400px", border: "none" }}
              />
            </div>
          )}

          <p className="text-sm mt-6 text-center" style={{ color: "var(--charcoal)" }}>
            This calculator provides an estimate only and is not a substitute for medical advice.
            Please confirm your due date with Dr. Klein.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default PregnancyCalculator;
