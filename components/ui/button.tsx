import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonAnimationClasses =
  "after:w-full after:h-full after:block after:absolute after:z-[-10] after:left-0 after:top-0 after:translate-y-full hover:after:translate-y-0 after:transition-transform after:duration-300 overflow-hidden";

const buttonVariants = cva(
  "relative inline-flex overflow-hidden items-center justify-center whitespace-nowrap rounded-full text-base font-semibold ring-offset-white transition-colors duration-300 z-20",
  {
    variants: {
      variant: {
        default: `bg-accent text-primary ${buttonAnimationClasses}`,
        primary: `bg-primary text-white ${buttonAnimationClasses}`,
        outline: `border border-accent bg-transparent text-accent hover:text-primary ${buttonAnimationClasses}`,
      },
      size: {
        default: "h-11 px-6",
        md: "h-12 px-6",
        lg: "h-14 px-8 text-sm uppercase tracking-[2px]",
      },
    },
    compoundVariants: [
      {
        variant: "default",
        className: "after:bg-white",
      },
      {
        variant: "outline",
        className: "after:bg-accent",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
