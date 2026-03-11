import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText } from "lucide-react";

const consentForms = [
  { name: "VBAC Consent", url: "https://intakeq.com/new/wquxyg" },
  { name: "Medicaid Tubal Consent", url: "https://intakeq.com/c/q8Tfiy" },
  { name: "Consent for Suction D&C", url: "https://intakeq.com/c/ChHlxF" },
  { name: "Consent for Elective Primary Cesarean", url: "https://intakeq.com/c/pmiHp9" },
  { name: "Consent for Misoprostol for Labor Induction", url: "https://intakeq.com/c/lttDrJ" },
  { name: "Consent for AI Use", url: "https://intakeq.com/c/JOnFrm" },
  { name: "Consent for IUD", url: "https://intakeq.com/c/9pdnxc" },
  { name: "Consent for D&C", url: "https://intakeq.com/c/kQfbaJ" },
  { name: "Consent for Diagnostic Laparoscopy", url: "https://intakeq.com/c/jA2mut" },
  { name: "Consent for Bilateral Salpingectomy", url: "https://intakeq.com/c/kR7aLD" },
  { name: "Consent for daVinci Hysterectomy", url: "https://intakeq.com/c/JQyS3c" },
  { name: "Consent for Novasure", url: "https://intakeq.com/c/RK1Khe" },
  { name: "Consent for Hormone Replacement Therapy", url: "https://intakeq.com/c/ORsii7" },
  { name: "Consent for Oral Contraceptives", url: "https://intakeq.com/c/cmiDTo" },
];

const ConsentForms = () => {
  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Consent Forms | Dr. Geffrey Klein | Webster, TX</title>
        <meta name="description" content="Complete your consent forms online before your appointment with Dr. Geffrey Klein. Forms for surgical procedures, IUD, hormone therapy, and more." />
        <link rel="canonical" href="https://geffreyklein.com/consent-forms" />
        <meta property="og:title" content="Consent Forms | Dr. Geffrey Klein" />
        <meta property="og:description" content="Complete consent forms online before your appointment with Dr. Klein." />
        <meta property="og:url" content="https://geffreyklein.com/consent-forms" />
      </Helmet>
      <Header />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-center" style={{ color: "var(--dark-olive)" }}>
            Consent Forms
          </h1>
          <p className="text-center mb-12 max-w-2xl mx-auto" style={{ color: "var(--charcoal)" }}>
            Please complete the appropriate consent form prior to your procedure or appointment
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {consentForms.map((form) => (
              <a
                key={form.url}
                href={form.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 p-4 bg-white border rounded-xl hover:shadow-lg transition-shadow"
                style={{ borderColor: "var(--pale-silver)" }}
              >
                <FileText
                  className="h-5 w-5 flex-shrink-0"
                  style={{ color: "var(--deep-teal)" }}
                />
                <span
                  className="font-medium group-hover:opacity-80 transition-opacity"
                  style={{ color: "var(--dark-olive)" }}
                >
                  {form.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ConsentForms;
