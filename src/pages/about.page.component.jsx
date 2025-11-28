import { useDataContext } from "../contexts/context.data";
import FooterAllPages from "./footer.all.pages";
import ThreeColumnLayout from "./three.layout.component";

/**Portfolio-erick - version 55.13 - AboutPage -
 * Features:
 * 
 *      --> Adding 'AboutPageData'      
 * 
 * Notes: This the AboutPage where it tells
 * our journey
 */

const AboutPage = () => {

    const { AboutPageData } = useDataContext()

    return (
        <FooterAllPages>
            <ThreeColumnLayout data={AboutPageData}/>
        </FooterAllPages>
    )
}

export default AboutPage;