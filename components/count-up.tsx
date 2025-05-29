"use client"

import { useState, useEffect } from "react"

export function CountUp({ end, duration = 2, decimals = 0 }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime
    let animationFrame

    const countUp = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      const currentCount = Math.floor(progress * end)

      setCount(currentCount)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(countUp)
      } else {
        setCount(end)
      }
    }

    animationFrame = requestAnimationFrame(countUp)

    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, decimals])

  return <>{count}</>
}
