import React from "react";
import { usePortfolioContext } from "../context";
import styled from "styled-components";

/**Portfolio-erick - version 8.14 - Modal - Features:
 * 
 *      --> Refactoring Modal using styled components
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
  
  const ModalContent = styled.div`
    background: var(--clr-white);
    width: 90vw;
    max-width: var(--fixed-width);
    padding: 3rem;
    border-radius: var(--radius);
    text-align: center;
    position: relative;
  `;