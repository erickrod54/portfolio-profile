import styled from "styled-components"

/**Portfolio-erick - version 42.03 - FloatCard
 *  - Features:
 * 
 *      --> Building 'IsoPro'.
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

&:hover .text {
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
const FloatCard = () => {

    return(
        <FloatCardWrapper> 
        <div class="card">
        <ul>
            <li class="iso-pro">
            <span></span>
            <span></span>
            <span></span>
            <a href="/#">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    class='svg' 
                    viewBox="0 0 448 512"><path 
                    d="M224 336c74.6 0 138.4-46.4 164-112l4 0c13.3 0 24-10.7 24-24l0-80c0-13.3-10.7-24-24-24l-4 0C362.4 30.4 298.6-16 224-16S85.6 30.4 60 96l-4 0c-13.3 0-24 10.7-24 24l0 80c0 13.3 10.7 24 24 24l4 0c25.6 65.6 89.4 112 164 112zM208 80l32 0c53 0 96 43 96 96s-43 96-96 96l-32 0c-53 0-96-43-96-96s43-96 96-96zM16 484.6C16 499.7 28.3 512 43.4 512l52.6 0 0-48c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32l0 48 52.6 0c15.1 0 27.4-12.3 27.4-27.4 0-59.8-31.9-112.2-79.6-141-36.4 25.5-80.6 40.4-128.4 40.4s-92-14.9-128.4-40.4C47.9 372.4 16 424.8 16 484.6zM183.3 141.5c-.9-3.3-3.9-5.5-7.3-5.5s-6.4 2.2-7.3 5.5l-6 21.2-21.2 6c-3.3 .9-5.5 3.9-5.5 7.3s2.2 6.4 5.5 7.3l21.2 6 6 21.2c.9 3.3 3.9 5.5 7.3 5.5s6.4-2.2 7.3-5.5l6-21.2 21.2-6c3.3-.9 5.5-3.9 5.5-7.3s-2.2-6.4-5.5-7.3l-21.2-6-6-21.2zM152 488l0 24 48 0 0-24c0-13.3-10.7-24-24-24s-24 10.7-24 24zm120-24c-13.3 0-24 10.7-24 24l0 24 48 0 0-24c0-13.3-10.7-24-24-24z"/></svg>
                </a>
            <div class="text">Log in</div>
            </li>
            <li class="iso-pro">
            <span></span>
            <span></span>
            <span></span>
            <a href="/#">
                <svg
                class="svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                >
                <path
                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                ></path>
                </svg>
            </a>
            <div class="text">Twitter</div>
            </li>
            <li class="iso-pro">
            <span></span>
            <span></span>
            <span></span>
            <a href="/#">
                <svg
                class="svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                >
                <path
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                ></path>
                </svg>
            </a>
            <div class="text">Instagram</div>
            </li>
        </ul>
        </div>
     </FloatCardWrapper>
    )
}

export default FloatCard;