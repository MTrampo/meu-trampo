import * as motion from "motion/react-client";
import { ReactNode, ForwardedRef, forwardRef } from "react"
import { MotionStyle, Transition, Variants } from "motion/react"

type MotionProps = {
  variants?: Variants
  transition?: Transition
  style?: MotionStyle
  children: ReactNode
}

const DivCustomComponent = (
  { variants, transition, style, children }: MotionProps,
  ref: ForwardedRef<HTMLDivElement>
) => {
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

export default forwardRef(DivCustomComponent)