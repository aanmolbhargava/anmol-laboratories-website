import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
    >
      <div className="text-center">

        {/* Logo */}

        <motion.img
          src="/Logo.png"
          alt="Anmol Laboratories"
          className="mx-auto h-24 w-auto"
          animate={{
            scale: [1, 1.08, 1],
            rotate: [0, 2, -2, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
        <p className="mt-3 text-gray-500">
          Nature's Healing, Backed by Ayurveda
        </p>

        {/* Loading Dots */}

        <div className="mt-10 flex justify-center gap-3">

          {[0,1,2].map((i)=>(
            <motion.div
              key={i}
              className="h-3 w-3 rounded-full bg-green-700"
              animate={{
                y:[0,-8,0]
              }}
              transition={{
                delay:i*0.15,
                repeat:Infinity,
                duration:0.6
              }}
            />
          ))}

        </div>

      </div>
    </motion.div>
  );
}