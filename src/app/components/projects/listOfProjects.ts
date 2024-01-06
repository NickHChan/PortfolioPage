import { StaticImageData } from "next/image"
import questionMark from '../../../images/question_marks.svg'
import allStarsImg from '../../../images/allstars.staypluggedin.gg.webp'
import chainLImage from '../../../images/ChainLPicture.webp'
import cineTrainerImage from '../../../images/CineTrainerPic.webp'

type Projects = {
    src: StaticImageData;
    alt: string;
    technologies: string;
    project_Name: string;
    project_summary: string;
    role: string;
    webLink: string;
    works: boolean;
}

export const listOfProjects: Projects[] = [
    {
        src: cineTrainerImage,
        alt: 'Picture of CineTrainer Website',
        technologies: 'Framework: NextJS, Language: Typescipt, Styling: Sass, Host: Vercel',
        project_Name: 'CineTrainer',
        project_summary: `A website used to display a list of movie actors in a movie to help users train for Cine2Nerdle's new battle mode`,
        role: 'Role: Solo-Developer Work',
        webLink: '',
        works: false
    },

    {
        src: allStarsImg,
        alt: 'Picture of an coca-cola sponsors e-sports event',
        technologies: 'Framework: NextJS, Language: Javscript, Styling: Css, Host: Vercel',
        project_Name: 'Allstars.staypluggedin.gg',
        project_summary: 'A website about a coca-cola sponsored e-sports event that includes games being played, dates, and co-streamers',
        role: 'Role: Volunteer Developer',
        webLink: 'https://allstars.staypluggedin.gg/',
        works: true
    },

    {
        src: chainLImage,
        alt: 'Picture of an up incoming web word game',
        technologies: 'Framework: NextJS, Language: Typescript, Styling: Sass, Host: ',
        project_Name: 'ChainL',
        project_summary: 'A website that plays a word travia game where users have to guess the word that is connected to the previous word',
        role: 'Role: Junior Front-End Developer',
        webLink: '',
        works: false
    }
]