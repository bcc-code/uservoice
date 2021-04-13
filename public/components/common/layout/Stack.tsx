import React from "react"
import { classSet } from "@fider/services"

interface StackProps {
  className?: string
  children: React.ReactNode
}

export const HStack = (props: StackProps) => {
  const className = classSet({
    [`${props.className}`]: props.className,
    "flex flex-x": true,
  })

  return <div className={className}>{props.children}</div>
}

export const VStack = (props: StackProps) => {
  const className = classSet({
    [`${props.className}`]: props.className,
    "flex flex-y": true,
  })

  return <div className={className}>{props.children}</div>
}
