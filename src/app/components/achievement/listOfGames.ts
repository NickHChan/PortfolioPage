import { StaticImageData } from 'next/image';
import radiantImage from '../../../images/Radiant_Rank.webp'
import diamondImage from '../../../images/Season_2019_-_Diamond_2.webp'
interface Games {
    src: StaticImageData;
    alt: string;
    width: number;
    height: number;
    paragraph: string;
    styleName: string;
}

export const listOfGames: Games[] = [
    {
        src: radiantImage,
        alt: "Rank: Radiant",
        width: 100,
        height: 100,
        paragraph: "Reached Radiant in Valorant",
        styleName: "rank",
    },
    {
        src: "",
        alt: "Elo: 19,600",
        width: 100,
        height: 100,
        paragraph: "Reached 19,600 Elo in Counter-Strike 2",
        styleName: "rank",
    },
    {
        src: diamondImage,
        alt: "Diamond in League of Legends",
        width: 100,
        height: 100,
        paragraph: "Reached Diamond rank in League of Legends",
        styleName: "rank",
    },
    {
        src: "",
        alt: "TBD rank in The Finals",
        width: 100,
        height: 100,
        paragraph: `Currently grinding "The Finals" rank `,
        styleName: "rank",
    }
]