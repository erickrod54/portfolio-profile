import { useIconsContext } from '../contexts/context.icons.data';
import IconComponent from './icon.component';

/**Portfolio-erick - version 53.17 - SocialComponent -
* Features:

    --> Changing 'context' imoport

* Notes: className has .svg class for this component
*later will be refacotored
**/

const social = [
    {
        name:'Github',
        icon: 'githubIcon',
        url:'https://github.com/erickrod54'
    },
    {
        name:'Linkdin',
        icon: 'linkedlnIcon',
        url:'https://www.linkedin.com/in/erickrodriguezcardenas'
    },
    {
        name:'X',
        icon:'',
        url:'https://x.com/erickdev54?s=21'
    },
    {
        name:'Twitch',
        icon: '',
        url:'https://dashboard.twitch.tv/u/erickdev54/'
    },
    {
        name:'Discord',
        icon: '',
        url:'https://discord.gg/t8Ka7me4en'
    },
]

const DiscordIcon = ({ className }) => {

  const { DiscordIconData } = useIconsContext()
  
  const [,,,,{url: url_discord }] = social;

  return(
              <a href={url_discord} target="_blank" rel="noopener noreferrer">
                <IconComponent className={className} data={DiscordIconData} />
              </a>
  )
}

export default DiscordIcon;