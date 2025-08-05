import * as motion from "motion/react-client";
import { forwardRef, ReactNode, ForwardedRef } from "react";
import { HTMLMotionProps } from "motion/react";

type CustomProps = {
  children?: ReactNode;
  delay?: number;
  duration?: number;
  amount?: number | "some" | "all";
};

type SectionProps = CustomProps & HTMLMotionProps<"section">;

const SectionFadeInUpComponent = (
  { children, duration = 1, delay = 0, ...rest }: SectionProps,
  ref: ForwardedRef<HTMLDivElement>
) => {
  return (
    <motion.section
      ref={ref}
      initial='hide'
      whileInView='show'
      exit='hide'
      variants={{
        hide: {
          opacity: 0,
          y: 50,
        },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration,
            delay,
          },
        },
      }}
      viewport={{ once: true, amount: 0 }}
      {...rest}
    >
      {children}
    </motion.section>
  );
};
export const SectionFadeInUp = forwardRef(SectionFadeInUpComponent);
SectionFadeInUp.displayName = "SectionFadeInUp";


type DivProps = CustomProps & HTMLMotionProps<"div">;

const DivFadeInUpComponent = (
  { children, duration = 1, delay = 0, amount = 'all', ...rest }: DivProps,
  ref: ForwardedRef<HTMLDivElement>
) => {
  return (
    <motion.div
      ref={ref}
      initial='hide'
      whileInView='show'
      exit='hide'
      variants={{
        hide: {
          opacity: 0,
          y: 50,
        },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration,
            delay,
          },
        },
      }}
      viewport={{ once: true, amount }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export const DivFadeInUp = forwardRef(DivFadeInUpComponent);
DivFadeInUp.displayName = "DivFadeInUp";