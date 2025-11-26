import { useDataContext } from "../contexts/context.data";
import FooterAllPages from "./footer.all.pages";
import ThreeColumnLayout from "./three.layout.component";

/**Portfolio-erick - version 55.10 - AboutPage -
 * Features:
 * 
 *      --> Testing 'DummyFeaturesData'      
 * 
 * Notes: This the AboutPage where it tells
 * our journey
 */

const AboutPage = () => {

    const { DummyFeaturesData } = useDataContext()

    return (
        <FooterAllPages>
            <ThreeColumnLayout data={DummyFeaturesData}/>
        </FooterAllPages>
    )
}

export default AboutPage;