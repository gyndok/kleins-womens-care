import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Baby, HeartPulse, Microscope, Pill, Shield, UserRound } from "lucide-react";

const Services = () => {
  const serviceCategories = [
    {
      icon: Baby,
      title: "Obstetric Care",
      color: "text-primary",
      services: [
        "Prenatal Care",
        "High Risk Pregnancies",
        "Vaginal Delivery",
        "Cesarean Section (C-section)",
        "Multiple Gestation",
        "Postpartum Care",
        "Genetic Counseling"
      ]
    },
    {
      icon: HeartPulse,
      title: "Gynecologic Surgery",
      color: "text-secondary",
      services: [
        "Robotic Assisted Surgery",
        "Total Laparoscopic Hysterectomy",
        "Endometrial Ablation",
        "Tubal Ligation",
        "Diagnostic Hysteroscopy",
        "Diagnostic Colposcopy"
      ]
    },
    {
      icon: UserRound,
      title: "Women's Health",
      color: "text-primary",
      services: [
        "Annual Well Woman Exam",
        "Pap Smear",
        "Pelvic Exam",
        "Mammography Screening",
        "Hormone Replacement Therapy",
        "Menopausal Disorders",
        "Osteoporosis Management"
      ]
    },
    {
      icon: Pill,
      title: "Family Planning",
      color: "text-secondary",
      services: [
        "Birth Control Management",
        "IUD Implantation/Removal",
        "Contraceptive Capsule Implant",
        "Female Infertility",
        "Contraceptive Counseling"
      ]
    },
    {
      icon: Microscope,
      title: "Specialized Treatments",
      color: "text-primary",
      services: [
        "Endometriosis Treatment",
        "Uterine Fibroid Procedures",
        "Cervical Dysplasia Treatment",
        "Urinary Incontinence",
        "Pelvic Organ Prolapse",
        "STD Testing & Treatment",
        "Urodynamics"
      ]
    },
    {
      icon: Shield,
      title: "Cancer Screening & Care",
      color: "text-secondary",
      services: [
        "Cervical Cancer Screening",
        "Ovarian Cancer Care",
        "Uterine Cancer Management",
        "Endometrial Cancer",
        "Biopsy Procedures"
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Services & Procedures</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive obstetric and gynecologic care with expertise in robotic surgery and high-risk cases
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {serviceCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index} 
                className="shadow-[var(--card-shadow)] transition-all duration-300 hover:shadow-[var(--card-hover-shadow)] hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className={`h-6 w-6 ${category.color}`} />
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.services.map((service, idx) => (
                      <Badge 
                        key={idx} 
                        variant="secondary" 
                        className="text-xs py-1"
                      >
                        {service}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
