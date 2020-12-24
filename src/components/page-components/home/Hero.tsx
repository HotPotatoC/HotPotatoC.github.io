import React from "react"
import { motion } from "framer-motion"

export const Hero: React.FC = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: "3em" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ width: "0%" }}
        transition={{
          duration: 3,
          ease: [0.19, 1.0, 0.22, 1.0],
          delay: 2,
        }}
      >
        <h1 className="text-4xl md:text-6xl lg:text-8xl">Juan Christian</h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: "3em" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ width: "0%" }}
        transition={{
          duration: 3,
          ease: [0.19, 1.0, 0.22, 1.0],
          delay: 2.1,
        }}
      >
        <h1 className="font-monument-ultrabold text-4xl md:text-6xl lg:text-8xl">
          Full Stack Developer
        </h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: "3em" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ width: "0%" }}
        transition={{
          duration: 3,
          ease: [0.19, 1.0, 0.22, 1.0],
          delay: 2.2,
        }}
        className="mb-32 md:mb-44 lg:mb-64"
      >
        <h1 className="text-4xl md:text-6xl lg:text-8xl">
          Based in <span className="font-monument-ultrabold">Indonesia</span>
        </h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: "3em" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ width: "0%" }}
        transition={{
          duration: 3,
          ease: [0.19, 1.0, 0.22, 1.0],
          delay: 2.75,
        }}
      >
        <h1 className="text-xl md:text-2xl lg:text-4xl">
          You can scroll down 👇🙂
        </h1>
      </motion.div>
    </>
  )
}

export default Hero
