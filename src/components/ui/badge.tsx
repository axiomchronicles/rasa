import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em]",
  {
    variants: {
      variant: {
        standard: "bg-tertiary-container text-on-tertiary-fixed",
        neutral: "bg-surface-container-low text-on-surface-variant",
        dark: "bg-on-surface text-surface",
      },
    },
    defaultVariants: {
      variant: "standard",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}
