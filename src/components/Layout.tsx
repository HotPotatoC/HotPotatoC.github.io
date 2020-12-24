import React, { useRef, useEffect, useState } from "react"
import { PageProps } from "gatsby"
import { AnimatePresence } from "framer-motion"

import useWindowSize from "../hooks/useWindowSize"
import isBrowser from "../utils/isBrowser"

import Header from "./Header"
import Cursor from "./Cursor"
import Footer from "./Footer"
import Container from "./Container"

import Transition from "./theming/transition"

export const Layout: React.FC<PageProps & { children: React.ReactNode }> = (
  props
) => {
  const [transitionFinished, setTransitionFinished] = useState(false)

  const size = useWindowSize()

  const appRef = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement | null>
  const scrollContainerRef = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement | null>

  const updateHeight = () => {
    document.body.style.height = `${
      scrollContainerRef.current?.getBoundingClientRect().height
    }px`
  }

  useEffect(() => {
    setTransitionFinished(false)
    if (transitionFinished) {
      updateHeight()
      console.log(`Updated: ${document.body.style.height}`)
    }
  }, [transitionFinished, size.height, props.location.pathname])

  useEffect(() => {
    requestAnimationFrame(() => skewScrolling())
  })

  const skewConfig = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  }

  const skewScrolling = () => {
    skewConfig.current = isBrowser() ? window.scrollY : 0
    skewConfig.previous +=
      (skewConfig.current - skewConfig.previous) * skewConfig.ease
    skewConfig.rounded = Math.round(skewConfig.previous * 100) / 100

    const difference = skewConfig.current - skewConfig.rounded
    const acceleration = difference / size.width
    const velocity = +acceleration
    const skew = velocity * 7.5

    if (scrollContainerRef && scrollContainerRef.current) {
      scrollContainerRef.current.style.transform = `translateY(-${skewConfig.rounded}px) skewY(${skew}deg)`
    }

    requestAnimationFrame(() => skewScrolling())
  }

  return (
    <>
      <div className="grain-container h-screen"></div>

      <AnimatePresence exitBeforeEnter>
        <main
          key={`main-${props.location.pathname}`}
          className="fixed top-0 left-0 w-full h-full z-20"
        >
          <Transition
            key={`transition-key-${props.location.pathname}`}
            onAnimationComplete={() => {
              setTransitionFinished(true)
            }}
          >
            <div ref={appRef}>
              <div ref={scrollContainerRef} className="scroll-container">
                <Header />
                <Container>{props.children}</Container>
                <Footer />
              </div>
            </div>
          </Transition>
          <Cursor
            key={`cursor-key-${props.location.pathname}`}
            location={props.location}
          />
        </main>
      </AnimatePresence>
    </>
  )
}

export default Layout
