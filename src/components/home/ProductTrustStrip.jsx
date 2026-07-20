const items = [
  "🌿 Ayurvedic Formulations",
  "🏭 GMP Certified",
  "⭐ Since 2001",
  "🚚 Pan India Supply",
  "💬 WhatsApp Support",
];

export default function ProductTrustStrip() {
  return (
    <section className="border-y border-green-100 bg-gradient-to-r from-green-50 via-white to-green-50">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 px-6 py-5">

        {items.map((item) => (
          <span
            key={item}
            className="font-medium text-gray-700"
          >
            {item}
          </span>
        ))}

      </div>
    </section>
  );
}