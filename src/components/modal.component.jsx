import { usePortfolioContext } from "../context";
import { ModalContent, StyledModal } from "../styled-components/styled.components";

/**Portfolio-erick - version 9.19 - Modal - Features:
 * 
 *      --> Clearing Imports
 * 
 * Notes: This components is adapted to the new layout
 * and is functional working, pending for layout the 
 * component itself
 */

const Modal = ({ children }) => {
    const { isModalOpen } = usePortfolioContext();
  
    return (
      <StyledModal isOpen={isModalOpen}>
        <ModalContent>{children}</ModalContent>
      </StyledModal>
    );
  };
  
  export default Modal;
  
  