import {
  HiOutlineShieldCheck,
  HiOutlineSparkles,
  HiOutlineTruck,
} from "react-icons/hi";

export default function AuthBanner() {
  return (
    <div className="relative hidden overflow-hidden rounded-3xl bg-gradient-to-br from-green-700 via-green-800 to-emerald-900 p-14 text-white lg:flex lg:flex-col lg:justify-between">
      <div>
        <img src="/Logo.png" alt="Anmol Laboratories" className="h-20" />

        <h1 className="mt-10 text-5xl font-black leading-tight">
          Welcome to
          <br />
          Anmol Laboratories
        </h1>

        <p className="mt-6 max-w-md text-lg leading-8 text-green-100">
          Trusted manufacturer of Ayurvedic & Herbal Formulations since 2001.
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <HiOutlineShieldCheck size={26} />

          <span>GMP Certified Manufacturing</span>
        </div>

        <div className="flex items-center gap-4">
          <HiOutlineSparkles size={26} />

          <span>100% Herbal Formulations</span>
        </div>

        <div className="flex items-center gap-4">
          <HiOutlineTruck size={26} />

          <span>PAN India Delivery</span>
        </div>
      </div>
    </div>
  );
}
