const InterviewVideo = () => {
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
          <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.youtube.com/embed/9cS3PvYQ7V0"
              title="Dr. Geffrey Klein Interview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterviewVideo;
