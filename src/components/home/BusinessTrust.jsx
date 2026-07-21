import {
  HiOutlineBadgeCheck,
  HiOutlineOfficeBuilding,
  HiOutlineGlobe,
  HiOutlineShieldCheck,
} from "react-icons/hi";

const items = [
  {
    icon: HiOutlineBadgeCheck,
    title: "GMP Quality Manufacturing",
    desc: "Manufactured following stringent quality standards.",
    color: "bg-green-100 text-green-700",
  },
  {
    icon: HiOutlineOfficeBuilding,
    title: "Contract Manufacturing",
    desc: "Reliable third-party manufacturing solutions.",
    color: "bg-cyan-100 text-cyan-700",
  },
  {
    icon: HiOutlineShieldCheck,
    title: "Quality Assured",
    desc: "Every batch undergoes strict quality inspection.",
    color: "bg-amber-100 text-amber-700",
  },
  {
    icon: HiOutlineGlobe,
    title: "PAN India Supply",
    desc: "Serving distributors and healthcare partners nationwide.",
    color: "bg-purple-100 text-purple-700",
  },
];

export default function BusinessTrust() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">
            WHY PARTNERS TRUST US
          </span>

          <h2 className="mt-5 text-5xl font-black">
            Trusted Manufacturing Partner
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Combining Ayurvedic wisdom with modern manufacturing practices to
            deliver quality herbal healthcare products.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {items.map((item) => {

            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-green-300 hover:shadow-2xl"
              >

                <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl ${item.color}`}>
                  <Icon size={30}/>
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  {item.desc}
                </p>

              </div>
            );

          })}

        </div>

      </div>
    </section>
  );
}