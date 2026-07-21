import {
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineLocationMarker,
  HiOutlineChatAlt2,
} from "react-icons/hi";

const cards = [
  {
    icon: HiOutlinePhone,
    title: "Call Us",
    value: "+91 9696765887",
    href: "tel:+919696765887",
    color: "bg-green-100 text-green-700",
  },
  {
    icon: HiOutlineMail,
    title: "Email",
    value: "aanmolbhargava@gmail.com",
    href: "mailto:aanmolbhargava@gmail.com",
    color: "bg-cyan-100 text-cyan-700",
  },
  {
    icon: HiOutlineLocationMarker,
    title: "Office",
    value: "Kanpur, Uttar Pradesh",
    href: "#",
    color: "bg-purple-100 text-purple-700",
  },
  {
    icon: HiOutlineChatAlt2,
    title: "WhatsApp",
    value: "Quick Support",
    href: "https://wa.me/919696765887",
    color: "bg-emerald-100 text-emerald-700",
  },
];

export default function ContactCards() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <a
              key={card.title}
              href={card.href}
              className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl ${card.color}`}
              >
                <Icon size={28} />
              </div>

              <h3 className="mt-6 text-2xl font-bold">{card.title}</h3>

              <p className="mt-4 text-gray-600">{card.value}</p>
            </a>
          );
        })}
      </div>
    </section>
  );
}
