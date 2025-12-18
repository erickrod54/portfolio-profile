import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import { cn } from '../utils/utils.index';

/**Portfolio-erick - version 56.14 - CardDashboard -
* Features:

    -→> Applying 'cn' merge util to all headless componenents

* Notes: applying 'cn' in order to merge styles easily and
* avoid conflicts by mixing javaScript and twMerge in the 
* same file
*
**/

const cardVariants = cva(
    "rounded-lg border transition-colors",
    {
        variants: {
            theme:{
                light: "bg-white text-black border-gray-200",
                dark:"bg-zinc-900 text-zinc-100 border-zinc-700",
            },
            variant: {
                default: "",
                danger:"border-red-500",
            },
        },
        defaultVariants: {
            theme: "light",
            variant:"default"
        }
    }
);

//Card Container
// 1. Card Container (Keep as is, but ensure theme is passed)
const CardDashboard = forwardRef(({ className, variant, theme, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(cardVariants({ variant, theme }), className)}
        {...props}
    />
));

CardDashboard.displayName = 'CardDashboard'

// 2. Card Header
const CardDashboardHeader = forwardRef(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("flex flex-col space-y-1.5 p-6", className)}
        {...props}
    />   
));

CardDashboardHeader.displayName = 'CardDashboardHeader'

// 3. Card Title Header (The critical part)
const CardTitleHeader = forwardRef(({ className, ...props }, ref) => (
    <h3
        ref={ref}
        // Use 'text-inherit' to force it to use the color defined in CardDashboard
        // or just let it inherit naturally by removing any conflicting 'text-...' classes
        className={cn("text-2xl font-semibold leading-none tracking-tight text-inherit", className)}
        {...props}
    />
));

CardTitleHeader.displayName = 'CardTitleHeader'

// 4. Card Content
const CardDashboardContent = forwardRef(({ className, ...props }, ref) => (
    <div 
        ref={ref} 
        className={cn("p-6 pt-0 text-inherit opacity-90", className)} 
        {...props} 
    />
));

CardDashboardContent.displayName = 'CardDashboardContent'

export {CardDashboard, CardDashboardHeader, CardTitleHeader, CardDashboardContent }