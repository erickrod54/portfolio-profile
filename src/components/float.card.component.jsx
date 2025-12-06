import styled from "styled-components";
import DiscordIcon from "./discord.icon.component";
import { useDataContext } from "../contexts/context.data";
import { PDFDownloadLink } from "@react-pdf/renderer";
import ResumePDF from "./resume.component";

/**Portfolio-erick - version 56.04 - FloatCard
 *  - Features:
 * 
 *      --> Implementing 'PDFDownloadLink'.
 * 
 * Notes: Later on this will have it's own 
 * component.
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
const FloatItemsList = styled.ul`

`

const FloatCardWrapper = styled.div` 

.svg {
  transition: all 0.3s;
  /* if you find some problems change w - h : 30px*/
  padding: 1rem;
  height: 30px;
  width: 30px;
  border-radius: 100%;
  color: rgb(255, 174, 0);
  fill: currentColor;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.3),
    inset 0 0 5px rgba(255, 255, 255, 0.5), 0 5px 5px rgba(0, 0, 0, 0.164);
}

`

const IsoShape = styled.span`

`

const FloatCard = () => {

  const { ResumeData } = useDataContext(); // 1. Fetch data here

  const fileName = "Erick_Rodriguez_Resume.pdf";
  
    // Optional: Return null if data isn't ready yet, or use loading state.
    if (!ResumeData) {
        return null; 
    }

    return(
        <FloatCardWrapper> 
        <FloatList>
        <FloatItemsList>
            
            {/* 1. DISCORD ICON (Normal Link/Component) */}
            <IsoPro>
            <IsoShape></IsoShape>
            <IsoShape></IsoShape>
            <IsoShape></IsoShape>
              <DiscordIcon className={'svg'}/>
            <TextIso>Discord</TextIso>
            </IsoPro>

            {/* 2. RESUME ICON (PDFDownloadLink Integration) */}
            <IsoPro>
            <IsoShape></IsoShape>
            <IsoShape></IsoShape>
            <IsoShape></IsoShape>
            
            {/* 💥 REPLACE THE OLD <a href="#"/> WITH PDFDownloadLink */}
            <PDFDownloadLink
                // Pass the generated PDF component and data
                document={<ResumePDF data={ResumeData} />} 
                fileName={fileName}
            >
                {/* PDFDownloadLink passes { loading } to its child function */}
                {({ loading }) => (
                    // The child of PDFDownloadLink is what gets rendered as the link/button
                    <div style={{ pointerEvents: loading ? 'none' : 'auto' }}>
                        
                        {/* ⚠️ We need to ensure the SVG has the correct attributes */}
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 384 512"
                            // If loading, you can change the color or add a spinner style here
                            class='svg' 
                            style={{ opacity: loading ? 0.5 : 1 }}
                        >
                          <path d="M0 64C0 28.7 28.7 0 64 0L213.5 0c17 0 33.3 6.7 45.3 18.7L365.3 125.3c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm208-5.5l0 93.5c0 13.3 10.7 24 24 24L325.5 176 208 58.5zM175 441c9.4 9.4 24.6 9.4 33.9 0l64-64c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-23 23 0-86.1c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 86.1-23-23c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64z"/></svg>
                    </div>
                )}
            </PDFDownloadLink>

            <TextIso>
                {/* Optional: Show loading text on hover */}
                Resume 
            </TextIso>
            </IsoPro>
            
        </FloatItemsList>
        </FloatList>
     </FloatCardWrapper>
    )
}

export default FloatCard;