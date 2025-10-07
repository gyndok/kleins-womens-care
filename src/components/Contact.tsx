import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Printer, Calendar, Languages, Globe } from "lucide-react";
import officeImage from "@/assets/office-interior.jpg";
const Contact = () => {
  return <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Contact & Location</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </header>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-[var(--card-shadow)] overflow-hidden">
              
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  Women's Specialists of Clear Lake
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Office Address</p>
                      <p className="text-sm text-muted-foreground">
                        400 Medical Center Blvd, Suite 300<br />
                        Webster, TX 77598
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <p className="text-sm text-muted-foreground">(281) 557-0300</p>
                      <p className="text-xs text-muted-foreground italic mt-1">
                        *Please call if you are a self-pay patient
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Printer className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Fax</p>
                      <p className="text-sm text-muted-foreground">(281) 557-3301</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Languages className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">Languages</p>
                      <p className="text-sm text-muted-foreground">English, Spanish</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="shadow-[var(--card-shadow)]">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3 text-foreground text-xl">Office Hours</h4>
                  <div className="space-y-2 text-base text-muted-foreground">
                    <div className="flex justify-between">
                      <span className="font-medium">Monday - Thursday:</span>
                      <span>8:30 AM - 11:00 AM, 1:30 PM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Friday:</span>
                      <span>8:30 AM - 11:00 AM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Saturday - Sunday:</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-[var(--card-shadow)] bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="h-6 w-6 text-primary" />
                    <h4 className="font-semibold text-foreground text-xl">New Patient Forms</h4>
                  </div>
                  <p className="text-base text-foreground mb-5 font-medium">
                    Please fill out the appropriate form below. Once submitted, our staff will contact you to schedule your appointment.
                  </p>
                  <div className="space-y-3">
                    <a href="https://intakeq.com/new/k3r67k" target="_blank" rel="noopener noreferrer" className="block">
                      <Button variant="default" className="w-full justify-start text-base h-12">
                        Obesity Clinic Intake Form
                      </Button>
                    </a>
                    <a href="https://intakeq.com/new/vplnkm" target="_blank" rel="noopener noreferrer" className="block">
                      <Button variant="default" className="w-full justify-start text-base h-12">
                        New Obstetrical Patient Database
                      </Button>
                    </a>
                    <a href="https://intakeq.com/new/6nzzu9" target="_blank" rel="noopener noreferrer" className="block">
                      <Button variant="default" className="w-full justify-start text-base h-12">
                        New Gyn Patient
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;