"use client"

import { ButtonHTMLAttributes, FC, ReactNode } from "react"
import cn from "clsx" // optional, for conditional classes

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  variant?: "primary" | "outline" | "destructive"
  size?: "sm" | "md" | "lg"
}

export const Button: FC<Props> = ({ children, variant = "primary", size = "md", className, ...props }) => {
  return (
    <button
      className={cn(
        "rounded px-3 py-1 font-semibold transition-colors",
        variant === "primary" && "bg-blue-500 text-white hover:bg-blue-600",
        variant === "outline" && "border border-gray-300 text-gray-700 hover:bg-gray-100",
        variant === "destructive" && "bg-red-500 text-white hover:bg-red-600",
        size === "sm" && "text-sm px-2 py-1",
        size === "lg" && "text-lg px-4 py-2",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}