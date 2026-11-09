import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Appointment = () => {
  return (
    <>
      <Helmet>
        <title>Contact the Office | Dr. Geffrey Klein | Webster, TX</title>
        <meta name="description" content="Contact Dr. Geffrey Klein’s office in Webster, TX, or access the existing-patient portal." />
        <link rel="canonical" href="https://geffreyklein.com/appointment" />
        <meta property="og:title" content="Contact the Office | Dr. Geffrey Klein" />
        <meta property="og:description" content="Contact Dr. Klein’s office or access the existing-patient portal." />
        <meta property="og:url" content="https://geffreyklein.com/appointment" />
      </Helmet>
      <Header />
      <main id="main-content" tabIndex={-1} className="min-h-dvh">

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <h1 className="text-4xl font-bold mb-4 text-center" style={{ color: "var(--dark-olive)" }}>
            Contact the Office
          </h1>
          <p className="text-center mb-8" style={{ color: "var(--charcoal)" }}>
            Dr. Klein will retire from private practice on February 2, 2027. Please contact the office with questions about your care.
          </p>

          <div className="rounded-2xl p-6 text-center border" style={{ borderColor: "rgba(198, 197, 185, 0.5)" }}>
            <h2 className="text-lg font-bold mb-2" style={{ color: "var(--dark-olive)" }}>
              Call the Office
            </h2>
            <p className="text-sm mb-4" style={{ color: "var(--charcoal)" }}>
              For questions about your care or appointments, please call during business hours.
            </p>
            <Button asChild size="lg" className="text-white" style={{ background: "linear-gradient(to right, var(--teal), var(--deep-teal))" }}>
              <a href="tel:2815570300">
                <Phone className="mr-2 h-4 w-4" />
                (281) 557-0300
              </a>
            </Button>
          </div>

          <div className="rounded-2xl p-6 text-center border mt-6" style={{ borderColor: "rgba(198, 197, 185, 0.5)" }}>
            <h2 className="text-lg font-bold mb-2" style={{ color: "var(--dark-olive)" }}>
              Existing patient?
            </h2>
            <p className="text-sm mb-4" style={{ color: "var(--charcoal)" }}>
              Access your patient portal to view records, send messages, and manage appointments through Healow.
            </p>
            <Button asChild size="lg" variant="outline" className="border-[var(--deep-teal)] text-[var(--deep-teal)] hover:bg-[var(--deep-teal)] hover:text-white">
              <a href="https://healow.com/apps/provider/geffrey-klein-1466084" target="_blank" rel="noopener noreferrer">
                Open Patient Portal
              </a>
            </Button>
          </div>

          <p className="text-xs mt-6 text-center" style={{ color: "var(--charcoal)" }}>
            Please do not send protected health information by email. For urgent medical matters, call 911 or go to your nearest emergency room.
          </p>
        </div>
      </section>

      </main>
      <Footer />
    </>
  );
};

export default Appointment;
