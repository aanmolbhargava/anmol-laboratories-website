import ContactCards from "../components/contact/ContactCards";
import ContactHero from "../components/contact/ContactHero";
import ContactSection from "../components/contact/ContactSection";
import BusinessHours from "../components/contact/BusinessHours";
import ContactFAQ from "../components/contact/ContactFAQ";
import BusinessCTA from "../components/business/BusinessCTA";

export default function Contact() {
  return (
    <>
      <ContactCards />
      <ContactHero />
      <ContactSection />
      <BusinessHours />
      <ContactFAQ />
      <BusinessCTA />
    </>
  );
}
