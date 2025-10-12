import { usePortfolioContext } from "../context";
import { IconComponent } from "./index.components";

/**Portfolio-erick - version 50.05 - SocialComponent -
* Features:

    --> Removing local 'DiscordIconData'

* Notes: className has .svg class for this component
*later will be refacotored
**/

const DiscordIcon = ({ className }) => {

  const { social, DiscordIconData } = usePortfolioContext()

  const [,,,,{url: url_discord }] = social;

  return(
              <a href={url_discord} target="_blank" rel="noopener noreferrer">
                <IconComponent className={className} data={DiscordIconData} />
              </a>
  )
}

export default DiscordIcon;