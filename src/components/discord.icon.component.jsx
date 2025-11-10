import { useDataContext } from '../contexts/context.data';
import { useIconsContext } from '../contexts/context.icons.data';
import IconComponent from './icon.component';

/**Portfolio-erick - version 53.19 - SocialComponent -
* Features:

    --> Clearing local 'social' data

* Notes: className has .svg class for this component
*later will be refacotored
**/

const DiscordIcon = ({ className }) => {

  const { DiscordIconData } = useIconsContext();
  const { social } = useDataContext();
  
  const [,,,,{url: url_discord }] = social;

  return(
              <a href={url_discord} target="_blank" rel="noopener noreferrer">
                <IconComponent className={className} data={DiscordIconData} />
              </a>
  )
}

export default DiscordIcon;