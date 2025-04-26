"use client"

import { motion } from "framer-motion"

export function Loader() {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <motion.div
        className="flex space-x-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="w-4 h-4 bg-white rounded-full"
            animate={{
              y: ["0%", "-50%", "0%"],
            }}
            transition={{
              duration: 0.6,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              ease: "easeInOut",
              delay: index * 0.1,
            }}
          />
        ))}
      </motion.div>
    </div>
  )
}
