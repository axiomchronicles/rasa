import type { MotionProps, Transition, Variants } from "framer-motion";

export type MotionProfileKey = "hero" | "editorial" | "grid" | "rail" | "cta";

type MotionProfile = {
  drift: number;
  duration: number;
  stagger: number;
  delay: number;
  viewportAmount: number;
};

const easing: Transition["ease"] = [0.22, 1, 0.36, 1];

const profileRegistry: Record<MotionProfileKey, MotionProfile> = {
  hero: { drift: 36, duration: 0.9, stagger: 0.12, delay: 0.05, viewportAmount: 0.25 },
  editorial: { drift: 28, duration: 0.78, stagger: 0.1, delay: 0.03, viewportAmount: 0.3 },
  grid: { drift: 22, duration: 0.72, stagger: 0.08, delay: 0.02, viewportAmount: 0.22 },
  rail: { drift: 18, duration: 0.64, stagger: 0.07, delay: 0.02, viewportAmount: 0.2 },
  cta: { drift: 26, duration: 0.7, stagger: 0.09, delay: 0.04, viewportAmount: 0.35 },
};

export const pagePresenceVariants: Variants = {
  initial: { opacity: 0, y: 20, filter: "blur(6px)" },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.58, ease: easing, when: "beforeChildren", staggerChildren: 0.03 },
  },
  exit: {
    opacity: 0,
    y: -14,
    filter: "blur(8px)",
    transition: { duration: 0.36, ease: easing },
  },
};

export function resolveProfile(profile: MotionProfileKey) {
  return profileRegistry[profile];
}

export function composeContainerVariants(profile: MotionProfileKey): Variants {
  const descriptor = resolveProfile(profile);

  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: descriptor.delay,
        staggerChildren: descriptor.stagger,
      },
    },
  };
}

export function composeItemVariants(profile: MotionProfileKey): Variants {
  const descriptor = resolveProfile(profile);

  return {
    hidden: { opacity: 0, y: descriptor.drift },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: descriptor.duration,
        ease: easing,
      },
    },
  };
}

export function composePivotIn(profile: MotionProfileKey): MotionProps {
  const descriptor = resolveProfile(profile);

  return {
    initial: { opacity: 0, scale: 0.96, y: descriptor.drift * 0.5 },
    whileInView: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: descriptor.duration, ease: easing },
    },
    viewport: {
      once: true,
      amount: descriptor.viewportAmount,
    },
  };
}

export function composeIndexedLift(profile: MotionProfileKey, index: number): MotionProps {
  const descriptor = resolveProfile(profile);

  return {
    initial: { opacity: 0, y: descriptor.drift },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: {
        delay: descriptor.delay + index * descriptor.stagger,
        duration: descriptor.duration,
        ease: easing,
      },
    },
    viewport: {
      once: true,
      amount: descriptor.viewportAmount,
    },
  };
}
