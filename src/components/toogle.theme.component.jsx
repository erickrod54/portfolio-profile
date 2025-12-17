import { cn } from '../utils/utils.index';
import { switchVariants } from './ui-components/theme.toggle.variant.component';

/**Portfolio-erick - version 56.13 - ToggleButton -
* Features:

    --> Building 'ToggleButton'

* Notes: 'ToggleButton' has been built it using 
* 'cva + react state + tailwind' and its a 
* component level 4 because:
*
*  Level 4 — CVA + full behavioral component:
*
*	•	It has state
*	•	It controls theme
*	•	It needs accessibility
*	•	It exposes a clean API
*
**/

const ToggleButton = ({ theme, size, className, ...props }) => {
    return (
        /* The Label Container */
        <label className={cn(switchVariants({ theme, size }), className)}>
            <input
                type="checkbox"
                className="peer sr-only" // sr-only is cleaner than manual opacity-0
                {...props}
            />

            {/* Slider (The Background and Moon/Sun) */}
            <span
                className="
                absolute inset-0 rounded-[30px] bg-[#20262c]
                transition-all duration-500
                peer-checked:bg-[#5494de]
                
                /* The Moon/Sun Circle */
                before:content-['']
                before:absolute
                before:h-[1.4em] before:w-[1.4em]
                before:left-[10%] before:bottom-[15%]
                before:rounded-full
                before:bg-[#20262c]
                before:transition-all before:duration-500
                before:shadow-[inset_8px_-4px_0_0_#ececd9,-4px_1px_4px_0_#dadada]
                
                /* Sun State */
                peer-checked:before:translate-x-full
                peer-checked:before:shadow-[inset_15px_-4px_0_15px_#efdf2b,0_0_10px_0_#efdf2b]
                "
            />

            {/* Decoration (The Stars/Clouds) */}
            <span
                className="
                absolute h-[2px] w-[2px] rounded-full
                right-[20%] top-[15%]
                bg-[#e5f041e6]
                backdrop-blur-[10px]
                transition-all duration-500
                /* Star Shadows */
                shadow-[-7px_10px_0_#e5f041e6,8px_15px_0_#e5f041e6,-17px_1px_0_#e5f041e6,-20px_10px_0_#e5f041e6,-7px_23px_0_#e5f041e6,-15px_25px_0_#e5f041e6]
                
                /* Transition to Clouds */
                peer-checked:-translate-x-[20px]
                peer-checked:w-[10px] peer-checked:h-[10px]
                peer-checked:bg-white
                /* Cloud Shadows */
                peer-checked:shadow-[-12px_0_0_white,-6px_0_0_1.6px_white,5px_15px_0_1px_white,1px_17px_0_white,10px_17px_0_white]
                "
            />
        </label>
    );
};

export default ToggleButton;
