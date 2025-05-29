"use client"

import { useEffect } from "react"



export function ScrollToTop({children, ...rest} : React.HTMLAttributes<HTMLDivElement>) {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div {...rest}>
      {children}
    </div>
  )
}
