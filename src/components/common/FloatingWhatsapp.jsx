import { FaWhatsapp } from "react-icons/fa";
import company from "../../data/company";

export default function FloatingWhatsapp() {

  return (

    <a
      href={`https://wa.me/${company.whatsapp}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-3 right-4 z-[9999] flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-4 text-white shadow-2xl transition hover:scale-105"
    >

      <FaWhatsapp size={30} />

      <div className="hidden sm:block">

        <p className="text-xs">

          Need Help?

        </p>

        <p className="font-semibold">

          Chat on WhatsApp

        </p>

      </div>

    </a>

  );

}