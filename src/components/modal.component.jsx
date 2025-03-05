import React from "react";
import { usePortfolioContext } from "../context";
import styled from "styled-components";
import { StyledModal } from "../styled-components/styled.components";

/**Portfolio-erick - version 8.15 - Modal - Features:
 * 
 *      --> Migrating 'StyledModal'
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
  
  
  const ModalContent = styled.div`
    background: var(--clr-white);
    width: 90vw;
    max-width: var(--fixed-width);
    padding: 3rem;
    border-radius: var(--radius);
    text-align: center;
    position: relative;
  `;