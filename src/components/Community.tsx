import { Button } from "@/components/ui/button";
import { Baby, Camera, Heart, ArrowRight } from "lucide-react";

const Community = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ backgroundColor: "rgba(98, 146, 158, 0.15)" }}
          >
            <Baby className="w-8 h-8" style={{ color: "var(--deep-teal)" }} />
          </div>

          <h2 className="text-3xl font-bold mb-4" style={{ color: "var(--dark-olive)" }}>
            Dr. Klein's Baby Pictures
          </h2>
          <p className="text-lg mb-8" style={{ color: "var(--charcoal)" }}>
            Join our Facebook group where patients share photos of their beautiful babies!
            We love celebrating these special moments with our Dr. Klein family.
          </p>

          <div className="grid grid-cols-3 gap-6 mb-10 max-w-md mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Baby className="w-5 h-5 mr-1.5" style={{ color: "var(--teal)" }} />
              </div>
              <p className="text-sm font-medium" style={{ color: "var(--dark-olive)" }}>Baby Photos</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Camera className="w-5 h-5 mr-1.5" style={{ color: "var(--teal)" }} />
              </div>
              <p className="text-sm font-medium" style={{ color: "var(--dark-olive)" }}>Share Yours</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Heart className="w-5 h-5 mr-1.5" style={{ color: "var(--teal)" }} />
              </div>
              <p className="text-sm font-medium" style={{ color: "var(--dark-olive)" }}>Celebrate Together</p>
            </div>
          </div>

          <Button
            asChild
            size="lg"
            className="bg-[var(--deep-teal)] hover:bg-[var(--teal)] text-white px-8 gap-2"
          >
            <a
              href="https://www.facebook.com/groups/64781863202"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Our Facebook Group
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Community;
