import { Button } from "@/components/ui/button";

const Reviews = () => {
  const reviews = [
    {
      name: "Sarah M.",
      text: "Dr. Klein is an exceptional physician who truly cares about his patients. His expertise in both OBGYN and obesity medicine is outstanding.",
      date: "2 months ago",
    },
    {
      name: "Jennifer L.",
      text: "The best doctor I've ever had! The staff is wonderful and Dr. Klein takes time to listen and answer all questions.",
      date: "3 months ago",
    },
    {
      name: "Maria R.",
      text: "Highly recommend Dr. Klein and his team. Professional, compassionate, and knowledgeable. The office is always clean and welcoming.",
      date: "4 months ago",
    },
    {
      name: "Amanda T.",
      text: "Dr. Klein helped me through my pregnancy journey with exceptional care. I couldn't have asked for a better doctor.",
      date: "5 months ago",
    },
  ];

  return (
    <section id="reviews" className="py-20" style={{ backgroundColor: "rgba(198, 197, 185, 0.3)" }}>
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8">
          <span className="text-5xl font-bold" style={{ color: "var(--dark-olive)" }}>4.8</span>
          <div className="text-2xl mt-1" style={{ color: "var(--teal)" }}>
            &#9733;&#9733;&#9733;&#9733;&#9733;
          </div>
          <p className="text-sm mt-2" style={{ color: "var(--charcoal)" }}>
            Based on 243 Google reviews
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-10">
          {reviews.map((review) => (
            <div key={review.name} className="bg-white rounded-xl p-5 text-left shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{ backgroundColor: "rgba(98, 146, 158, 0.2)", color: "var(--deep-teal)" }}
                >
                  {review.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-sm" style={{ color: "var(--dark-olive)" }}>
                    {review.name}
                  </p>
                  <p className="text-xs" style={{ color: "var(--charcoal)" }}>
                    {review.date}
                  </p>
                </div>
              </div>
              <p className="text-sm" style={{ color: "var(--charcoal)" }}>
                {review.text}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild size="lg" className="bg-[var(--deep-teal)] hover:bg-[var(--teal)] text-white">
            <a
              href="https://g.page/r/CR1ccgPImkkOEBM/review"
              target="_blank"
              rel="noopener noreferrer"
            >
              Leave a Review &rarr;
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-[var(--charcoal)] text-[var(--charcoal)] hover:bg-[var(--charcoal)] hover:text-white">
            <a
              href="https://www.google.com/search?q=geffrey+klein"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read All Reviews
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
