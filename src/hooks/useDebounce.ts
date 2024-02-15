import { useState, useEffect } from "react"

export const useDebounce = <T>(value: T, wait = 1500) => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, wait)

    return () => {
      clearTimeout(timer)
    }
  }, [value, wait])

  return debouncedValue
}