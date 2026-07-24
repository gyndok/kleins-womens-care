import { useState } from "react";
import { Play } from "lucide-react";

const VIDEO_ID = "9cS3PvYQ7V0";

const InterviewVideo = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <section className="py-20" style={{ background: "linear-gradient(135deg, #fff 0%, #f5f4ee 100%)" }}>
      <div className="container mx-auto px-4">
        <header className="text-center mb-10 max-w-2xl mx-auto">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ color: "var(--teal)" }}
          >
            Featured Interview
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "var(--dark-olive)" }}
          >
            Meet Dr. Klein
          </h2>
          <p className="text-lg" style={{ color: "var(--charcoal)" }}>
            Watch Dr. Geffrey Klein discuss his approach to women's health and patient care.
          </p>
        </header>

        <div className="max-w-4xl mx-auto">
          <div className="aspect-video rounded-2xl overflow-hidden shadow-xl relative bg-black">
            {loaded ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1`}
                title="Dr. Geffrey Klein Interview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="w-full h-full"
              />
            ) : (
              <button
                type="button"
                onClick={() => setLoaded(true)}
                aria-label="Play interview video"
                className="w-full h-full group relative"
              >
                <img
                  src={`https://i.ytimg.com/vi/${VIDEO_ID}/hqdefault.jpg`}
                  alt="Dr. Geffrey Klein interview thumbnail"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                  <span className="rounded-full bg-white/95 p-5 shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="h-8 w-8 text-[var(--deep-teal)] fill-current" />
                  </span>
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterviewVideo;
