import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type = "text", ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "h-12 w-full bg-surface-container-high px-0 py-3 text-sm text-on-surface placeholder:text-outline/60 outline-none border-b border-outline-variant/30 transition-colors focus:border-primary",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
