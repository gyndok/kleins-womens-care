import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: "var(--dark-olive)" }}>
          Contact & Location
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info side */}
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ color: "var(--dark-olive)" }}>
              Women's Specialists of Clear Lake
            </h3>

            <div className="space-y-4" style={{ color: "var(--charcoal)" }}>
              <div>
                <p className="font-semibold text-sm uppercase tracking-wide mb-1" style={{ color: "var(--dark-olive)" }}>
                  Address
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=400+Medical+Center+Blvd+Suite+300+Webster+TX+77598"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                  style={{ color: "var(--deep-teal)" }}
                >
                  400 Medical Center Blvd, Suite 300<br />Webster, TX 77598
                </a>
              </div>

              <div>
                <p className="font-semibold text-sm uppercase tracking-wide mb-1" style={{ color: "var(--dark-olive)" }}>
                  Phone
                </p>
                <a href="tel:2815570300" className="hover:underline" style={{ color: "var(--deep-teal)" }}>
                  (281) 557-0300
                </a>
                <p className="text-xs mt-1">*Please call if you are a self-pay patient</p>
              </div>

              <div>
                <p className="font-semibold text-sm uppercase tracking-wide mb-1" style={{ color: "var(--dark-olive)" }}>
                  Fax
                </p>
                <p>(281) 557-3301</p>
              </div>

              <div>
                <p className="font-semibold text-sm uppercase tracking-wide mb-1" style={{ color: "var(--dark-olive)" }}>
                  Languages
                </p>
                <p>English, Spanish</p>
              </div>

              <div>
                <p className="font-semibold text-sm uppercase tracking-wide mb-1" style={{ color: "var(--dark-olive)" }}>
                  Office Hours
                </p>
                <div className="text-sm space-y-1">
                  <p>Mon&ndash;Thu: 8:30 AM &ndash; 11:00 AM, 1:30 PM &ndash; 4:00 PM</p>
                  <p>Fri: 8:30 AM &ndash; 11:00 AM</p>
                  <p>Sat&ndash;Sun: Closed</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <p className="font-semibold text-sm uppercase tracking-wide mb-3" style={{ color: "var(--dark-olive)" }}>
                New Patient Forms
              </p>
              <div className="flex flex-col gap-2">
                {[
                  { label: "Obesity Clinic Intake Form", href: "https://intakeq.com/new/k3r67k" },
                  { label: "New Obstetrical Patient", href: "https://intakeq.com/new/vplnkm" },
                  { label: "New Gyn Patient", href: "https://intakeq.com/new/6nzzu9" },
                ].map((form) => (
                  <a
                    key={form.label}
                    href={form.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm px-4 py-2 rounded-lg font-medium transition-colors"
                    style={{
                      backgroundColor: "rgba(98, 146, 158, 0.1)",
                      color: "var(--deep-teal)",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(98, 146, 158, 0.2)")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(98, 146, 158, 0.1)")}
                  >
                    {form.label} &rarr;
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Map side */}
          <div>
            <div className="rounded-2xl overflow-hidden shadow-md h-80 md:h-full min-h-[320px]">
              <iframe
                src="https://maps.google.com/maps?q=Women%27s+Specialists+of+Clear+Lake+400+Medical+Center+Blvd+Suite+300+Webster+TX+77598&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
