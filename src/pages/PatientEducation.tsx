import { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, FileText, Download } from "lucide-react";
import patientEducationHero from "@/assets/generated/patient-education-hero.png";

interface Handout {
  title: string;
  file: string;
  category: string;
}

const handouts: Handout[] = [
  // Gynecology
  { title: "Adenomyosis", file: "Adenomyosis.pdf", category: "Gynecology" },
  { title: "Domestic Violence Resources", file: "Domestic-Violence-Patient-Education.pdf", category: "Gynecology" },
  { title: "Heavy Menstrual Cycles", file: "Heavy-Menstrual-Cycles.pdf", category: "Gynecology" },
  { title: "Low Libido", file: "low-libido.pdf", category: "Gynecology" },
  { title: "Lynch Syndrome Screening", file: "Lynch-Syndrome-Screening.pdf", category: "Gynecology" },
  { title: "PMDD (Premenstrual Dysphoric Disorder)", file: "PMDD.pdf", category: "Gynecology" },
  { title: "Postpartum Depression", file: "Postpartum-Depression.pdf", category: "Gynecology" },
  { title: "Hair Loss in Women", file: "Understanding_Hair_Loss_in_Women_A_Patient_Guide.pdf", category: "Gynecology" },

  // Menopause & HRT
  { title: "Genitourinary Syndrome of Menopause (Non-Hormonal Options)", file: "gsm-nonhormonal.pdf", category: "Menopause & HRT" },
  { title: "Menopause", file: "Menopause.pdf", category: "Menopause & HRT" },

  // Contraception
  { title: "Birth Control Options", file: "Birth-Control.pdf", category: "Contraception" },
  { title: "Sterilization", file: "Sterilization-Patient-Education.pdf", category: "Contraception" },

  // Obstetrics
  { title: "Ectopic Pregnancy & Methotrexate", file: "Methotrexate-Ectopic-Pregnancy.pdf", category: "Obstetrics" },
  { title: "Preconception Education", file: "Preconception-Education.pdf", category: "Obstetrics" },
  { title: "Pregnancy FAQ", file: "Pregnancy-FAQ.pdf", category: "Obstetrics" },
  { title: "Pregnancy FAQ (with Weight Guidelines)", file: "Pregnancy-FAQ-with-Weight.pdf", category: "Obstetrics" },
  { title: "RSV in Pregnancy", file: "RSV-in-Pregnancy.pdf", category: "Obstetrics" },
  { title: "Avoiding Toxins During Pregnancy", file: "Steering-Clear-of-Toxins-During-Pregnancy.pdf", category: "Obstetrics" },

  // Obesity Medicine
  { title: "Anti-Obesity Medication Overview", file: "Anti-Obesity-Medication-Overview.pdf", category: "Obesity Medicine" },
  { title: "Hair Loss on GLP-1 Medications", file: "hair-loss-glp1.pdf", category: "Obesity Medicine" },
  { title: "Objective Measures & Consequences of Obesity", file: "Obective-Measures-and-Consequences.pdf", category: "Obesity Medicine" },
  { title: "Obesity is a Disease", file: "Obesity-is-a-Disease.pdf", category: "Obesity Medicine" },
  { title: "Obesity Medications", file: "Obesity-Medications.pdf", category: "Obesity Medicine" },
  { title: "Orlistat (Xenical / Alli)", file: "Orlistat-Information.pdf", category: "Obesity Medicine" },
  { title: "Prescriptions for Weight Loss", file: "Prescriptions-for-Weight-Loss.pdf", category: "Obesity Medicine" },
  { title: "Understanding GLP-1 Agonists", file: "Understanding-GLP-1-Agonists.pdf", category: "Obesity Medicine" },
  { title: "Weight Clinic Overview", file: "Weight-Clinic-Print-Out.pdf", category: "Obesity Medicine" },
  { title: "Welcome to the Weight Loss Clinic", file: "Welcome-to-the-Weight-Loss-Clinic.pdf", category: "Obesity Medicine" },
  { title: "Welcome to the Weight Loss Practice", file: "Welcome-to-the-Weight-Loss-Practice.pdf", category: "Obesity Medicine" },

  // Procedures
  { title: "Da Vinci Robotic Hysterectomy", file: "daVinci-Hysterectomy.pdf", category: "Procedures" },
  { title: "Endometrial Biopsy", file: "Endometrial-Biopsy.pdf", category: "Procedures" },
  { title: "Laparoscopy", file: "Laparoscopy.pdf", category: "Procedures" },
  { title: "NovaSure Endometrial Ablation", file: "Novasure-Patient-Education.pdf", category: "Procedures" },
];

const categories = [
  "Gynecology",
  "Menopause & HRT",
  "Contraception",
  "Obstetrics",
  "Obesity Medicine",
  "Procedures",
];

const PatientEducation = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const query = search.toLowerCase();
    return handouts.filter((h) => {
      const matchesSearch =
        !query ||
        h.title.toLowerCase().includes(query) ||
        h.category.toLowerCase().includes(query);
      const matchesCategory = !activeCategory || h.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  const displayCategories = activeCategory
    ? [activeCategory]
    : categories.filter((cat) => filtered.some((h) => h.category === cat));

  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Patient Education Library | Dr. Geffrey Klein | Webster, TX</title>
        <meta
          name="description"
          content="Browse patient education handouts on gynecology, obstetrics, menopause, contraception, obesity medicine, and surgical procedures from Dr. Geffrey Klein."
        />
        <link rel="canonical" href="https://geffreyklein.com/patient-education" />
        <meta property="og:title" content="Patient Education Library | Dr. Geffrey Klein" />
        <meta
          property="og:description"
          content="Downloadable patient education handouts from Dr. Klein's practice in Webster, TX."
        />
        <meta property="og:url" content="https://geffreyklein.com/patient-education" />
      </Helmet>
      <Header />

      {/* Hero */}
      <section className="py-20 text-white relative overflow-hidden" style={{ background: "linear-gradient(135deg, var(--teal), var(--deep-teal))" }}>
        <div className="absolute inset-0" style={{ backgroundImage: `url(${patientEducationHero})`, backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(30, 80, 90, 0.55)" }} />
        <div className="container mx-auto px-4 max-w-3xl text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Patient Education Library</h1>
          <p className="text-xl text-white/80">Trusted resources to help you navigate your health journey</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <p
            className="text-center mb-10 max-w-2xl mx-auto"
            style={{ color: "var(--charcoal)" }}
          >
            Browse and download educational handouts to learn more about your health and treatment options.
          </p>

          {/* Search bar */}
          <div className="max-w-md mx-auto mb-8 relative">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5"
              style={{ color: "var(--charcoal)" }}
            />
            <input
              type="text"
              placeholder="Search handouts..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border focus:outline-none focus:ring-2"
              style={{
                borderColor: "var(--pale-silver)",
                color: "var(--charcoal)",
              }}
              // Tailwind can't do CSS var in ring-color, so use inline focus style via class
            />
          </div>

          {/* Category filter pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                !activeCategory
                  ? "text-white"
                  : "border hover:opacity-80"
              }`}
              style={{
                backgroundColor: !activeCategory ? "var(--deep-teal)" : "transparent",
                borderColor: "var(--pale-silver)",
                color: !activeCategory ? "white" : "var(--charcoal)",
              }}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "text-white"
                    : "border hover:opacity-80"
                }`}
                style={{
                  backgroundColor: activeCategory === cat ? "var(--deep-teal)" : "transparent",
                  borderColor: "var(--pale-silver)",
                  color: activeCategory === cat ? "white" : "var(--charcoal)",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Results */}
          {filtered.length === 0 ? (
            <p className="text-center py-12" style={{ color: "var(--charcoal)" }}>
              No handouts match your search. Try a different term.
            </p>
          ) : (
            displayCategories.map((category) => {
              const items = filtered.filter((h) => h.category === category);
              if (items.length === 0) return null;
              return (
                <div key={category} className="mb-12">
                  <h2
                    className="text-2xl font-bold mb-6"
                    style={{ color: "var(--dark-olive)" }}
                  >
                    {category}
                  </h2>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {items.map((handout) => (
                      <a
                        key={handout.file}
                        href={`/patient-education/${encodeURIComponent(handout.file)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-start gap-3 p-4 rounded-xl border hover:shadow-md transition-shadow bg-white"
                        style={{ borderColor: "var(--pale-silver)" }}
                      >
                        <FileText
                          className="h-6 w-6 mt-0.5 shrink-0"
                          style={{ color: "var(--teal)" }}
                        />
                        <div className="flex-1 min-w-0">
                          <h3
                            className="font-medium group-hover:opacity-80 transition-opacity leading-snug"
                            style={{ color: "var(--dark-olive)" }}
                          >
                            {handout.title}
                          </h3>
                          <span
                            className="text-xs mt-1 inline-block"
                            style={{ color: "var(--charcoal)" }}
                          >
                            PDF
                          </span>
                        </div>
                        <Download
                          className="h-4 w-4 mt-1 shrink-0 opacity-0 group-hover:opacity-60 transition-opacity"
                          style={{ color: "var(--charcoal)" }}
                        />
                      </a>
                    ))}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default PatientEducation;
