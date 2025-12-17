import { cva } from "class-variance-authority";

/**Portfolio-erick - version 56.13 - switchVariants -
* Features:

    --> Building 'switchVariants'

* Notes: 'switchVariants' is the ToogleButton
* variants and has:
*
*        theme ( light | dark )
*        size ( sm | md )
*        intent ( default )
* 
**/


export const switchVariants = cva(
    "p-2 m-2 relative inline-block w-[3.5em] h-[2em] cursor-pointer transition-all",
    {
        variants: {
            theme: {
                light: "text-black",
                dark: "text-white"
            },
            size: {
                sm: "text-[14px]", // Since we use 'em' units, changing font-size scales the whole UI
                md: "text-[17px]"
            },
        },
        defaultVariants: {
            theme: "light",
            size: "md"
        }
    }
);


