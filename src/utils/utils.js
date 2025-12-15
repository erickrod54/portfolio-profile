import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**Portfolio-erick - version 56.10 - utils - Features:
 * 
 *      --> Migrating 'cn' to merge tailwind styles
 * 
 * Notes: cn use to:
 * 
 *  1.  Removes false / null / undefined automatically
 *	2.	Resolves Tailwind conflicts
 *	3.	Works perfectly with CVA variants
 *	4.	Keeps class logic declarative
 *
 */

/**javascript util that get the full current year */
export const getCurrentYear = () => {
    return new Date().getFullYear();
}

// standard cn util
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}