import { Card, CardContent } from "@/components/ui/card";
import { Video } from "lucide-react";
import patientEducationBanner from "@/assets/generated/patient-education-banner.png";

const PatientEducation = () => {
  const videos = [
    {
      id: "L7BjNZTAF_M",
      title: "Video 1",
      embed: "https://www.youtube.com/embed/L7BjNZTAF_M"
    },
    {
      id: "_R6ox9jwlUg",
      title: "Video 2",
      embed: "https://www.youtube.com/embed/_R6ox9jwlUg"
    },
    {
      id: "ZVkVVOMZzdQ",
      title: "Video 3",
      embed: "https://www.youtube.com/embed/ZVkVVOMZzdQ"
    },
    {
      id: "zohfFNMBBFU",
      title: "Video 4",
      embed: "https://www.youtube.com/embed/zohfFNMBBFU"
    },
    {
      id: "ezpZI5PwAts",
      title: "Video 5",
      embed: "https://www.youtube.com/embed/ezpZI5PwAts"
    },
    {
      id: "SoH9GtZOkYE",
      title: "Video 6",
      embed: "https://www.youtube.com/embed/SoH9GtZOkYE"
    },
    {
      id: "SBl8frE_v5A",
      title: "Video 7",
      embed: "https://www.youtube.com/embed/SBl8frE_v5A"
    }
  ];

  return (
    <section id="education" className="py-20 bg-muted/30">
      <img src={patientEducationBanner} alt="" aria-hidden="true" className="w-full object-cover" style={{ height: "200px", display: "block" }} />
      <div className="container mx-auto px-4">
        <header className="text-center mb-12 mt-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Video className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-4xl font-bold text-foreground">Patient Education Videos</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Educational resources to help you understand your care
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4" />
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {videos.map((video) => (
            <Card 
              key={video.id}
              className="shadow-[var(--card-shadow)] transition-all duration-300 hover:shadow-[var(--card-hover-shadow)] hover:-translate-y-1 overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="aspect-video">
                  <iframe
                    src={video.embed}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PatientEducation;
