import * as motion from "motion/react-client";
import { forwardRef, ReactNode } from "react";
import { HTMLMotionProps } from "motion/react";

type CustomProps = {
  children?: ReactNode
  delay?: number
  duration?: number
  amount?: number | "some" | "all"
};

type SectionProps = CustomProps & HTMLMotionProps<"section">;

export const SectionFadeInUp = forwardRef<HTMLDivElement, SectionProps>(
  ({ children, duration = 1, delay = 0, ...rest }, ref) => {
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
              delay
            },
          },
        }}
        viewport={{ once: true, amount: 0 }}
        {...rest}
      >
        {children}
      </motion.section>
    );
  }
);

type DivProps = CustomProps & HTMLMotionProps<"div">;

export const DivFadeInUp = forwardRef<HTMLDivElement, DivProps>(
  ({ children, duration = 1, delay = 0, amount = 'all', ...rest }, ref) => {
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
              delay
            },
          },
        }}
        viewport={{ once: true, amount }}
        {...rest}
      >
        {children && children}
      </motion.div>
    );
  }
);