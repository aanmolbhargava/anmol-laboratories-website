import { motion } from "framer-motion";
import {
  HiOutlineCube,
  HiOutlineTag,
  HiOutlineBeaker,
  HiOutlineTruck,
  HiOutlineCollection,
  HiOutlineArchive,
} from "react-icons/hi";

const services = [
  {
    title: "Third Party Manufacturing",
    icon: HiOutlineCube,
  },
  {
    title: "Contract Manufacturing",
    icon: HiOutlineCollection,
  },
  {
    title: "Private Label",
    icon: HiOutlineTag,
  },
  {
    title: "Bulk Product Supply",
    icon: HiOutlineTruck,
  },
  {
    title: "Custom Formulations",
    icon: HiOutlineBeaker,
  },
  {
    title: "Packaging Solutions",
    icon: HiOutlineArchive,
  },
];

export default function ManufacturingServices() {
  return (
    <section className="bg-[#F8FBF8] py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">
            OUR SERVICES
          </span>

          <h2 className="mt-6 text-5xl font-black">
            Manufacturing Solutions
          </h2>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service,index)=>{

            const Icon=service.icon;

            return(

              <motion.div
                key={service.title}
                initial={{opacity:0,y:40}}
                whileInView={{opacity:1,y:0}}
                viewport={{once:true}}
                transition={{delay:index*0.08}}
                className="rounded-3xl bg-white p-10 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-700">

                  <Icon size={34}/>

                </div>

                <h3 className="mt-8 text-2xl font-bold">

                  {service.title}

                </h3>

              </motion.div>

            )

          })}

        </div>

      </div>

    </section>
  );
}