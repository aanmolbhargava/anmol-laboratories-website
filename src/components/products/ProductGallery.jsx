import { useState } from "react";
import { motion } from "framer-motion";

import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export default function ProductGallery({ image, gallery = [], product }) {
  const images = gallery?.length ? gallery : [image];

  const [selected, setSelected] = useState(images[0]);
  const [open, setOpen] = useState(false);

  return (
    <>
      <div>
        <div className="overflow-hidden rounded-3xl border bg-white p-6 shadow-xl">
          <motion.img
            key={selected}
            src={selected}
            alt={product?.name}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.35,
            }}
            whileHover={{
              scale: 1.04,
            }}
            onClick={() => setOpen(true)}
            className="mx-auto h-[520px] w-full cursor-zoom-in object-contain"
          />
        </div>

        {images.length > 1 && (
          <div className="mt-6 flex justify-center gap-4">
            {images.map((img) => (
              <button
                key={img}
                onClick={() => setSelected(img)}
                className={`overflow-hidden rounded-2xl border-2 transition-all duration-300 hover:scale-105

                ${selected === img ? "border-green-700" : "border-gray-200"}`}
              >
                <img src={img} alt="" className="h-20 w-20 object-contain" />
              </button>
            ))}
          </div>
        )}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images.map((img) => ({
          src: img,
        }))}
        index={images.findIndex((img) => img === selected)}
        plugins={[Zoom, Thumbnails]}
        carousel={{
          finite: false,
        }}
        controller={{
          closeOnBackdropClick: true,
        }}
        zoom={{
          maxZoomPixelRatio: 3,
          zoomInMultiplier: 2,
          doubleTapDelay: 300,
          doubleClickDelay: 300,
        }}
        thumbnails={{
          position: "bottom",
          width: 90,
          height: 90,
          border: 2,
          borderRadius: 12,
        }}
      />
    </>
  );
}
