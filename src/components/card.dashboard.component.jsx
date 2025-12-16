import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';
import { cn } from '../utils/utils.index';

/**Portfolio-erick - version 56.12 - CardDashboard -
* Features:

    -→> Refactoring card as UI + Thin component & building variants

* Notes: This is the first refactor as cva UI, building a 
* variant and testing of light /dark team switch, pending to add
* a switch button
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
const CardDashboard = forwardRef(({ className, variant, theme, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(cardVariants({ variant, theme }),
        className
        )}
        {...props}
    />
))

CardDashboard.displayName = 'CardDashboard'

//Card Header
const CardDashboardHeader = forwardRef(({ className, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={`flex flex-col space-y-1.5 p-6 ${className}`}
            {...props}
        />   
    )
})
CardDashboardHeader.displayName = 'CardDashboardHeader'

//CardTitleHeader
const CardTitleHeader = forwardRef(({ className, ...props }, ref) => (
    <h3
        ref={ref}
        className={`text-2xl font-semibold leading-none tracking-tight ${className}`}
        {...props}
    />
))
CardTitleHeader.displayName = 'CardTitleHeader';

//Card Content
const CardDashboardContent = forwardRef(({ className, ...props }, ref) => {
    return (
        <div ref={ref} className={`p-6 pt-0 ${className}`} {...props} />
    )
})

CardDashboardContent.displayName = 'CardDashboardContent'

export {CardDashboard, CardDashboardHeader, CardTitleHeader, CardDashboardContent }