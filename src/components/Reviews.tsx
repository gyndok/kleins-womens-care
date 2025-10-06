import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Reviews = () => {
  const reviews = [
    {
      name: "Sarah M.",
      rating: 5,
      text: "Dr. Klein is an exceptional physician who truly cares about his patients. His expertise in both OBGYN and obesity medicine is outstanding.",
      date: "2 months ago"
    },
    {
      name: "Jennifer L.",
      rating: 5,
      text: "The best doctor I've ever had! The staff is wonderful and Dr. Klein takes time to listen and answer all questions.",
      date: "3 months ago"
    },
    {
      name: "Maria R.",
      rating: 5,
      text: "Highly recommend Dr. Klein and his team. Professional, compassionate, and knowledgeable. The office is always clean and welcoming.",
      date: "4 months ago"
    },
    {
      name: "Amanda T.",
      rating: 5,
      text: "Dr. Klein helped me through my pregnancy journey with exceptional care. I couldn't have asked for a better doctor.",
      date: "5 months ago"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Patient Reviews</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6" />
            
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex">{renderStars(5)}</div>
              <span className="text-2xl font-bold text-foreground">4.8</span>
              <span className="text-muted-foreground">out of 5</span>
            </div>
            <p className="text-muted-foreground mb-6">Based on 243 Google reviews</p>
            
            <a
              href="https://www.google.com/search?q=geffrey+klein"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg">
                Read All Reviews on Google
              </Button>
            </a>
          </header>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {reviews.map((review, index) => (
              <Card key={index} className="shadow-[var(--card-shadow)]">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="font-semibold text-foreground">{review.name}</h4>
                      <p className="text-sm text-muted-foreground">{review.date}</p>
                    </div>
                    <div className="flex">{renderStars(review.rating)}</div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
