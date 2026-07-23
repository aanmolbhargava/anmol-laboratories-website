import ContactCards from "../components/contact/ContactCards";
import ContactHero from "../components/contact/ContactHero";
import ContactSection from "../components/contact/ContactSection";
import BusinessHours from "../components/contact/BusinessHours";
import ContactFAQ from "../components/contact/ContactFAQ";
import BusinessCTA from "../components/business/BusinessCTA";
import SEO from "../components/common/SEO";
import PageTransition from "../components/common/PageTransition";
import ScrollTop from "../components/common/ScrollTop";
import FloatingWhatsapp from "../components/common/FloatingWhatsapp";

export default function Contact() {
  return (
    <>
      <PageTransition>
        <SEO
          title="Contact Us | Anmol Laboratories"
          description="Contact Anmol Laboratories for Ayurvedic Products, Third Party Manufacturing and Business Enquiry."
          keywords="Contact Ayurvedic company, herbal medicines manufacturer"
        />
        <ContactCards />
        <ContactHero />
        <ContactSection />
        <BusinessHours />
        <ContactFAQ />
        <BusinessCTA />
        <ScrollTop />
        <FloatingWhatsapp />
      </PageTransition>
    </>
  );
}
