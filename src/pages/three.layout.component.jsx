import styled, { css } from 'styled-components';

/**Portfolio-erick - version 55.08 - ThreeColumnLayout -
 * Features:
 * 
 *      --> Building 'ThreeColumnLayout'      
 * 
 * Notes: This 'ThreeColumnLayout' will be 
 * implemented as AboutPage and Overview 
 * layout
 */

const LayoutContainer = styled.section`
    width: 100%;
    max-width: 1200px; /* Standardize max width for content */
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
`;

// Defines the container for a single row (one idea/feature)
const ItemRow = styled.div`
    display: grid;
    /* Sets up 3 columns: Number, Content/Text, Image/Picture */
    grid-template-columns: 1fr 2fr 2fr;
    gap: 40px;
    align-items: center;
    min-height: 400px;
    margin-bottom: 80px;

    /* Logic for alternating layout */
    ${props => props.$alignRight && css`
        /* Reverse column order for odd/right-aligned items */
        grid-template-areas: "number image content";
        .content-area {
            grid-area: content;
            text-align: right;
        }
        .image-area {
            grid-area: image;
        }
        .number-area {
            grid-area: number;
            text-align: right;
        }
    `}

    ${props => !props.$alignRight && css`
        grid-template-areas: "number content image";
        .content-area {
            grid-area: content;
            text-align: left;
        }
        .image-area {
            grid-area: image;
        }
        .number-area {
            grid-area: number;
            text-align: left;
        }
    `}
`;

const NumberTag = styled.div`
    font-size: 15vw; /* Large size relative to viewport */
    font-weight: 700;
    opacity: 0.1;
    color: #FFF; /* Assuming white for contrast on your dark background */
    line-height: 1;
    user-select: none;
`;

const ContentArea = styled.div.attrs({ className: 'content-area' })`
    /* Styles for the title, subtitle, and text */
    max-width: 450px;
    padding-bottom: 20px; /* Space from the image */
    
    h3 {
        color: #BADA55; /* Use a highlight color for the small title */
        font-size: 0.9em;
        text-transform: uppercase;
        letter-spacing: 2px;
        margin-bottom: 5px;
    }
    h2 {
        color: #FFF;
        font-size: 2.2em;
        margin-bottom: 15px;
    }
    p {
        color: #ccc;
        line-height: 1.6;
        margin-bottom: 20px;
    }
    a {
        color: #2e8eff;
        text-decoration: none;
        font-weight: 600;
        &:hover { text-decoration: underline; }
    }
`;

const PictureWrapper = styled.div.attrs({ className: 'image-area' })`
    /* Styles for the image positioning */
    width: 100%;
    height: 100%;
    background-color: #222; /* Placeholder background */
    border-radius: 8px;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;


const ThreeColumnLayout = ({ data }) => {
    return (
        <LayoutContainer>
            {data.map((item, index) => {
                // Determine alignment: index 0, 2, 4... are left-aligned (alignRight=false)
                // index 1, 3, 5... are right-aligned (alignRight=true)
                const alignRight = index % 2 !== 0; 
                
                // The number to display (1-based index)
                const number = (index + 1).toString().padStart(2, '0');

                return (
                    <ItemRow key={index} $alignRight={alignRight}>
                        
                        {/* 1. NUMBER COLUMN */}
                        <div className="number-area">
                            <NumberTag>{number}</NumberTag>
                        </div>
                        
                        {/* 2. CONTENT COLUMN */}
                        <ContentArea>
                            <h3>{item.subtitle}</h3>
                            <h2>{item.title}</h2>
                            <p>{item.text}</p>
                            <a href="#">{item.linkText} →</a>
                        </ContentArea>
                        
                        {/* 3. PICTURE COLUMN */}
                        <PictureWrapper>
                            {/* You will replace the placeholder source with your actual image */}
                            <img src={item.imageUrl} alt={item.title} />
                        </PictureWrapper>

                    </ItemRow>
                );
            })}
        </LayoutContainer>
    );
};

export default ThreeColumnLayout;
