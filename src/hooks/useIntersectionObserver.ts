import { useRef, useEffect } from "react"

export const useIntersectionObserver = (callback: IntersectionObserverCallback) => {
  const ref = useRef(null)

  useEffect(() => {
    if (window.IntersectionObserver) {
      const observer = new IntersectionObserver(callback, {
        threshold: 1
      })

      const node = ref?.current

      if (node) {
        observer.observe(node)
      }

      return () => {
        if (node) {
          observer.unobserve(node)
        }
      }
    }
  }, [ref, callback])

  return ref
}