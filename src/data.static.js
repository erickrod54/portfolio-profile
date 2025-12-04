import { blackSmith, druidBalance, kingAndqueen, priestInsight, profilePicture, questPicture, roadMapPicture, warriorResolve } from "./assets/index.assets";

/**Portfolio-erick - version 56.04 - data js
 *  - Features:
 * 
 *      --> Adding 'ResumeData'.
 * 
 * Notes: This is the first test for context static 
 * data
 */

export const HeaderTitleData = '@erickdev';

export const social_title = [
  {
    id:1,
    name:'Erick Rodriguez',
    career:'Software Engineer'
  }
]

export const social = [
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

export const profilePictureImg = profilePicture;

export const data_test = 'testing data context';

export const DummyFeaturesData = [
  {
    subtitle: 'GET STARTED',
    title: 'What level of service are you?',
    text: 'Determining what level of service you need is an important tool when planning future projects. This guide will help you plan your next steps...',
    linkText: 'Read more',
    imageUrl: 'https://via.placeholder.com/450x400/0A0A0A/ccc?text=Idea+1+Image'
  },
  {
    subtitle: 'CORE ESSENTIALS',
    title: 'Picking the right Tech Stack!',
    text: 'The nice thing about beginning a new project is that you don\'t really need any heavy frameworks. Start with small, core libraries and grow from there.',
    linkText: 'Learn more',
    imageUrl: 'https://via.placeholder.com/450x400/0A0A0A/ccc?text=Idea+2+Image'
  },
  {
    subtitle: 'WHERE THE CODE LIVES',
    title: 'Understand Your Hosting & Deployment',
    text: 'To start, secure your domain, set up your CI/CD pipeline, and choose a reliable host. A solid foundation is key to performance.',
    linkText: 'See options',
    imageUrl: 'https://via.placeholder.com/450x400/0A0A0A/ccc?text=Idea+3+Image'
  }
];

export const OverviewData = [
  {
    subtitle: 'Forging the Future:',
    title: 'Ancient Power Meets AI Mastery',
    text: 'The battles of tomorrow demand more than steel and spellcraft. They require a unified front where legendary strategy converges with cutting-edge Artificial Intelligence. We don\'t just build solutions—we forge future-proof mastery, augmented by the wisdom of ages and the precision of the code.',
    linkText: 'Read more',
    imageUrl: blackSmith
  },
  {
    subtitle: 'Begin Your Quest',
    title: 'Gain Skills and Experience',
    text: 'Take the Roadmap to step from Classic Software Engineering + IA to Engineers Generalist',
    linkText: 'Learn more',
    imageUrl: roadMapPicture
  },
];

export const AboutPageData = [
  {
    subtitle: 'The Coalition of the Code',
    title: 'Our Mission',
    text: 'We are not just a company; we are a coalition of builders, protectors, and visionaries dedicated to pioneering solutions where others only see obstacles. Our strength comes from unity, blending diverse expertise',
    linkText: 'Read more',
    imageUrl: questPicture
  },
  {
    subtitle: 'The Warrior\'s',
    title: 'Resolve',
    text: 'Unwavering commitment to protect and defend your mission, ensuring stability and security.',
    linkText: 'Learn more',
    imageUrl: warriorResolve
  },
  {
    subtitle: 'The Priest\'s',
    title: 'Insight',
    text: 'Dedicated study and deep learning to heal complexity and reveal clear, ethical pathways forward.',
    linkText: 'See options',
    imageUrl: priestInsight
  },
  {
    subtitle: 'The Druid\'s',
    title: 'Balance',
    text: 'Integrating systems seamlessly and sustainably, creating harmony between nature, technology, and function.',
    linkText: 'See options',
    imageUrl: druidBalance
  },
    {
    subtitle: 'The King\'s and Queen\'s',
    title: 'Strategy',
    text: 'High-level vision and decisive leadership to guide every project from concept to conquest.',
    linkText: 'See options',
    imageUrl: kingAndqueen
  }
];

// src/data/teamData.js

export const TEAM_MEMBERS = [
    {
        id: 1,
        name: "Erick Rodríguez",
        title: "Founder & Lead Developer",
        image: "https://via.placeholder.com/300/353535/FFFFFF?text=Erick",
        bio: "Focused on clean architecture and performance optimization.",
        socials: { twitter: "#", linkedin: "#" }
    },
    {
        id: 2,
        name: "Carolina Bautista",
        title: "Design Lead",
        image: "https://via.placeholder.com/300/353535/FFFFFF?text=Sofia",
        bio: "Bridging the gap between beautiful aesthetics and intuitive UX.",
        socials: { twitter: "#", linkedin: "#" }
    },
    {
        id: 3,
        name: "Fernando Elorza",
        title: "Financial Strategist",
        image: "https://via.placeholder.com/300/353535/FFFFFF?text=Marcus",
        bio: "Driving growth through data-informed content and outreach.",
        socials: { twitter: "#", linkedin: "#" }
    },

];

export const ResumeData = {
  "personal": {
    "name": "Erick Rodriguez",
    "title": "Full Stack Engineer / AI Engineer",
    "email": "erickrod54@gmail.com",
    "dm": "https://discord.gg/t8Ka7me4en",
    "location": "Boynton Beach, FL",
    "linkedin": "https://www.linkedin.com/in/erickrodriguezcardenas",
    "github": "https://github.com/erickrod54",
    "website": "https://erickrod54.dev"
  },
  "summary": "Full Stack Developer specializing in React, JavaScript, TypeScript, and scalable UI architecture, with growing backend experience in Node.js, Python, C#, and Docker-based environments.Strong background in building component-driven interfaces, integrating APIs, optimizing performance, and developing production-ready features in startup environments.Experienced working in Linux ecosystems, Raspberry Pi setups, cloud self-hosting, and containerized workflows.Recognized for leadership, mentoring, and delivering clean, maintainable, high-quality code.",
  "skills": {
    "languages": ["JavaScript (ES6+)", "TypeScript", "Python", "C#"],
    "frameworks": ["React", "Node.js", "Next JS", "Vite"],
    "databases": ["Supabase", "PostgreSQL", "Firebase"],
    "tools": ["Git & Github workflow", "Vercel", "Auth0", "Netlify"],
    "soft skills":["Leadership & mentoring", "Team collaboration", "Clear communication", "Technical documentation", "Problem-solving"]
  },
  "experience": [
    {
      "company": "Sport Excitement",
      "title": "Front End Lead Developer → Full Stack Developer (Promoted)",
      "location": "Queens, NY (Remote)",
      "dates": "Aug 2023 – Present",
      "achievements": [
        "Lead front-end development while contributing to backend logic when needed.",
        "Architect scalable UI systems, reusable components, and maintainable full-stack structures.",
        "Implement API integrations and assist in client–server workflows.",
        "Oversee code reviews, developer onboarding, and engineering best practices.",
        "Work jointly with backend and design teams to deliver high-quality features.",
        "Maintain Linux/Docker development environments."
      ],
      "stakeholder":"Angel G. Trujillo — +1 (347) 296-7289"
    },
    {
      "company": "Sport Excitement",
      "title": "Front End Developer",
      "location": "Queens, NY (Remote)",
      "dates": "Feb 2023 – Aug 2023",
      "achievements": [
        "Built modular UI components using React and TypeScript.",
        "Implemented application state with Context API and custom hooks.",
        "Improved UI performance, code structure, and developer experience.",
        "Assisted in backend tasks involving API logic and data flow.",
        "Contributed to architecture and early design system development.",
      ],
      "stakeholder":"Angel G. Trujillo — +1 (347) 296-7289"
    },
    {
      "company": "CLO Solutions",
      "title": "Front End Developer",
      "location": "Florida (Remote)",
      "dates": "Jul 2022 – Dec 2022",
      "achievements": [
        "Built reusable UI components and layouts for scalable products.",
        "Implemented state management with Context API.",
        "Ensured responsive, cross-platform front-end experiences.",
        "Managed Git workflows, code reviews, and quality improvements.",
      ]
    },
    {
      "company": "Harley Davidson Motorcycles",
      "title": "Front End Developer",
      "location": "Medellín, Colombia",
      "dates": "Jul 2016 – Jul 2017",
      "achievements": [
        "Homeland Heroes Foundation Project",
        "Developed fundraising platform interfaces for veteran-focused foundation",
        "Integrated Airtable for real-time event and donation tracking.",
        "Optimized application performance and data-driven components",
        "Developed clean dashboards and high-quality event interfaces.",
      ]
    }
  ],
  "education": [
    {
      "institution": "UNEFA",
      "degree": "Systems Engineer (Data Analysis Focus)",
      "location": "San Cristóbal, Venezuela",
      "dates": "2005–2010"
    }
  ]
}
