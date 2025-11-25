import { useDataContext } from "../contexts/context.data";
import FooterAllPages from "./footer.all.pages";
import ThreeColumnLayout from "./three.layout.component";

/**Portfolio-erick - version 55.08 - OverviewPage -
 * Features:
 * 
 *      --> Building 'OverviewPage'      
 * 
 * Notes: 'OverviewPage' 
 */

const OverviewPage = () => {

    const { OverviewData } = useDataContext();

    return (
        <FooterAllPages>
            <ThreeColumnLayout data={OverviewData} />
        </FooterAllPages>
    )
}

export default OverviewPage;