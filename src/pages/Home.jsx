import Hero from "../components/home/Hero";
//import Highlights from "../components/home/Highlights";
import TrustBar from "../components/home/TrustBar";
import FeaturedProducts from "../components/home/FeaturedProducts";
import ProductTrustStrip from "../components/home/ProductTrustStrip";
import HealthCategories from "../components/home/HealthCategories";
import WhyChooseUs from "../components/home/WhyChooseUs";
import ManufacturingScope from "../components/home/ManufacturingScope";
import CompanyStats from "../components/home/CompanyStats";
import BestSellerShowcase from "../components/home/BestSellerShowcase";
import ManufacturingProcess from "../components/home/ManufacturingProcess";
import BusinessTrust from "../components/home/BusinessTrust";
import ClientTrust from "../components/home/ClientTrust";
import Testimonials from "../components/home/Testimonials";
import SEO from "../components/common/SEO";
import PageTransition from "../components/common/PageTransition";
import StructuredData from "../components/common/StructuredData";
import ScrollTop from "../components/common/ScrollTop";
import FloatingWhatsapp from "../components/common/FloatingWhatsapp";

import BusinessCTA from "../components/home/BusinessCTA";
const Home = () => {
  return (
    <>
      <PageTransition>
        <SEO
          title="Anmol Laboratories | Herbal & Ayurvedic Medicines"
          description="Manufacturer of Ayurvedic Herbal Medicines, Oils, Syrups, Tablets, Capsules and Ointments."
          keywords="Ayurvedic medicines, Herbal products, Herbal manufacturer, Contract manufacturing, GMP Ayurvedic company"
        />
        <StructuredData
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Anmol Laboratories",
            url: window.location.origin,
            logo: `${window.location.origin}/logo.png`,
            description:
              "Manufacturer of Herbal Based Formulation Drugs & Medicines.",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-XXXXXXXXXX",
              contactType: "Customer Support",
              areaServed: "IN",
            },
          }}
        />

        <StructuredData
          data={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Anmol Laboratories",
            url: window.location.origin,
            potentialAction: {
              "@type": "SearchAction",
              target: `${window.location.origin}/products?search={search_term_string}`,
              "query-input": "required name=search_term_string",
            },
          }}
        />

        <Hero />
        <BestSellerShowcase />
        <BusinessTrust />
        <ClientTrust />
        <ManufacturingScope />

        <ManufacturingProcess />
        <CompanyStats />
        <Testimonials />
        <BusinessCTA />
        <FeaturedProducts />
        <ProductTrustStrip />
        <HealthCategories />
        <WhyChooseUs />
        <ScrollTop />
        <FloatingWhatsapp />
      </PageTransition>
    </>
  );
};

export default Home;
