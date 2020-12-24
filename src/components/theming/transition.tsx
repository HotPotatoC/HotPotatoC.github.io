import React from "react"
import { motion, Variants } from "framer-motion"

interface Props {
  onAnimationEnd?:
    | ((event: React.AnimationEvent<HTMLDivElement>) => void)
    | undefined
}

export const Transition: React.FC<Props & { children: React.ReactNode }> = ({
  children,
  onAnimationEnd,
}) => {
  const transition = {
    duration: 2.25,
    ease: [0.87, 0, 0.13, 1],
    when: "beforeChildren",
  }

  const variants: Variants = {
    initial: {
      width: "100vw",
      left: 0,
    },
    enter: {
      width: 0,
      opacity: 0,
      transition,
    },
    exit: {
      width: "100vw",
      opacity: 1,
      transition,
    },
  }

  return (
    <>
      {children}
      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={variants}
        onAnimationComplete={() => {
          console.log("Transition finished")
        }}
        className="absolute overflow-hidden bottom-0 left-0 z-50 w-screen h-screen flex items-center justify-center bg-black border-r border-white"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: [1, 0] }}
          exit={{ opacity: [0, 1] }}
          transition={{
            duration: 1.25,
            ease: [0.87, 0, 0.13, 1],
          }}
          className="font-stanley text-9xl whitespace-nowrap"
        >
          Ju.
        </motion.h1>
      </motion.div>
    </>
  )
}

export default Transition
