"use client"

import type React from "react"

import type { ReactNode } from "react"

interface ScrollLinkProps {
  href: string
  children: ReactNode
  className?: string
}

export function ScrollLink({ href, children, className }: ScrollLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)

    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Offset for the fixed header
        behavior: "smooth",
      })
    }
  }

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  )
}

