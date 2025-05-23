import styled from 'styled-components';

/**Portfolio-erick - version 20.19 - WaterTitle  -
 * Features:
 * 
 *      --> Refactoring 'StyledWrapper'
 * 
 * Notes: This data is to test WaterTitle, the data
 * will be relocated or provided to the component
 * that will consume this data.
 */

const WaterTitle = ({ title }) => {

  return (
    <StyledWrapper> 
      <div class="loader">
          <span>{title}</span>
          <span>{title}</span>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div` 
  width: auto;
  align-self: center;

  .loader {
    position: relative; 
    width: 140px; 
    height: 60px; 
  }

  .loader span {
    position: absolute;
    color: #fff;
    /* Keep centering relative to the .loader div */
    top: 50%;
    left: 50%; 
    transform: translate(-50%, -50%);
    font-size: 38px;
    letter-spacing: 5px;
  }

.loader span:nth-child(1) {
  color: transparent;
  -webkit-text-stroke: 0.3px rgb(128, 198, 255);
}

.loader span:nth-child(2) {
  color: rgb(128, 198, 255);
  -webkit-text-stroke: 1px rgb(128, 198, 255);
  animation: uiverse723 3s ease-in-out infinite;
}

@keyframes uiverse723 {
  0%, 100% {
    clip-path: polygon(0% 45%, 15% 44%, 32% 50%, 
     54% 60%, 70% 61%, 84% 59%, 100% 52%, 100% 100%, 0% 100%);
  }

  50% {
    clip-path: polygon(0% 60%, 16% 65%, 34% 66%, 
     51% 62%, 67% 50%, 84% 45%, 100% 46%, 100% 100%, 0% 100%);
  }
}`;

export default WaterTitle;
