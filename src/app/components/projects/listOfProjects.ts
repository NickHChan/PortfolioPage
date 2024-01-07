import { StaticImageData } from "next/image"
import questionMark from '../../../images/question_marks.svg'
import allStarsImg from '../../../images/allstars.staypluggedin.gg.webp'
import chainLImage from '../../../images/ChainLPicture.webp'
import cineTrainerImage from '../../../images/CineTrainerPic.webp'
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
        project_Name: 'CineTrainer',
        project_summary: `A website used to display a list of movie actors in a movie to help users train for Cine2Nerdle's new battle mode`,
        role: 'Role: Solo-Developer Work',
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
        project_Name: 'Allstars.staypluggedin.gg',
        project_summary: 'A website about a coca-cola sponsored e-sports event that includes games being played, dates, and co-streamers',
        role: 'Role: Volunteer Developer',
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
        project_Name: 'ChainL',
        project_summary: 'A website that plays a word travia game where users have to guess the word that is connected to the previous word',
        role: 'Role: Junior Front-End Developer',
        webLink: '',
        linkworks: false
    }
]