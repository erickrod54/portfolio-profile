import styled from "styled-components";

/**Portfolio-erick - version 46.17 - PrimaryButton -
 * Features:
 * 
 *      --> Implementing 'StyledButton' 
 * 
 * Notes: To substite the legacy body implementation.
 */


const StyledButton = styled.button`
&{
  position: relative;
  text-decoration: none;
  color: #fff;
  background: linear-gradient(45deg, #0ce39a, #69007f, #fc0987);
  padding: 14px 25px;
  border-radius: 10px;
  font-size: 1.25em;
  cursor: pointer;
}

& > span {
  position: relative;
  z-index: 1;
}

&::before {
  content: "";
  position: absolute;
  inset: 1px;
  background: #272727;
  border-radius: 9px;
  transition: 0.5s;
}

&:hover::before {
  opacity: 0.7;
}

&::after {
  content: "";
  position: absolute;
  inset: 0px;
  background: linear-gradient(45deg, #0ce39a, #69007f, #fc0987);
  border-radius: 9px;
  transition: 0.5s;
  opacity: 0;
  filter: blur(20px);
}

&:hover:after {
  opacity: 1;
}
`

const PrimaryButton = () => {

    return( 
    <StyledButton>
        <span>Go to Home</span>
    </StyledButton>
    )
}

export default PrimaryButton;