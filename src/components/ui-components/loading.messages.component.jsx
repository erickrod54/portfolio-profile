import { cva } from "class-variance-authority";

/**Portfolio-erick - version 56.10 - loadingVariants -
* Features:

    --> Building 'loadingVariants'

* Notes: Importing 'class-variance-authority'
* and defining 'variants'
**/

export const loadingVariants = cva(
  "p-10 text-4xl font-extrabold",
  {
    variants: {
      variant: {
        loading: "text-white",
        error: "text-red-500",
      },
    },
    defaultVariants: {
      variant: "loading",
    },
  }
);