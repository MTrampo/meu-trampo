import { forwardRef, ReactNode, ForwardedRef } from "react";
import * as motion from "motion/react-client";
import { fadeInUp, fadeInUpDelay, textFadeInUp, textFadeInUpDelay } from "@/commons/lib/animations/variants";
import { HTMLMotionProps } from "motion/react";

type CustomProps = {
  delay?: number
  duration?: number
  children: ReactNode
}

type SpanProps = CustomProps & HTMLMotionProps<"span">;

export const SpanFadeInUp = forwardRef<HTMLSpanElement, SpanProps>(
  ({ children, ...rest }: SpanProps, ref: ForwardedRef<HTMLSpanElement>) => {
    return (
      <motion.span
        ref={ref}
        initial='hide'
        whileInView='show'
        exit='hide'
        variants={fadeInUp}
        viewport={{ once: true, amount: 'all' }}
        {...rest}
      >
        {children}
      </motion.span>
    );
  }
);

SpanFadeInUp.displayName = "SpanFadeInUp";

export const SpanFadeInUpDelay = forwardRef<HTMLSpanElement, SpanProps>(
  ({ children, ...rest }: SpanProps, ref: ForwardedRef<HTMLSpanElement>) => {
    return (
      <motion.span
        ref={ref}
        initial="hide"
        whileInView="show"
        exit="hide"
        variants={fadeInUpDelay}
        viewport={{ once: true, amount: 'all' }}
        {...rest}
      >
        {children}
      </motion.span>
    );
  }
);

SpanFadeInUpDelay.displayName = "SpanFadeInUpDelay";

type HeadingProps = CustomProps & HTMLMotionProps<"h2">;

export const HeadingFadeInUp = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ children, ...rest }: HeadingProps, ref: ForwardedRef<HTMLHeadingElement>) => {
    return (
      <motion.h2
        ref={ref}
        initial="hide"
        whileInView="show"
        exit="hide"
        variants={textFadeInUp}
        viewport={{ once: true, amount: 'all' }}
        {...rest}
      >
        {children}
      </motion.h2>
    );
  }
);

HeadingFadeInUp.displayName = "HeadingFadeInUp";

export const HeadingFadeInLeft = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ children, ...rest }: HeadingProps, ref: ForwardedRef<HTMLHeadingElement>) => {
    return (
      <motion.h2
        ref={ref}
        initial="hide"
        whileInView="show"
        exit="hide"
        variants={{
          hide: {
            opacity: 0,
            x: -50,
          },
          show: {
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
            },
          },
        }}
        viewport={{ once: true, amount: 0 }}
        {...rest}
      >
        {children}
      </motion.h2>
    );
  }
);

HeadingFadeInLeft.displayName = "HeadingFadeInLeft";

type ParagraphProps = CustomProps & HTMLMotionProps<"p">;

export const ParagraphFadeInUp = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ children, ...rest }: ParagraphProps, ref: ForwardedRef<HTMLParagraphElement>) => {
    return (
      <motion.p
        ref={ref}
        initial="hide"
        whileInView="show"
        exit="hide"
        variants={textFadeInUpDelay}
        viewport={{ once: true, amount: 'all' }}
        {...rest}
      >
        {children}
      </motion.p>
    );
  }
);

ParagraphFadeInUp.displayName = "ParagraphFadeInUp";

export const ParagraphFadeInLeft = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ children, ...rest }: ParagraphProps, ref: ForwardedRef<HTMLParagraphElement>) => {
    return (
      <motion.p
        ref={ref}
        initial="hide"
        whileInView="show"
        exit="hide"
        variants={{
          hide: {
            opacity: 0,
            x: -50,
          },
          show: {
            opacity: 1,
            x: 0,
            transition: {
              duration: 2,
              delay: 0.5
            },
          },
        }}
        viewport={{ once: true, amount: 0 }}
        {...rest}
      >
        {children}
      </motion.p>
    );
  }
);

ParagraphFadeInLeft.displayName = "ParagraphFadeInLeft";