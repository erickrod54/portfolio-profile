import { github, linkedin, profileImage } from "./assets/index.assets";
import { SiAirtable } from 'react-icons/si';
import { SiVisualstudiocode } from 'react-icons/si';
import { SiRedux } from 'react-icons/si';

import { faCloudArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faSquareJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { SiReact, SiJavascript } from 'react-icons/si';
import { BiCloudDrizzle  } from 'react-icons/bi';

/**Portfolio-erick - version 15.16 - data js
 *  - Features:
 * 
 *      --> Updating 'social' data set with discord url.
 * 
 * Notes: This components is adapted to the new layout
 * and is functional working, pending for layout the 
 * component itself
 */

/**Data sets for IconComponent - START */

export const amazonAwsData = [
  {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 -30 150 150',
    width: '30',
    height: '30',
  },
  {
    fill: '#F90',
    d: 'M122.714 62.703c5.28-.643 16.924-2.027 18.997.643 2.072 2.621-2.319 13.649-4.293 18.544-.592 1.484.691 2.077 2.023.94 8.684-7.319 10.954-22.6 9.178-24.825-1.777-2.175-17.023-4.055-26.3 2.473-1.431 1.038-1.184 2.423.395 2.225z'
  },
  {
    fill: '#F90',
    d: 'M74.852 89.456c20.28 0 43.865-6.38 60.099-18.396 2.664-1.978.345-4.994-2.369-3.758-18.207 7.714-37.993 11.473-56.003 11.473-26.694 0-52.5-7.368-73.42-19.533-1.827-1.088-3.208.791-1.679 2.176 19.343 17.505 44.951 28.038 73.372 28.038z'
  },
  {
    fill:'#252F3E',
    d:'M42.632 32.835c0 1.83.197 3.313.542 4.401a26.505 26.505 0 001.58 3.56c.246.396.345.792.345 1.138 0 .495-.296.99-.938 1.484l-3.108 2.077c-.444.296-.889.445-1.283.445-.494 0-.987-.248-1.48-.693a15.29 15.29 0 01-1.777-2.324 38.28 38.28 0 01-1.53-2.918c-3.848 4.55-8.684 6.825-14.506 6.825-4.145 0-7.45-1.187-9.868-3.56-2.418-2.374-3.652-5.54-3.652-9.495 0-4.204 1.48-7.616 4.49-10.187 3.01-2.572 7.007-3.857 12.09-3.857 1.677 0 3.404.148 5.23.395 1.825.248 3.7.643 5.674 1.088v-3.61c0-3.758-.79-6.379-2.32-7.912-1.578-1.533-4.243-2.274-8.042-2.274-1.727 0-3.503.197-5.329.642a39.247 39.247 0 00-5.329 1.682 14.14 14.14 0 01-1.727.643c-.345.098-.592.148-.79.148-.69 0-1.036-.494-1.036-1.533V6.577c0-.791.1-1.385.346-1.73.246-.347.69-.693 1.381-1.04 1.727-.89 3.8-1.631 6.217-2.225C20.23.94 22.797.642 25.51.642c5.872 0 10.164 1.336 12.927 4.006 2.714 2.67 4.096 6.726 4.096 12.165v16.022h.099zm-20.033 7.517c1.628 0 3.306-.297 5.082-.89 1.776-.594 3.355-1.682 4.687-3.165.79-.94 1.382-1.978 1.678-3.165.296-1.187.493-2.621.493-4.302v-2.077a41.135 41.135 0 00-4.539-.84 37.099 37.099 0 00-4.638-.298c-3.306 0-5.724.643-7.352 1.978-1.628 1.336-2.418 3.215-2.418 5.687 0 2.324.592 4.055 1.826 5.242 1.184 1.236 2.911 1.83 5.18 1.83zm39.621 5.34c-.888 0-1.48-.148-1.875-.494-.394-.297-.74-.99-1.036-1.929L47.714 5.044c-.296-.99-.444-1.632-.444-1.978 0-.791.394-1.236 1.184-1.236h4.835c.938 0 1.58.148 1.925.494.395.297.69.99.987 1.929l8.29 32.736 7.697-32.736c.246-.99.542-1.632.937-1.929.395-.297 1.085-.494 1.974-.494h3.947c.938 0 1.579.148 1.974.494.395.297.74.99.937 1.929l7.796 33.132L98.29 4.253c.295-.99.64-1.632.986-1.929.395-.297 1.036-.494 1.925-.494h4.588c.79 0 1.234.395 1.234 1.236 0 .247-.049.494-.099.791a7.041 7.041 0 01-.345 1.236L94.688 43.32c-.297.989-.642 1.631-1.037 1.928-.394.297-1.036.495-1.875.495h-4.243c-.938 0-1.58-.149-1.974-.495-.394-.346-.74-.989-.937-1.978l-7.648-31.895-7.599 31.846c-.247.989-.543 1.632-.938 1.978-.394.346-1.085.494-1.973.494H62.22zm63.405 1.336c-2.566 0-5.132-.297-7.599-.89-2.467-.594-4.391-1.237-5.674-1.979-.79-.445-1.332-.94-1.53-1.384a3.503 3.503 0 01-.296-1.385v-2.522c0-1.038.395-1.533 1.135-1.533.296 0 .592.05.888.148.296.1.74.297 1.234.495a26.791 26.791 0 005.428 1.73c1.973.396 3.898.594 5.871.594 3.109 0 5.527-.544 7.204-1.632 1.678-1.088 2.566-2.67 2.566-4.698 0-1.384-.444-2.521-1.332-3.461-.888-.94-2.566-1.78-4.984-2.571l-7.154-2.226c-3.602-1.137-6.267-2.818-7.895-5.044-1.628-2.176-2.467-4.599-2.467-7.17 0-2.077.444-3.907 1.332-5.489.888-1.582 2.072-2.967 3.553-4.055 1.48-1.137 3.157-1.978 5.131-2.571 1.974-.594 4.046-.841 6.217-.841 1.086 0 2.221.05 3.306.198 1.135.148 2.171.346 3.207.544.987.247 1.925.494 2.813.79.888.298 1.579.594 2.072.891.691.396 1.185.791 1.481 1.236.296.396.444.94.444 1.632V8.16c0 1.039-.395 1.583-1.135 1.583-.395 0-1.036-.198-1.875-.594-2.813-1.285-5.971-1.928-9.474-1.928-2.812 0-5.033.445-6.562 1.384-1.53.94-2.319 2.374-2.319 4.402 0 1.384.493 2.57 1.48 3.51s2.812 1.88 5.427 2.72l7.007 2.226c3.553 1.137 6.118 2.72 7.648 4.747 1.53 2.027 2.27 4.351 2.27 6.923 0 2.126-.444 4.055-1.283 5.736-.888 1.681-2.072 3.165-3.602 4.352-1.53 1.236-3.355 2.126-5.477 2.769-2.22.692-4.54 1.039-7.056 1.039z'
  }
];

export const pythonData = [
  {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 256 255',
    width: '30',
    height: '30',
  },
  {
    fill: '#3776AB',
    d: 'M126.9 0c-10.9 0-21.3.9-30.3 2.6C67.6 8.4 61.1 20.7 61.1 39.1v28.2h66.4v9.4H40.6c-18.8 0-35.2 11.3-40.5 32.8C-4.6 138 2.3 161 8.5 175.3c6.1 13.7 21.3 22.6 40.3 22.6h22.1v-30.5c0-19.7 17.1-37.2 36.8-37.2h66.3c16.3 0 30.3-13.5 30.3-29.8V39.1c0-15.9-13.3-26.9-28.4-29.8-10.2-1.9-21.1-3.2-31.9-3.3zM94.8 20.7c6.8 0 12.3 5.5 12.3 12.3s-5.5 12.3-12.3 12.3-12.3-5.5-12.3-12.3 5.5-12.3 12.3-12.3z'
  },
  {
    fill: '#FFD43B',
    d: 'M234.5 76.5v30.5c0 19.7-17.1 37.2-36.8 37.2h-66.3c-16.3 0-30.3 13.5-30.3 29.8v61.3c0 15.9 13.3 26.9 28.4 29.8 17.9 3.5 34.9 4.1 50.6 0 14.5-3.7 27.6-11.2 27.6-29.8v-28.2h-66.4v-9.4h86.9c18.8 0 35.2-11.3 40.5-32.8 5.6-28.5-1.3-51.4-7.5-65.7-6.1-13.7-21.3-22.6-40.3-22.6h-22.1zM160 219.3c6.8 0 12.3 5.5 12.3 12.3s-5.5 12.3-12.3 12.3-12.3-5.5-12.3-12.3 5.5-12.3 12.3-12.3z'
  }
];

/**Data sets for IconComponent - END */

export const profileImagePic = profileImage;

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

/**pending adding youtube and tik tok */
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