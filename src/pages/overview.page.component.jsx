import { useDataContext } from "../contexts/context.data";
import FooterAllPages from "./footer.all.pages";
import ThreeColumnLayout from "./three.layout.component";

/**Portfolio-erick - version 55.09 - OverviewPage -
 * Features:
 * 
 *      --> Testing 'DummyFeaturesData'      
 * 
 * Notes: 'OverviewPage' 
 */

const OverviewPage = () => {

    const { DummyFeaturesData } = useDataContext();

    return (
        <FooterAllPages>
            <ThreeColumnLayout data={DummyFeaturesData} />
        </FooterAllPages>
    )
}

export default OverviewPage;