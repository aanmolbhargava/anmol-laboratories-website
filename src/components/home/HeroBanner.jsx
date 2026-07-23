export default function HeroBanner() {
  return (
    <div className="absolute inset-0">
      <img
        src="/images/hero-banner.png"
        alt="Anmol Laboratories Product Range"
        className="h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Green Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-950/70 via-green-900/30 to-transparent" />
    </div>
  );
}
