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
        project_summary: `I came across a new player vs player mode on Cine2Nerdle, named Cine2Nerdle Battle, which required knowledge of movies, directors, and actors.\n
        My objective was to create a website that would assist individuals with limited movie knowledge, like myself, to train and improve their familiarity with movie-related information.\n
        As the sole person on this project, I carefully planned the website using Figma and Notion. For version control, I utilized Git. \n
        I developed the site using Next.js for efficient web page routing and TypeScript as the primary programming language.\n
        The backbone of the project was the TMDB API, which allowed us to fetch and display specific movie and actor details in an organized manner.\n
        The website effectively provides a platform for users to enhance their movie knowledge, making them more competitive in Cine2Nerdle Battle. \n
        This project honed my skills in front-end web development and API integration.`,
        role: 'Solo-Developer Work',
        webLink: '',
        linkworks: false
    },

    {
        src: allStarsImg,
        alt: 'Picture of an coca-cola sponsors e-sports event',
        frameWork: nextJsSvg,
        language: javaScriptSvg,
        styling: cssSvg,
        hosting: vercelSvg,
        frameWorkName: 'NextJS',
        languageName: 'Javascript',
        stylingName: 'Css',
        hostingName: 'Vercel',
        project_Name: 'Allstars.staypluggedin.gg',
        project_summary: 'A website about a coca-cola sponsored e-sports event that includes games being played, dates, and co-streamers',
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
        project_summary: 'A website that plays a word travia game where users have to guess the word that is connected to the previous word',
        role: 'Junior Front-End Developer',
        webLink: '',
        linkworks: false
    }
]