import { TbCloudComputing } from 'react-icons/tb'
import { SiJavascript } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'
import { SiVisualstudiocode } from 'react-icons/si'
import { SiAirtable } from 'react-icons/si'
import { SiRedux } from 'react-icons/si'
import { GoMarkGithub } from 'react-icons/go'
import {  BsLinkedin } from 'react-icons/bs'
import { construction } from './assets'

/**Portfolio-erick - version 6.04 - data js -
 * Features:
 * 
 *      --> Building 'constructionbkg' to set
 *          a background for 'UnderConstruction'
 *          Component
 * 
 *      --> Changing versioning to two digits.
 * 
 * Notes: By this version changes to the data
 * has been made in order to get the essential
 * information and email feature
 */

 export const constructionbkg = construction;

export const NavBarData = [
  /**{
      id:2,
      urlname:'login',
      url:'/login'
    }, */
    {
      id:3,
      urlname:'contact',
      url:'/contact'
    }
   
]

export const ResumeData = [
    {
      id:1,
      myname:'Erick G. Rodriguez C.',
      intro:'I am a dedicated, self-motivated Engineer who strives for excellence . My co-workers would most likely describe me as a team player. I am not afraid to new experiences as I’m always eager to learn new things. My previous work experience includes IT and networking systems on Windows and Linux. In the last years i\'m actively developing software'  
    },
    {
      id:2,
      skills:[
        {
            id:1,
            skillname:'API\'s',
            icon:<TbCloudComputing />
        },
        {
            id:2,
            skillname:'JavaScript',
            icon: <SiJavascript />
        },
        {
            id:3,
            skillname:'React JS Library',
            icon:<FaReact />
        },
        {
            id:4,
            skillname:'VS Code',
            icon:<SiVisualstudiocode />
        },
        {
            id:5,
            skillname:'Airtables',
            icon:<SiAirtable />
        },
        {
            id:6,
            skillname:'Redux Library for state management',
            icon:<SiRedux />
        }
      ]               
    },
    {
      id:3,
      experience:[
        {
            id:1,
            rol:'Systems technician',
            location:'Mayoralty of San Cristobal, Venezuela',
            period:'Jan 2014 - Mar 2014',
            task:'Working with computers, including maintenance, installing software, troubleshooting software on computers, networks, and printers.'
        },
        {
            id:2,
            rol:'Network coordinator and communications',
            location:'Mayoralty of San Cristobal, Venezuela',
            period:'Mar 2014 - Oct 2014',
            task:'Setting up networks and performing maintenance. Monitoring principal network gateways using pfSense, balancing, and bonding at the network layer. I lead a team of three co-workers on a project involving cable structured planning and reported progress to management.'
        },
        {
            id:3,
            rol:'Network Administrator',
            location:'Mayoralty of San Cristobal, Venezuela',
            period:'Jan 2014 - Mar 2014',
            task:'I worked with the server administrator improving the network security scheme. Utilized load balancing to optimize internet bandwith. Worked with pfSense, cloud systems and owncloud to manage files. Installed hotspots for tax season tasks through the Mayor of the City of San Cristobal using Motorola-based technology. At this time I lead a team of four co-workers and reported progress to management.'
        }
      ]  
    },
    {
        id:4,
        education:[
            {
                id:1,
                institution:' UNEFA - Army Forces College, San Cristobal, Venezuela',
                degree:'Systems Engineer',
                description:'I obtained a Systems Engineering degree as a Data Analyst.',
                period:'Jan 2005 - Dec 2010'
            }
        ]
    }
]

export const social = [
    {
        name:'Github',
        icon:<GoMarkGithub />,
        url:'https://github.com/erickrod54'
    },
    {
        name:'Linkdin',
        icon:<BsLinkedin />,
        url:'https://www.linkedin.com/in/erickrodriguezcardenas'
    }
]