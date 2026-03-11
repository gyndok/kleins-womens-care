import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AppointmentForm from "@/components/AppointmentForm";
import { Button } from "@/components/ui/button";

const Appointment = () => {
  return (
    <main className="min-h-screen">
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
            Fill out the form below and we'll contact you to schedule your appointment.
          </p>

          {/* New patient forms */}
          <div className="rounded-2xl p-6 mb-10" style={{ backgroundColor: "rgba(198, 197, 185, 0.2)" }}>
            <h2 className="text-lg font-bold mb-3" style={{ color: "var(--dark-olive)" }}>
              New Patient? Start Here
            </h2>
            <p className="text-sm mb-4" style={{ color: "var(--charcoal)" }}>
              Please fill out the appropriate intake form:
            </p>
            <div className="flex flex-col gap-2">
              <Button asChild className="w-full text-white" style={{ background: "linear-gradient(to right, var(--teal), var(--deep-teal))" }}>
                <a href="https://intakeq.com/new/k3r67k" target="_blank" rel="noopener noreferrer">
                  Obesity Clinic Intake Form
                </a>
              </Button>
              <Button asChild className="w-full bg-[var(--deep-teal)] hover:bg-[var(--teal)] text-white">
                <a href="https://intakeq.com/new/vplnkm" target="_blank" rel="noopener noreferrer">
                  New Obstetrical Patient
                </a>
              </Button>
              <Button asChild className="w-full bg-[var(--deep-teal)] hover:bg-[var(--teal)] text-white">
                <a href="https://intakeq.com/new/6nzzu9" target="_blank" rel="noopener noreferrer">
                  New Gyn Patient
                </a>
              </Button>
            </div>
          </div>

          {/* General appointment form */}
          <h2 className="text-lg font-bold mb-4" style={{ color: "var(--dark-olive)" }}>
            Or Request a Callback
          </h2>
          <AppointmentForm />

          <p className="text-xs mt-4 text-center" style={{ color: "var(--charcoal)" }}>
            For urgent matters, please call{" "}
            <a href="tel:2815570300" className="hover:underline" style={{ color: "var(--deep-teal)" }}>
              (281) 557-0300
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Appointment;
