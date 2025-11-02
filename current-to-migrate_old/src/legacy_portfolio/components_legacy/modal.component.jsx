import styled from "styled-components";
import { usePortfolioContext } from "../context";
import { ModalContent } from "../styled-components/styled.components";

/**Portfolio-erick - version 17.03 - Modal - Features:
 * 
 *      --> Clearing 'StyledModal' import
 * 
 * Notes: This components is adapted to the new layout
 * and is functional working, pending for layout the 
 * component itself
 */
const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.isOpen ? "1" : "0")};
  z-index: ${(props) => (props.isOpen ? "999" : "-1")};
  transition: var(--transition);
`;

const Modal = ({ children }) => {
  

    const { isModalOpen } = usePortfolioContext();
  
    return (
      <StyledModal isOpen={isModalOpen}>
        <ModalContent>{children}</ModalContent>
      </StyledModal>
    );
  };
  
  export default Modal;
  
  