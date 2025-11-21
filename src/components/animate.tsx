"use client";
import { motion, TargetAndTransition, Transition } from "motion/react";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className: string;
  initial: TargetAndTransition;
  animate: TargetAndTransition;
  transition: Transition;
}

const Animate = ({
  children,
  className,
  initial,
  animate,
  transition,
}: Props) => {
  return (
    <motion.div
      className={className}
      initial={initial}
      animate={animate}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default Animate;
