// Import images
import dco from '../../assets/imgs/dco.png';
import mentor from '../../assets/imgs/p-mentor.png';
import ds3 from '../../assets/imgs/ds3.png';
import shot from '../../assets/imgs/portfolio.png';
import shot3 from '../../assets/imgs/catcar.png';
import project1 from '../../assets/imgs/projectup.png';
import shot4 from '../../assets/imgs/traveltrendz.png';
import shot6 from '../../assets/imgs/weather.png';
import shot7 from '../../assets/imgs/rainfall.png';

const projects = [
  { 
    title: "UCSD Design Co",
    role: "Web Developer", 
    image: dco, 
    tools: "React • Typescript • Next.js • HTML • SASS",
    link: "./null.html",
    description: "Creating interactive websites for large scale events for UCSD's largest pre-professional design community."
  },

  { 
    title: "ACM x Hacks Projects Team", 
    role: "Project Mentor", 
    image: mentor, 
    tools: "React • Typescript • Next.js • HTML • SASS",
    link: "./null.html",
    description: "A dynamic web platform for beginner gardeners, integrating view of nearby gardens at UCSD."},

  { 
    title: "UCSD DS3 Society", 
    role: "Software Developer", 
    image: ds3, 
    tools: "React • Typescript • Next.js • HTML • SASS",
    link: "./null.html",
    description: "This project is about buiding different types of websites which i was really proud of making because it showed a lot of my skills." },

  { 
    title: "Personal Portfolio", 
    role: "Personal Project", 
    image: shot, 
    tools: "React • Typescript • Next.js • HTML • SASS",
    link: "#",
    description: "This project is about buiding different types of websites which i was really proud of making because it showed a lot of my skills." },

  { 
    title: "CatCar", 
    role: "Software Developer Intern", 
    image: shot3, 
    tools: "React • Typescript • Next.js • HTML • SASS",
    link: "./null.html",
    description: "This project is about buiding different types of websites which i was really proud of making because it showed a lot of my skills." },

  { 
    title: "ProjectUp", 
    role: "Frontend Developer", 
    image: project1, 
    tools: "React • Typescript • Next.js • HTML • SASS",
    link: "https://github.com/acmucsd-projects/su24a-hack-team-1/tree/main" ,
    description: "This project is about buiding different types of websites which i was really proud of making because it showed a lot of my skills."},

  { 
    title: "TravelTrendz 2024", 
    role: "Personal Project", 
    image: shot4, 
    tools: "React • Typescript • Next.js • HTML • SASS",
    link: "https://github.com/ShamitaGoyal/lab3-project",
    description: "This project is about buiding different types of websites which i was really proud of making because it showed a lot of my skills." },

  { 
    title: "Bay Forecast", 
    role: "Personal Project", 
    image: shot6, 
    tools: "React • Typescript • Next.js • HTML • SASS",
    link: "https://github.com/ShamitaGoyal/lab4-project" ,
    description: "This project is about buiding different types of websites which i was really proud of making because it showed a lot of my skills."},
  
  { 
    title: "San Francisco Rainfall", 
    role: "Personal Project", 
    image: shot7, 
    tools: "React • Typescript • Next.js • HTML • SASS",
    link: "https://github.com/ShamitaGoyal/lab2-project",
    description: "This project is about buiding different types of websites which i was really proud of making because it showed a lot of my skills." }
];

export default projects;
