import { cva } from "class-variance-authority";
import { forwardRef } from "react";
import { cn } from '../../utils/utils.index'

/**Portfolio-erick - version 56.17 - Button UI -
* Features:

    -→> Building 'ButtonUI' component 

* Notes: The 'SummaryEditor' will add/ edit the 
* summary section
**/

const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible-ring-2 focus-visible:ring-primary disabled:opacity-50 disabled:pointer-none",
    {
        variants: {
            variant: {
                //uses global @theme variables
                primary: "bg-primary text-primary-foreground hover:opacity-90 shadow-sm",
                outline: "border border-border bg-transparent hover:bg-muted text-foregrounf",
                secondary: "bg-muted text-muted-foreground hover:bg-muted/80",
                danger: "bg-red-600 text-white hover:bg-red-700 dark:bg-red-500",
                ghost:"hover:bg-muted text-foreground"
            },
            size: {
                default: "h-10 py-2 px-4",
                sm: "h-9 px-3 rounded-md",
                lg: "h-11 px-8 rounded-md",
                icon: "h-10 w-10"
            },
        },
        defaultVariants: {
            variant: "primary",
            size:'default'
        }
    }
)

const ButtonUI = forwardRef(({ className, variant, size, ...props }, ref) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
});

ButtonUI.displayName = "Button";

export { ButtonUI, buttonVariants };