import React from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"

function Projects() {
  const works = [
    {
      title: "Mindzzle",
      redirect: "/work/mindzzle",
    },
    {
      title: "Stalync",
      redirect: "/work/stalync",
    },
    {
      title: "Covinfo",
      redirect: "/work/covinfo",
    },
    {
      title: "Mockturnal Quiz",
      redirect: "/work/mockturnal-quiz",
    },
    {
      title: "MERN Blog",
      redirect: "/",
    },
  ]

  return (
    <>
      <h1 className="mb-6 text-right text-4xl md:text-6xl lg:text-8xl">
        Works.
      </h1>
      {works.map((work, index) => {
        return (
          <motion.div
            key={work.title + index}
            initial={{ opacity: 0, y: "3em" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ width: "0%" }}
            transition={{
              duration: 3,
              ease: [0.19, 1.0, 0.22, 1.0],
              delay: 1.75 + index * 0.2,
            }}
            className="border-b border-white mb-12 md:mb-24 pb-6"
          >
            <div className="flex space-x-2">
              <span className="text-xs text-gray-400">{`0${index + 1}`}</span>
              <Link to={work.redirect}>
                <h1 className="project-title font-monument-ultrabold text-4xl md:text-6xl lg:text-8xl">
                  {work.title}
                </h1>
              </Link>
            </div>
          </motion.div>
        )
      })}
    </>
  )
}

export default Projects
