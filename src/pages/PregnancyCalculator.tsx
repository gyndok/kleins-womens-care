import { Helmet } from "react-helmet-async";
import { ExternalLink, CalendarHeart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const CALCULATOR_URL = "https://pregnancy-calculator-self.vercel.app";

const PregnancyCalculator = () => {
  return (
    <>
      <Helmet>
        <title>Pregnancy Due Date Calculator | Dr. Geffrey Klein</title>
        <meta name="description" content="Estimate your due date and see your pregnancy timeline with the calculator from Dr. Geffrey Klein, board-certified OBGYN in Webster, TX." />
        <link rel="canonical" href="https://geffreyklein.com/pregnancy-calculator" />
        <meta property="og:title" content="Pregnancy Due Date Calculator | Dr. Geffrey Klein" />
        <meta property="og:description" content="Estimate your due date and explore your pregnancy timeline." />
        <meta property="og:url" content="https://geffreyklein.com/pregnancy-calculator" />
      </Helmet>
      <Header />
      <main id="main-content" tabIndex={-1} className="min-h-dvh">

      <section className="py-20 text-white" style={{ background: "linear-gradient(135deg, var(--teal), var(--deep-teal))" }}>
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Pregnancy Due Date Calculator</h1>
          <p className="text-xl text-white">
            Estimate your due date and explore your pregnancy timeline week by week.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div
            className="rounded-2xl border p-4 sm:p-10 text-center shadow-lg"
            style={{ borderColor: "var(--pale-silver)" }}
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
              style={{ backgroundColor: "rgba(98, 146, 158, 0.12)" }}
            >
              <CalendarHeart size={28} strokeWidth={1.75} style={{ color: "var(--teal)" }} />
            </div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "var(--dark-olive)" }}>
              Open the calculator
            </h2>
            <p className="mb-7" style={{ color: "var(--charcoal)" }}>
              Find your estimated due date from your last period, conception date, IVF transfer, or
              ultrasound &mdash; then see what to expect each week. Nothing you enter is saved.
            </p>
            <Button asChild size="lg" className="bg-[var(--deep-teal)] hover:bg-[var(--teal)] text-white px-4 sm:px-8 h-auto min-h-11 whitespace-normal">
              <a href={CALCULATOR_URL} target="_blank" rel="noopener noreferrer">
                Open Due Date Calculator
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          <p className="text-sm mt-8 text-center" style={{ color: "var(--charcoal)" }}>
            This calculator provides an estimate only and is not a substitute for medical advice.
            Please confirm your due date with Dr. Klein.
          </p>
        </div>
      </section>

      </main>
      <Footer />
    </>
  );
};

export default PregnancyCalculator;
