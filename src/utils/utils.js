/**Portfolio-erick - version 54.19 - utils - Features:
 * 
 *      --> Migrating 'getCurrentYear' to Vite version
 * 
 * Notes: This component receives 'children' components
 */

/**javascript util that get the full current year */
export const getCurrentYear = () => {
    return new Date().getFullYear();
}