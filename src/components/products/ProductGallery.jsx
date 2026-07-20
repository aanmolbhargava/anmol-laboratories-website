import { useState } from "react";
import { motion } from "framer-motion";

export default function ProductGallery({ gallery = [] }) {

    const [selected,setSelected]=useState(gallery[0]);

    return(

        <div>

            <motion.div

                whileHover={{scale:1.08}}

                transition={{duration:.3}}

                className="overflow-hidden rounded-3xl bg-white"

            >

                <img

                    src={selected}

                    alt="product"

                    className="mx-auto h-[520px] object-contain"

                />

            </motion.div>

            {gallery.length>1 && (

                <div className="mt-6 flex justify-center gap-4">

                    {gallery.map((image)=>(

                        <button

                            key={image}

                            onClick={()=>setSelected(image)}

                            className={`overflow-hidden rounded-2xl border-2 transition

                            ${selected===image

                            ?"border-green-700"

                            :"border-transparent"}

                            `}

                        >

                            <img

                                src={image}

                                className="h-20 w-20 object-contain"

                            />

                        </button>

                    ))}

                </div>

            )}

        </div>

    )

}