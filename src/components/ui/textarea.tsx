import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "w-full resize-none bg-surface-container-high px-0 py-3 text-sm text-on-surface placeholder:text-outline/60 outline-none border-b border-outline-variant/30 transition-colors focus:border-primary",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
