// Import images
import dco from '../../assets/imgs/dco.webp';
import mentor from '../../assets/imgs/p-mentor.webp';
import ds3 from '../../assets/imgs/ds3.webp';
import shot from '../../assets/imgs/portfolio.webp';
import tball from '../../assets/imgs/tball.webp';
import upgrade from '../../assets/imgs/upgrade.png';
import project1 from '../../assets/imgs/projectup.webp';
import shot4 from '../../assets/imgs/traveltrendz.webp';
import shot6 from '../../assets/imgs/weather.webp';
import shot7 from '../../assets/imgs/rainfall.webp';
import meridian from '../../assets/imgs/meridian.webp';

const projects = [
  { 
    title: "Foundation Interface Lab",
    role: "Software Developer Research Intern", 
    image: meridian, 
    tools: "Next.js, Typescript, SASS, Tailwind CSS, Firebase",
    link: "https://github.com/meridian-ui/meridian",
    description: "Testing, building, and refining Meridian, a design framework for creating customizable overview-detail interfaces (ODIs) that bridge designers, developers, and end-users."
  },
  { 
    title: "Design Co",
    role: "Web Developer", 
    image: dco, 
    tools: "React, Typescript, Next.js, HTML, SASS",
    link: "https://ucsddesign.co/",
    description: "Creating interactive websites for UC San Diego's largest pre-professional design community events."
  },
  { 
    title: "UpGrade",
    role: "Web Developer", 
    image: upgrade, 
    tools: "React, Typescript, SASS, Radix UI",
    link: "https://upgrade25.ucsddesign.co/",
    description: "UP-Grade is a 10-week mentor-led program where students solve real product challenges and build industry-ready design skills."
  },

  { 
    title: "Triton Ball",
    role: "Frontend Developer", 
    image: tball, 
    tools: "React, Typescript, HTML, CSS, Shadcn",
    link: "https://www.tritonball.org/",
    description: "Triton Ball, a site for a UC San Diego's sports analytics club to share stats & games through data science."
  },


  { 
    title: "ACM x Hacks Projects", 
    role: "Project Mentor", 
    image: mentor, 
    tools: "React, ExpressJS, Node.js, HTML, MongoDB, CSS, Figma",
    link: "https://solanum.vercel.app/",
    description: "A dynamic web platform for beginner gardeners and local gardens at UC San Diego."},

  { 
    title: "DS3 Society", 
    role: "Software Developer", 
    image: ds3, 
    tools: "React, Typescript, Tailwind CSS, DaisyUI, MongoDB",
    link: "https://www.ds3ucsd.com/",
    description: "Revamping the main, consulting, and hackathon websites for the data science student society." },

  { 
    title: "Personal Portfolio", 
    role: "Personal Project", 
    image: shot, 
    tools: "React, HTML, CSS, Figma",
    link: "#",
    description: "Personal portfolio showcasing my projects, developed by me." },

  { 
    title: "ProjectUp", 
    role: "Frontend Developer", 
    image: project1, 
    tools: "React, Express.js, Node.js, MongoDB, Figma",
    link: "https://github.com/acmucsd-projects/su24a-hack-team-1/tree/main" ,
    description: "A platform for UC students to find and share local projects to build their resumes."},

  { 
    title: "TravelTrendz 2024", 
    role: "Personal Project", 
    image: shot4, 
    tools: "Python, BeautifulSoup, sqlite3, customtkinter",
    link: "https://github.com/ShamitaGoyal/lab3-project",
    description: "A travel recommendation app that scrapes destination data and provides personalized suggestions." },

  { 
    title: "Bay Forecast", 
    role: "Personal Project", 
    image: shot6, 
    tools: " Python, Multi-threading, Multi-processing, APIs, tkinter",
    link: "https://github.com/ShamitaGoyal/lab4-project" ,
    description: "A weather forecast program for Bay Area cities that compares multithreading vs. multiprocessing for speed."},
  
  { 
    title: "San Francisco Rainfall", 
    role: "Personal Project", 
    image: shot7, 
    tools: "Python, customtkinter",
    link: "https://github.com/ShamitaGoyal/lab2-project",
    description: "A rainfall analysis app for San Francisco, analyzing data from 1850 to 2023 to track historical trends and patterns in precipitation." }
];

export default projects;
