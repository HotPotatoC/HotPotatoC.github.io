import React from "react"
import { motion } from "framer-motion"
import { Link } from "gatsby"
import Container from "./Container"

export const Header: React.FC = () => {
  return (
    <motion.header
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{
        duration: 3,
        ease: [0.19, 1.0, 0.22, 1.0],
      }}
      className="w-full z-30 py-6"
    >
      <Container>
        <div className="flex flex-wrap justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, delay: 1 }}
            className="p-2"
          >
            <Link id="link" to="/">
              <h1 className="font-stanley text-4xl select-none">Ju.</h1>
            </Link>
          </motion.div>
          <Link id="link" to="/about">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3, delay: 1.1 }}
              className="font-stanley text-3xl select-none"
            >
              about.
            </motion.span>
          </Link>
        </div>
      </Container>
    </motion.header>
  )
}

export default Header
