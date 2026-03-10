import Header from "@/components/Header";
import Footer from "@/components/Footer";

const videos = [
  { id: "L7BjNZTAF_M", title: "Welcome to the Weight Loss Clinic", category: "Weight Loss" },
  { id: "SBl8frE_v5A", title: "Estrogen Therapy", category: "Women's Health" },
  { id: "SoH9GtZOkYE", title: "VBAC: Your Choices", category: "Women's Health" },
  { id: "_R6ox9jwlUg", title: "Bilateral Salpingectomy", category: "Surgical Procedures" },
  { id: "ZVkVVOMZzdQ", title: "Understanding NovaSure", category: "Surgical Procedures" },
  { id: "zohfFNMBBFU", title: "Da Vinci Hysterectomy", category: "Surgical Procedures" },
  { id: "ezpZI5PwAts", title: "Demystifying the LEEP", category: "Surgical Procedures" },
];

const categories = [...new Set(videos.map((v) => v.category))];

const Videos = () => {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-center" style={{ color: "var(--dark-olive)" }}>
            Patient Education Videos
          </h1>
          <p className="text-center mb-12 max-w-2xl mx-auto" style={{ color: "var(--charcoal)" }}>
            Educational resources to help you understand your care
          </p>

          {categories.map((category) => (
            <div key={category} className="mb-12">
              <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--dark-olive)" }}>
                {category}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos
                  .filter((v) => v.category === category)
                  .map((video) => (
                    <a
                      key={video.id}
                      href={`https://www.youtube.com/watch?v=${video.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block bg-white border rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                      style={{ borderColor: "var(--pale-silver)" }}
                    >
                      <div className="aspect-video relative">
                        <img
                          src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                          alt={video.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                          <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                            <svg
                              className="w-5 h-5 ml-0.5"
                              fill="var(--deep-teal)"
                              viewBox="0 0 20 20"
                            >
                              <path d="M6.3 2.84A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.27l9.344-5.891a1.5 1.5 0 000-2.538L6.3 2.84z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3
                          className="font-semibold group-hover:opacity-80 transition-opacity"
                          style={{ color: "var(--dark-olive)" }}
                        >
                          {video.title}
                        </h3>
                      </div>
                    </a>
                  ))}
              </div>
            </div>
          ))}

          <div className="text-center mt-8">
            <a
              href="https://www.youtube.com/channel/UCFquFEcz5gwZQNVEyRGdkbg"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:underline"
              style={{ color: "var(--deep-teal)" }}
            >
              View All Videos on YouTube &rarr;
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Videos;
