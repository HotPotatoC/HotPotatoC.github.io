import { useState, useEffect } from "react"
import isBrowser from "../utils/isBrowser"

export const useWindowSize = () => {
  function getSize() {
    return {
      width: isBrowser() ? window.innerWidth : 0,
      height: isBrowser() ? window.innerHeight : 0,
    }
  }

  const [windowSize, setWindowSize] = useState(getSize)

  useEffect(() => {
    function handleResize() {
      setWindowSize(getSize())
    }

    if (isBrowser()) {
      window.addEventListener("resize", handleResize)
    }
    return () => {
      if (isBrowser()) {
        window.removeEventListener("resize", handleResize)
      }
    }
  }, [])

  return windowSize
}

export default useWindowSize
