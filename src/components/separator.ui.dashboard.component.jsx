import * as React from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';

/**Portfolio-erick - version 56.07 - Separator -
* Features:

    -→> Importing and placing 'Separator' 

* Notes: The Separatoir is the component that
* divides the main title from the management 
* area, this component comes from Radix, and is 
* also a headless UI component
**/

const Separator = React.forwardRef(
    ({ className, orientation = 'horizontal', decorative = true, ...props }, ref) => (
        <SeparatorPrimitive.Root
            ref={ref}
            decorative={decorative}
            orientation={orientation}
            className={`shrink-0 bg-gray-200 ${orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]'} ${className}`}
            {...props}
        />
    )
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator }