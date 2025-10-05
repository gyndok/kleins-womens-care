import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, Building2, CheckCircle } from "lucide-react";

const Credentials = () => {
  return (
    <section id="credentials" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <header className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Credentials & Education</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </header>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="shadow-[var(--card-shadow)]">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-foreground">Education</h3>
                    <div className="space-y-3">
                      <div>
                        <p className="font-medium text-foreground">University of Texas at Austin</p>
                        <p className="text-sm text-muted-foreground">Bachelor of Arts in Biology with Honors</p>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Baylor College of Medicine</p>
                        <p className="text-sm text-muted-foreground">Doctor of Medicine</p>
                        <ul className="text-xs text-muted-foreground mt-1 ml-4 list-disc">
                          <li>Southern Medical Association Scholarship</li>
                          <li>Honors in the Basic Sciences</li>
                          <li>Alpha Omega Alpha</li>
                          <li>Outstanding Medical Student in OB/GYN</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Baylor College of Medicine</p>
                        <p className="text-sm text-muted-foreground">Residency in Obstetrics and Gynecology</p>
                        <p className="text-xs text-muted-foreground">OB/GYN Administrative Chief Resident</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-[var(--card-shadow)]">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <Award className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-foreground">Certifications</h3>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">Board Certified in Obstetrics and Gynecology</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">Fellow of the American College of Obstetricians and Gynecologists (FACOG)</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">American Board of Obesity Medicine</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">Texas Medical License</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-muted-foreground">Missouri Medical License</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-[var(--card-shadow)]">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-3 text-foreground">Hospital Affiliations</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">HCA Houston Healthcare Clear Lake</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">Clear Lake Regional Medical Center</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">Bay Area Surgery Center</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Credentials;
