import type { ReactNode } from "react";
import { motion } from "framer-motion";

import { useAmbientMotion } from "@/hooks/use-ambient-motion";
import type { MotionProfileKey } from "@/lib/stitch/motion";

type SectionWaveRenderApi = {
  itemVariants: ReturnType<typeof useAmbientMotion>["itemVariants"];
  indexedLift: ReturnType<typeof useAmbientMotion>["indexedLift"];
  pivotIn: ReturnType<typeof useAmbientMotion>["pivotIn"];
};

type SectionWaveProps = {
  profile: MotionProfileKey;
  className?: string;
  children: (api: SectionWaveRenderApi) => ReactNode;
};

export function SectionWave({ profile, className, children }: SectionWaveProps) {
  const choreography = useAmbientMotion(profile);

  return (
    <motion.section
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={choreography.containerVariants}
    >
      {children({
        itemVariants: choreography.itemVariants,
        indexedLift: choreography.indexedLift,
        pivotIn: choreography.pivotIn,
      })}
    </motion.section>
  );
}
