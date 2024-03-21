import { StaticImageData } from "next/image"
import questionMark from '../../../images/question_marks.svg'
import allStarsImg from '../../../images/allstars.staypluggedin.gg.webp'
import chainLImage from '../../../images/ChainLPicture.webp'
import cineTrainerImage from '../../../images/CineTrainerPicOg.webp'
import nextJsSvg from '../../../images/svg/nextjs-icon-svgrepo-com.svg'
import typeScriptSvg from '../../../images/svg/typescript-svgrepo-com.svg'
import cssSvg from '../../../images/svg/css-3-svgrepo-com.svg'
import sassSvg from '../../../images/svg/sass-svgrepo-com.svg'
import vercelSvg from '../../../images/svg/vercel-svgrepo-com.svg'
import tailwindSvg from '../../../images/svg/tailwind.svg'
import figmaSvg from '../../../images/svg/figma-svgrepo-com.svg'
import javaScriptSvg from '../../../images/svg/javascript-svgrepo-com.svg'
import reactSvg from '../../../images/svg/react-javascript-js-framework-facebook-svgrepo-com.svg'


type Projects = {
    src: StaticImageData;
    alt: string;
    frameWork: StaticImageData;
    language: StaticImageData;
    styling: StaticImageData;
    hosting: StaticImageData;
    frameWorkName: string;
    languageName: string;
    stylingName: string;
    hostingName: string;
    project_Name: string;
    project_summary: string;
    project_summary2: string;
    project_summary3: string;
    project_summary4: string;
    role: string;
    webLink: string;
    linkworks: boolean;
}

export const listOfProjects: Projects[] = [
    {
        src: cineTrainerImage,
        alt: 'Picture of CineTrainer Website',
        frameWork: nextJsSvg,
        language: typeScriptSvg,
        styling: sassSvg,
        hosting: vercelSvg,
        frameWorkName: 'NextJS',
        languageName: 'Typescript',
        stylingName: 'Sass',
        hostingName: 'Vercel',
        project_Name: 'CineTrainer',
        project_summary: `I came across a new player vs player mode on Cine2Nerdle, named Cine2Nerdle Battle, which required knowledge of movies, directors, and actors.`,
        project_summary2: `My objective was to create a website that would assist individuals with limited movie knowledge, like myself, to train and improve their familiarity with movie-related information.`,
        project_summary3: `As the sole person on this project, I carefully planned the website using Figma and Notion. For version control, I utilized Git. \n
        I developed the site using Next.js for efficient web page routing I used TypeScript as the primary programming language. and hosted the webpage on Vercel.\n
        The backbone of the project was the TMDB API, which allowed us to fetch and display specific movie and actor details in an organized manner.`,
        project_summary4: `The website effectively provides a platform for users to enhance their movie knowledge, making them more competitive in Cine2Nerdle Battle. \n
        This project honed my skills in front-end web development and API integration.`,
        role: 'Solo-Developer Work',
        webLink: 'https://www.cinetrainer.com/',
        linkworks: true
    },

    {
        src: allStarsImg,
        alt: 'Picture of an coca-cola sponsors e-sports event',
        frameWork: nextJsSvg,
        language: javaScriptSvg,
        styling: tailwindSvg,
        hosting: vercelSvg,
        frameWorkName: 'NextJS',
        languageName: 'Javascript',
        stylingName: 'Tailwind',
        hostingName: 'Vercel',
        project_Name: 'Allstars.staypluggedin.gg',
        project_summary: 'Through my networks, I connected with a colleague who needed volunteers for a web development project.',
        project_summary2: `My role was to assist the front-end programmer in converting a Figma design, created by the company's designer, into a functional website. This task required close collaboration and technical skill to accurately implement the design.`,
        project_summary3: ` In this project, we utilized NextJs as the development framework. For version control and project management, we employed Gitbucket.\n
         My responsibilities included coding the front-end components, ensuring they aligned with the Figma design, and collaborating with the team for seamless integration. The webpage was hosted on Vercel to ensure accessibility and performance.`,
        project_summary4: ` We successfully completed the deliverables within two weeks, and the website launch was a success, attracting a peak user count of 1083 in just one month.\n
         This experience significantly boosted my confidence and proficiency as a front-end web developer. It also provided valuable experience in teamwork and communication, working alongside seasoned professionals.`,
        role: 'Volunteer Developer',
        webLink: 'https://allstars.staypluggedin.gg/',
        linkworks: true
    },

    {
        src: chainLImage,
        alt: 'Picture of an up incoming web word game',
        frameWork: nextJsSvg,
        language: typeScriptSvg,
        styling: sassSvg,
        hosting: vercelSvg,
        frameWorkName: 'NextJS',
        languageName: 'Typescript',
        stylingName: 'Sass',
        hostingName: 'Vercel',
        project_Name: 'ChainL',
        project_summary: 'My software developers friends, came up with an idea to create a web-based word game. The concept of the game involved users guessing three interconnected words, where each word was related to the previous one in a specific way',
        project_summary2: `The task involved not only the development of the game but also the management of team and individual tasks. My role was to contribute to the project's front-end development and ensure effective collaboration.`,
        project_summary3: `We organized our tasks and workflow using Notion for project management and Git for version control. I was involved in building the project using NextJs as the framework, with TypeScript as the main programming language.\n
         For the backend, which was crucial for storing groups of word pairings, we utilized PostgreSQL, employing Express for server-side operations.`,
        project_summary4: `This project significantly improved my understanding of using Git in a team setting, especially in the nuances of creating and managing pull requests.\n
         Furthermore, the experience provided me with invaluable insights into teamwork and communication, working alongside senior developers and contributing to a collaborative environment.`,
        role: 'Junior Front-End Developer',
        webLink: '',
        linkworks: false
    }
]