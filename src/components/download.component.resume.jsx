import styled from 'styled-components';
import { PDFDownloadLink } from '@react-pdf/renderer';
import ResumePDF from './resume.component';
import { useDataContext } from '../contexts/context.data';

/**Portfolio-erick - version 56.04 - DownloadButton
 *  - Features:
 * 
 *      --> Building 'DownloadButton'.
 * 
 * Notes: This is the alternative button to place to 
 * download whereever is neededSS
 */

// Use your existing styled components or create a new one for the button
const DownloadButtonStyle = styled.a`
    /* Apply styles similar to your PrimaryButton component */
    display: inline-block;
    padding: 12px 25px;
    background-color: #2e8eff; /* Example Primary Color */
    color: #0a0a0a; /* Example Text Color */
    text-decoration: none;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
    
    &:hover {
        background-color: #55aaff;
    }
`;

const DownloadButton = () => {
    // We use the name property from the ResumeData for the filename
    const fileName = "Erick_Rodriguez_Resume.pdf"; 

    const { ResumeData } = useDataContext()

    return (
        <PDFDownloadLink 
            document={<ResumePDF data={ ResumeData } />} 
            fileName={fileName}
        >
            {/* The PDFDownloadLink passes state (loading, error) to its child function */}
            {({ loading }) => (
                <DownloadButtonStyle as="button">
                    {loading ? 'Generating PDF...' : 'Download Resume (PDF)'}
                </DownloadButtonStyle>
            )}
        </PDFDownloadLink>
    );
};

export default DownloadButton;
