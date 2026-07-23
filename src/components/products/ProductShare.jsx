import { FaWhatsapp, FaFacebookF, FaLinkedinIn, FaLink } from "react-icons/fa";

import toast from "react-hot-toast";

export default function ProductShare({ product }) {
  const url = window.location.href;

  const shareText = `Check out ${product.name} by Anmol Laboratories`;

  const copyLink = async () => {
    await navigator.clipboard.writeText(url);

    toast.success("Product link copied!");
  };

  return (
    <div className="mt-10">
      <h3 className="mb-4 text-lg font-bold">Share Product</h3>

      <div className="flex flex-wrap gap-4">
        <a
          href={`https://wa.me/?text=${encodeURIComponent(
            `${shareText}\n${url}`,
          )}`}
          target="_blank"
          rel="noreferrer"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white transition hover:scale-110"
        >
          <FaWhatsapp />
        </a>

        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            url,
          )}`}
          target="_blank"
          rel="noreferrer"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1877F2] text-white transition hover:scale-110"
        >
          <FaFacebookF />
        </a>

        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
            url,
          )}`}
          target="_blank"
          rel="noreferrer"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0A66C2] text-white transition hover:scale-110"
        >
          <FaLinkedinIn />
        </a>

        <button
          onClick={copyLink}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-700 text-white transition hover:scale-110"
        >
          <FaLink />
        </button>
      </div>
    </div>
  );
}
