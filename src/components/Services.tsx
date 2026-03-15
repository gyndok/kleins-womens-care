import { Link } from "react-router-dom";
import { Baby, Scissors, Heart, Users, Scale, Microscope } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Obstetric Care",
      description: "Prenatal care, high-risk pregnancies, vaginal delivery, C-section, postpartum care.",
      Icon: Baby,
      featured: false,
    },
    {
      title: "Gynecologic Surgery",
      description: "Robotic assisted surgery, hysterectomy, endometrial ablation, tubal ligation.",
      Icon: Scissors,
      featured: false,
    },
    {
      title: "Women's Health",
      description: "Annual exams, pap smears, mammography screening, hormone replacement, menopause care.",
      Icon: Heart,
      featured: false,
    },
    {
      title: "Family Planning",
      description: "Birth control, IUD placement/removal, contraceptive implants, infertility evaluation.",
      Icon: Users,
      featured: false,
    },
    {
      title: "Weight Loss Clinic",
      description: "Board certified obesity medicine. Personalized weight management programs and anti-obesity medications.",
      Icon: Scale,
      href: "/weight-loss",
      featured: true,
    },
    {
      title: "Specialized Treatments",
      description: "Endometriosis, uterine fibroids, cervical dysplasia, STD testing.",
      Icon: Microscope,
      featured: false,
    },
  ];

  return (
    <section id="services" className="py-20" style={{ backgroundColor: "rgba(198, 197, 185, 0.2)" }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center" style={{ color: "var(--dark-olive)" }}>
          Services & Procedures
        </h2>
        <p className="text-center mb-12 max-w-2xl mx-auto" style={{ color: "var(--charcoal)" }}>
          Comprehensive obstetric and gynecologic care with expertise in robotic surgery, high-risk pregnancies, and weight management.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              className={`rounded-2xl p-6 transition-shadow hover:shadow-lg ${
                service.featured ? "text-white" : "bg-white border"
              }`}
              style={
                service.featured
                  ? { background: "linear-gradient(135deg, var(--teal), var(--deep-teal))" }
                  : { borderColor: "var(--pale-silver)" }
              }
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={
                  service.featured
                    ? { backgroundColor: "rgba(255,255,255,0.2)" }
                    : { backgroundColor: "rgba(98, 146, 158, 0.12)" }
                }
              >
                <service.Icon
                  size={24}
                  style={{ color: service.featured ? "#fff" : "var(--teal)" }}
                  strokeWidth={1.75}
                />
              </div>
              <h3
                className="text-lg font-bold mb-2"
                style={{ color: service.featured ? "#fff" : "var(--dark-olive)" }}
              >
                {service.title}
              </h3>
              <p
                className="text-sm"
                style={{ color: service.featured ? "rgba(255,255,255,0.8)" : "var(--charcoal)" }}
              >
                {service.description}
              </p>
              {service.href && (
                <Link
                  to={service.href}
                  className="inline-block mt-4 text-sm font-semibold text-white underline underline-offset-4"
                >
                  Learn More &rarr;
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
