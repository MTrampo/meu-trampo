"use client"

import { ReactNode, Ref } from "react"
import { MotionStyle, Transition, Variants, motion } from "motion/react"

type MotionProps = {
  variants?: Variants
  transition?: Transition
  style?: MotionStyle
  ref?: Ref<HTMLDivElement>
  children: ReactNode
}

export default function DivCustom ({ variants, transition, style, ref, children }: MotionProps) {
  return (
    <motion.div
      className="relative"
      ref={ref}
      initial='hide'
      whileInView='show'
      exit='hide'
      variants={variants}
      transition={transition}
      style={style}
    >
      {children}
    </motion.div>
  )
}