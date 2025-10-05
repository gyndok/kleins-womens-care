import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Printer, Calendar, Languages, Globe } from "lucide-react";
import officeImage from "@/assets/office-interior.jpg";
const Contact = () => {
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Contact & Location</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>

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
                  <h4 className="font-semibold mb-3 text-foreground">Office Hours</h4>
                  <p className="text-sm text-muted-foreground">
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