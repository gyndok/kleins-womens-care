import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Appointment = () => {
  return (
    <main id="main-content" className="min-h-dvh">
      <Helmet>
        <title>Book an Appointment | Dr. Geffrey Klein | Webster, TX</title>
        <meta name="description" content="Schedule an appointment with Dr. Geffrey Klein, board-certified OBGYN and obesity medicine specialist in Webster, TX. New patient intake forms available." />
        <link rel="canonical" href="https://geffreyklein.com/appointment" />
        <meta property="og:title" content="Book an Appointment | Dr. Geffrey Klein" />
        <meta property="og:description" content="Schedule an appointment with Dr. Klein, board-certified OBGYN in Webster, TX." />
        <meta property="og:url" content="https://geffreyklein.com/appointment" />
      </Helmet>
      <Header />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <h1 className="text-4xl font-bold mb-4 text-center" style={{ color: "var(--dark-olive)" }}>
            Request an Appointment
          </h1>
          <p className="text-center mb-8" style={{ color: "var(--charcoal)" }}>
            To protect your privacy, all appointment requests are handled through our secure intake system.
          </p>

          <div className="rounded-2xl p-6 mb-8" style={{ backgroundColor: "rgba(198, 197, 185, 0.2)" }}>
            <h2 className="text-lg font-bold mb-3" style={{ color: "var(--dark-olive)" }}>
              Start Your Secure Intake
            </h2>
            <p className="text-sm mb-4" style={{ color: "var(--charcoal)" }}>
              Please fill out our brief appointment request form. Your information is submitted directly to our HIPAA-compliant intake system and our office will contact you to schedule your visit.
            </p>
            <Button asChild className="w-full text-white" style={{ background: "linear-gradient(to right, var(--teal), var(--deep-teal))" }}>
              <a href="https://intakeq.com/new/stj8ub" target="_blank" rel="noopener noreferrer">
                Request an Appointment
              </a>
            </Button>
            <Button asChild variant="outline" className="w-full mt-3" style={{ borderColor: "var(--deep-teal)", color: "var(--deep-teal)" }}>
              <a href="https://intakeq.com/new/dr3kda" target="_blank" rel="noopener noreferrer">
                Solicitar una cita (Español)
              </a>
            </Button>
          </div>

          <div className="rounded-2xl p-6 text-center border" style={{ borderColor: "rgba(198, 197, 185, 0.5)" }}>
            <h2 className="text-lg font-bold mb-2" style={{ color: "var(--dark-olive)" }}>
              Prefer to speak with someone?
            </h2>
            <p className="text-sm mb-4" style={{ color: "var(--charcoal)" }}>
              Call our office directly during business hours and we'll help you get scheduled.
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

      <Footer />
    </main>
  );
};

export default Appointment;
