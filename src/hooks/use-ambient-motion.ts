import { useMemo } from "react";
import { useReducedMotion } from "framer-motion";

import {
  composeContainerVariants,
  composeIndexedLift,
  composeItemVariants,
  composePivotIn,
  resolveProfile,
  type MotionProfileKey,
} from "@/lib/stitch/motion";

export function useAmbientMotion(profile: MotionProfileKey) {
  const prefersReducedMotion = useReducedMotion();

  return useMemo(() => {
    const descriptor = resolveProfile(profile);

    if (prefersReducedMotion) {
      return {
        containerVariants: { hidden: { opacity: 1 }, visible: { opacity: 1 } },
        itemVariants: { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } },
        pivotIn: {
          initial: { opacity: 1, y: 0, scale: 1 },
          whileInView: { opacity: 1, y: 0, scale: 1 },
          viewport: { once: true, amount: descriptor.viewportAmount },
        },
        indexedLift: () => ({
          initial: { opacity: 1, y: 0 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: descriptor.viewportAmount },
        }),
      };
    }

    return {
      containerVariants: composeContainerVariants(profile),
      itemVariants: composeItemVariants(profile),
      pivotIn: composePivotIn(profile),
      indexedLift: (index: number) => composeIndexedLift(profile, index),
    };
  }, [prefersReducedMotion, profile]);
}
