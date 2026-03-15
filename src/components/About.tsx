import abogBadge from "@/assets/abog-badge.jpg";
import acogBadge from "@/assets/acog-badge.jpeg";
import aboutSidebar from "@/assets/generated/about-sidebar.png";

const About = () => {
  const badges = [
    { title: "Board Certified", subtitle: "Obstetrics & Gynecology" },
    { title: "FACOG", subtitle: "Fellow, American College of OB/GYN" },
    { title: "Board Certified", subtitle: "Obesity Medicine" },
    { title: "Chief Resident", subtitle: "Baylor College of Medicine" },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: "var(--dark-olive)" }}>
          About Dr. Klein
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 items-start">

          {/* Left: bio + badges */}
          <div className="md:col-span-2">
            <div className="space-y-4 mb-10" style={{ color: "var(--charcoal)" }}>
              <p className="text-lg leading-relaxed">
                Geffrey Klein, MD, FACOG is a highly qualified obstetrician and gynecologist with years of experience.
                He received his medical degree and residency in OBGYN from <strong>Baylor College of Medicine</strong>,
                where he served as OB/GYN Administrative Chief Resident.
              </p>
              <p className="text-lg leading-relaxed">
                Dr. Klein graduated with honors from the <strong>University of Texas at Austin</strong> with a Bachelor of Arts
                in Biology. He is Board Certified with the American Board of Obstetrics and Gynecology, a Fellow of
                the American College of Obstetricians and Gynecologists, and Board Certified with the American Board of Obesity Medicine.
              </p>
              <p className="text-xl italic text-center mt-8" style={{ color: "var(--teal)" }}>
                "Taking care of women through all stages of life."
              </p>
            </div>

            {/* Credential badges */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {badges.map((badge, i) => (
                <div
                  key={i}
                  className="rounded-xl p-4 text-center"
                  style={{ backgroundColor: "rgba(198, 197, 185, 0.3)" }}
                >
                  <p className="font-bold text-sm" style={{ color: "var(--deep-teal)" }}>
                    {badge.title}
                  </p>
                  <p className="text-xs mt-1" style={{ color: "var(--charcoal)" }}>
                    {badge.subtitle}
                  </p>
                </div>
              ))}
            </div>

            {/* Board certification logos */}
            <div className="flex items-center gap-8">
              <a href="https://www.abog.org" target="_blank" rel="noopener noreferrer">
                <img
                  src={abogBadge}
                  alt="ABOG Board-Certified - Obstetrics and Gynecology"
                  className="h-24 md:h-28 w-auto"
                />
              </a>
              <a href="https://www.acog.org/" target="_blank" rel="noopener noreferrer">
                <img
                  src={acogBadge}
                  alt="ACOG - The American College of Obstetricians and Gynecologists"
                  className="h-24 md:h-28 w-auto"
                />
              </a>
            </div>
          </div>

          {/* Right: decorative sidebar image */}
          <div className="hidden md:block">
            <div className="rounded-2xl overflow-hidden shadow-md sticky top-8" style={{ height: "480px" }}>
              <img
                src={aboutSidebar}
                alt=""
                aria-hidden="true"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
