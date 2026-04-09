import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-semibold transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-on-primary hover:bg-primary-dim active:scale-[0.98] uppercase tracking-[0.12em]",
        inverse:
          "bg-on-surface text-surface hover:opacity-90 active:scale-[0.98] uppercase tracking-[0.12em]",
        ghost:
          "text-on-surface hover:text-primary",
        outline:
          "border border-outline-variant/40 text-on-surface hover:bg-surface-container-high",
        subtle:
          "bg-surface-container-low text-on-surface hover:bg-surface-container-high",
      },
      size: {
        sm: "h-9 px-4 text-[11px]",
        md: "h-11 px-6 text-xs",
        lg: "h-14 px-10 text-xs",
        icon: "h-10 w-10",
      },
      width: {
        auto: "w-auto",
        full: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      width: "auto",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, width, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, width }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
