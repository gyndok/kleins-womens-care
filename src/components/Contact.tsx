import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Printer, Calendar, Languages, Globe } from "lucide-react";
import officeImage from "@/assets/office-interior.jpg";
const Contact = () => {
  return <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-foreground mb-6">Contact & Location</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="shadow-[var(--card-shadow)] overflow-hidden">
              <div className="h-64 overflow-hidden">
                
              </div>
              <CardContent className="p-8">
                <h3 className="text-3xl font-semibold mb-8 text-foreground">
                  Women's Specialists of Clear Lake
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-lg text-foreground mb-2">Office Address</p>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        400 Medical Center Blvd, Suite 300<br />
                        Webster, TX 77598
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-lg text-foreground mb-2">Phone</p>
                      <p className="text-base text-muted-foreground">(281) 557-0300</p>
                      <p className="text-sm text-muted-foreground italic mt-2">
                        *Please call if you are a self-pay patient
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Printer className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-lg text-foreground mb-2">Fax</p>
                      <p className="text-base text-muted-foreground">(281) 557-3301</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Languages className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-lg text-foreground mb-2">Languages</p>
                      <p className="text-base text-muted-foreground">English, Spanish</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="shadow-[var(--card-shadow)]">
                <CardContent className="p-8">
                  <h4 className="font-semibold text-xl mb-4 text-foreground">Office Hours</h4>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Please contact our office for current office hours and availability.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;