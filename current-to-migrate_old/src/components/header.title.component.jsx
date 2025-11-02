import { useEffect, useRef, useState } from 'react';
import { BackText, FrontText, ButtonTitle, HeaderTitleWrapper } from '../styled-components/styled.components.index';
import { usePortfolioContext } from '../context';

/**Portfolio-erick - version 39.08 - HeaderTitle - Features:
 * 
 *      --> Clearing local 'HeaderTitleData'
 * 
 * Notes: None of your current CSS or styled components 
 * are referencing or using the data-text attribute
 */

const HeaderTitle = () => {
  const [isTextFilled, setIsTextFilled] = useState(true)
  const headerRef = useRef(null);

  const { HeaderTitleData } = usePortfolioContext();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTextFilled(false);
    }, 6000);

    // Scroll behavior to ensure @erickdev is top visible
    const scrollToHeader = () => {
      if (headerRef.current) {
        headerRef.current.scrollIntoView({
          behavior: 'instant', // use 'smooth' if you prefer animation
          block: 'start',
        });
      }
    };

    // Wait for the page layout to stabilize, then scroll
    const raf = requestAnimationFrame(scrollToHeader);
    const delay = setTimeout(scrollToHeader, 400);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(raf);
      clearTimeout(delay);
    };
  }, []);

  return (
    <HeaderTitleWrapper ref={headerRef}>
      <ButtonTitle>
        <FrontText $isFilled={isTextFilled}>&nbsp;{HeaderTitleData}&nbsp;</FrontText>
        <BackText aria-hidden="true" >&nbsp;{HeaderTitleData}&nbsp;</BackText>
      </ButtonTitle>
    </HeaderTitleWrapper>
  );
};

  

export default HeaderTitle;