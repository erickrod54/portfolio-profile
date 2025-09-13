import styled from "styled-components"
import { DiscordIcon } from "./index.components";

/**Portfolio-erick - version 43.01 - FloatCard
 *  - Features:
 * 
 *      --> Placing fifth 'IsoShape'.
 * 
 * Notes: This component isolates the isometric
 * proyection styles in its own component 
 */

const IsoPro = styled.li`
  transition: 0.5s;

&:hover a > .svg {
  transform: translate(15px, -15px);
  border-radius: 100%;
}

&:hover > div {
  opacity: 1;
  transform: translate(25px, -2px) skew(-5deg);
}

&:hover .svg {
  transform: translate(5px, -5px);
}

& > span {
  opacity: 0;
  position: absolute;
  color: #1877f2;
  border-color: #1877f2;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.3),
    inset 0 0 5px rgba(255, 255, 255, 0.5), 0 5px 5px rgba(0, 0, 0, 0.164);
  border-radius: 50%;
  transition: all 0.3s;
  height: 60px;
  width: 60px;
}

&:hover > span {
  opacity: 1;
}

&:hover > span:nth-child(1) {
  opacity: 0.2;
}

&:hover > span:nth-child(2) {
  opacity: 0.4;
  transform: translate(5px, -5px);
}

&:hover > span:nth-child(3) {
  opacity: 0.6;
  transform: translate(10px, -10px);
}
`

const TextIso = styled.div`
  opacity: 0;
  border-radius: 5px;
  padding: 5px;
  transition: all 0.3s;
  color: rgb(255, 174, 0);
  background-color: rgba(255, 255, 255, 0.3);
  position: absolute;
  z-index: 9999;
  box-shadow: -5px 0 1px rgba(153, 153, 153, 0.2),
    -10px 0 1px rgba(153, 153, 153, 0.2),
    inset 0 0 20px rgba(255, 255, 255, 0.3),
    inset 0 0 5px rgba(255, 255, 255, 0.5), 0 5px 5px rgba(0, 0, 0, 0.082);
`

const FloatList = styled.div`
    position:fixed;
    top:50%;
    left:20px;
    transform:translateY(-50%);
    z-index:999;

    max-width: fit-content;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    gap: 1rem;
    backdrop-filter: blur(15px);
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.192),
      inset 0 0 5px rgba(255, 255, 255, 0.274), 0 5px 5px rgba(0, 0, 0, 0.164);
    transition: 0.5s;
  
  &:hover {
  animation: ease-out 5s;
  background: rgba(173, 173, 173, 0.05);
  }

  & ul {
    padding: 1rem;
    display: flex;
    list-style: none;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    flex-direction: column;
  }

  & ul li {
    cursor: pointer;
  }
`

const FloatCardWrapper = styled.div` 
.card {
  position:fixed;
  top:50%;
  left:20px;
  transform:translateY(-50%);
  z-index:999;

  max-width: fit-content;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  gap: 1rem;
  backdrop-filter: blur(15px);
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.192),
    inset 0 0 5px rgba(255, 255, 255, 0.274), 0 5px 5px rgba(0, 0, 0, 0.164);
  transition: 0.5s;
}

.card:hover {
  animation: ease-out 5s;
  background: rgba(173, 173, 173, 0.05);
}

.card ul {
  padding: 1rem;
  display: flex;
  list-style: none;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  flex-direction: column;
}

.card ul li {
  cursor: pointer;
}

.svg {
  transition: all 0.3s;
  /* if you find some problems change w - h : 30px*/
  padding: 1rem;
  height: 60px;
  width: 60px;
  border-radius: 100%;
  color: rgb(255, 174, 0);
  fill: currentColor;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.3),
    inset 0 0 5px rgba(255, 255, 255, 0.5), 0 5px 5px rgba(0, 0, 0, 0.164);
}

.text {
  opacity: 0;
  border-radius: 5px;
  padding: 5px;
  transition: all 0.3s;
  color: rgb(255, 174, 0);
  background-color: rgba(255, 255, 255, 0.3);
  position: absolute;
  z-index: 9999;
  box-shadow: -5px 0 1px rgba(153, 153, 153, 0.2),
    -10px 0 1px rgba(153, 153, 153, 0.2),
    inset 0 0 20px rgba(255, 255, 255, 0.3),
    inset 0 0 5px rgba(255, 255, 255, 0.5), 0 5px 5px rgba(0, 0, 0, 0.082);
}

/*isometric prooyection*/
.iso-pro {
  transition: 0.5s;
}
.iso-pro:hover a > .svg {
  transform: translate(15px, -15px);
  border-radius: 100%;
}

.iso-pro:hover .text {
  opacity: 1;
  transform: translate(25px, -2px) skew(-5deg);
}

.iso-pro:hover .svg {
  transform: translate(5px, -5px);
}

.iso-pro span {
  opacity: 0;
  position: absolute;
  color: #1877f2;
  border-color: #1877f2;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.3),
    inset 0 0 5px rgba(255, 255, 255, 0.5), 0 5px 5px rgba(0, 0, 0, 0.164);
  border-radius: 50%;
  transition: all 0.3s;
  height: 60px;
  width: 60px;
}

.iso-pro:hover span {
  opacity: 1;
}

.iso-pro:hover span:nth-child(1) {
  opacity: 0.2;
}

.iso-pro:hover span:nth-child(2) {
  opacity: 0.4;
  transform: translate(5px, -5px);
}

.iso-pro:hover span:nth-child(3) {
  opacity: 0.6;
  transform: translate(10px, -10px);
}
`

const IsoShape = styled.span`

`

const FloatCard = () => {

    return(
        <FloatCardWrapper> 
        <FloatList>
        <ul>
            <IsoPro>
            <IsoShape></IsoShape>
            <IsoShape></IsoShape>
            <IsoShape></IsoShape>
            <a href="/#">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    class='svg' 
                    viewBox="0 0 448 512"><path 
                    d="M224 336c74.6 0 138.4-46.4 164-112l4 0c13.3 0 24-10.7 24-24l0-80c0-13.3-10.7-24-24-24l-4 0C362.4 30.4 298.6-16 224-16S85.6 30.4 60 96l-4 0c-13.3 0-24 10.7-24 24l0 80c0 13.3 10.7 24 24 24l4 0c25.6 65.6 89.4 112 164 112zM208 80l32 0c53 0 96 43 96 96s-43 96-96 96l-32 0c-53 0-96-43-96-96s43-96 96-96zM16 484.6C16 499.7 28.3 512 43.4 512l52.6 0 0-48c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32l0 48 52.6 0c15.1 0 27.4-12.3 27.4-27.4 0-59.8-31.9-112.2-79.6-141-36.4 25.5-80.6 40.4-128.4 40.4s-92-14.9-128.4-40.4C47.9 372.4 16 424.8 16 484.6zM183.3 141.5c-.9-3.3-3.9-5.5-7.3-5.5s-6.4 2.2-7.3 5.5l-6 21.2-21.2 6c-3.3 .9-5.5 3.9-5.5 7.3s2.2 6.4 5.5 7.3l21.2 6 6 21.2c.9 3.3 3.9 5.5 7.3 5.5s6.4-2.2 7.3-5.5l6-21.2 21.2-6c3.3-.9 5.5-3.9 5.5-7.3s-2.2-6.4-5.5-7.3l-21.2-6-6-21.2zM152 488l0 24 48 0 0-24c0-13.3-10.7-24-24-24s-24 10.7-24 24zm120-24c-13.3 0-24 10.7-24 24l0 24 48 0 0-24c0-13.3-10.7-24-24-24z"/></svg>
                </a>
            <TextIso>Log in</TextIso>
            </IsoPro>
            <IsoPro>
            <IsoShape></IsoShape>
            <IsoShape></IsoShape>
            <span></span>
              <DiscordIcon className={'svg'}/>
            <TextIso>Discord</TextIso>
            </IsoPro>
            <IsoPro>
            <span></span>
            <span></span>
            <span></span>
            <a href="/#">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 384 512"
                  class='svg'
                  >
                  <path d="M0 64C0 28.7 28.7 0 64 0L213.5 0c17 0 33.3 6.7 45.3 18.7L365.3 125.3c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm208-5.5l0 93.5c0 13.3 10.7 24 24 24L325.5 176 208 58.5zM175 441c9.4 9.4 24.6 9.4 33.9 0l64-64c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-23 23 0-86.1c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 86.1-23-23c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64z"/></svg>
            </a>
            <TextIso>Resume</TextIso>
            </IsoPro>
        </ul>
        </FloatList>
     </FloatCardWrapper>
    )
}

export default FloatCard;