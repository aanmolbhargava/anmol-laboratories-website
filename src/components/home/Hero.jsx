import HeroBanner from "./HeroBanner";
import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[88vh] min-h-[720px]">
        <HeroBanner />

        <div className="relative z-20 mx-auto flex h-full max-w-7xl items-center px-6">
          <HeroContent />
        </div>
      </div>
    </section>
  );
}
