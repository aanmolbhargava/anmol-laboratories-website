import Hero from "../components/home/Hero";
//import Highlights from "../components/home/Highlights";
import TrustBar from "../components/home/TrustBar";
import FeaturedProducts from "../components/home/FeaturedProducts";
import ProductTrustStrip from "../components/home/ProductTrustStrip";
import HealthCategories from "../components/home/HealthCategories";
import WhyChooseUs from "../components/home/WhyChooseUs";
import ManufacturingScope from "../components/home/ManufacturingScope";
import BestSellerShowcase from "../components/home/BestSellerShowcase";

const Home = () => {
  return (
    <>
      <Hero />
      <BestSellerShowcase />
      <ManufacturingScope />
      <FeaturedProducts />
      <ProductTrustStrip />
      <HealthCategories />
      <WhyChooseUs />
    </>
  );
};

export default Home;