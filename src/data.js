import { construction, github, linkedin } from "./assets/index.assets";

import { SiAirtable } from 'react-icons/si';
import { SiVisualstudiocode } from 'react-icons/si';
import { SiRedux } from 'react-icons/si';

import { faCloudArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faSquareJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { SiReact, SiJavascript } from 'react-icons/si';
import { BiCloudDrizzle  } from 'react-icons/bi';

/**Portfolio-erick - version 9.13 - data js
 *  - Features:
 * 
 *      --> writting 'skillIcons'.
 * 
 * Notes: This components is adapted to the new layout
 * and is functional working, pending for layout the 
 * component itself
 */

export const skillIcons = {
    "API's": { icon: <BiCloudDrizzle  />, color: "#E44D26" },
    "JavaScript": { icon: <SiJavascript />, color: "#F7DF1E" },
    "React JS Library": { icon: <SiReact />, color: "#61DAFB" },
    "VS Code": { icon: <SiVisualstudiocode />, color: "#007ACC" },
    "Airtables": { icon: <SiAirtable />, color: "#FFB400" },
    "Redux Library for state management": { icon: <SiRedux />, color: "#764ABC" }
};

const cloudWord = <FontAwesomeIcon icon={faCloudArrowDown} />;
const javaScript = <FontAwesomeIcon icon={faSquareJs} />;
const reactIcon = <FontAwesomeIcon icon={faReact} />;
const githubIcon = <img src={github} alt='github'/>;
const linkedlnIcon = <img width="180" height="180" src={linkedin} alt='linkedin'/>;

export const filePdf = <img width="64" height="64" src="https://img.icons8.com/external-bearicons-gradient-bearicons/64/external-PDF-file-extension-bearicons-gradient-bearicons.png" alt="external-PDF-file-extension-bearicons-gradient-bearicons"/>;

const vsCode = <SiVisualstudiocode />;
const airTables = <SiAirtable />;
const reduxIcon = <SiRedux />;


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
            icon: cloudWord
        },
        {
            id:2,
            skillname:'JavaScript',
            icon: javaScript
        },
        {
            id:3,
            skillname:'React JS Library',
            icon: reactIcon
        },
        {
            id:4,
            skillname:'VS Code',
            icon: vsCode
        },
        {
            id:5,
            skillname:'Airtables',
            icon: airTables
        },
        {
            id:6,
            skillname:'Redux Library for state management',
            icon: reduxIcon
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
        icon: githubIcon,
        url:'https://github.com/erickrod54'
    },
    {
        name:'Linkdin',
        icon: linkedlnIcon,
        url:'https://www.linkedin.com/in/erickrodriguezcardenas'
    }
]