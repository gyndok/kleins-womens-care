import { Card, CardContent } from "@/components/ui/card";
import { Stethoscope, Heart, Award } from "lucide-react";
const About = () => {
  return <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">About Dr. Klein</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </header>
          
          <Card className="mb-8 shadow-[var(--card-shadow)] transition-shadow hover:shadow-[var(--card-hover-shadow)]">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Stethoscope className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-foreground">Biography</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Geffrey Klein, MD, FACOG is a highly qualified obstetrician and gynecologist with years of experience. He received his medical degree and residency in OBGYN from Baylor College of Medicine, where he served as OB/GYN Administrative Chief Resident.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Dr. Klein graduated with honors from the University of Texas at Austin with a Bachelor of Arts in Biology. During his time at Baylor College of Medicine, he received several prestigious honors including the Southern Medical Association Scholarship, Honors in the Basic Sciences, Alpha Omega Alpha membership, and the Outstanding Medical Student in Obstetrics and Gynecology award.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    He is Board Certified with the American Board of Obstetrics and Gynecology and is a Fellow of the American College of Obstetricians and Gynecologists. Dr. Klein has special interests in robotic surgery, challenging obstetrical cases, and general office gynecology.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Dr. Klein is also Board Certified with the American Board of Obesity Medicine and prescribes anti-obesity medication to help patients achieve their health goals.
                  </p>
                  
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-[var(--card-shadow)] transition-shadow hover:shadow-[var(--card-hover-shadow)]">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <Heart className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-foreground">Care Philosophy</h3>
                  <p className="text-lg text-muted-foreground italic">
                    "Taking care of women through all stages of life."
                  </p>
                  <p className="text-muted-foreground mt-4 leading-relaxed">
                    Dr. Klein is dedicated to providing exceptional care to his patients with a focus on staying up-to-date on the latest developments in the field and providing care that is tailored to the needs of each individual patient.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default About;