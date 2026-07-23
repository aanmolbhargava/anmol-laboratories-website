import AboutHero from "../components/about/AboutHero";
import AboutStory from "../components/about/AboutStory";
import MissionVision from "../components/about/MissionVision";
import WhyChooseUs from "../components/about/WhyChooseUs";
import ManufacturingStrength from "../components/about/ManufacturingStrength";
import QualityStandards from "../components/about/QualityStandards";
import PageTransition from "../components/common/PageTransition";
import ScrollTop from "../components/common/ScrollTop";
import FloatingWhatsapp from "../components/common/FloatingWhatsapp";

export default function About() {
  return (
    <>
      <PageTransition>
        <AboutHero />

        <AboutStory />

        <MissionVision />

        <WhyChooseUs />
        <ManufacturingStrength />
        <QualityStandards />
        <ScrollTop />
        <FloatingWhatsapp />
      </PageTransition>
    </>
  );
}
