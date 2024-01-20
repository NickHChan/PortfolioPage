import { StaticImageData } from 'next/image';
import radiantImage from '../../../images/Radiant_Rank.webp'
import diamondImage from '../../../images/Season_2019_-_Diamond_2.webp'
import questionMark from '../../../images/question_marks.svg'
import cs2Image from '../../../images/Cs2Rank.webp'
import theFinalsImage from '../../../images/TheFinalsRank.webp'
interface Games {
    src: StaticImageData;
    alt: string;
    width: number;
    height: number;
    game: string;
    paragraph: string;
    styleName: string;
    url: string;
}

export const listOfGames: Games[] = [
    {
        src: radiantImage,
        alt: "Rank: Radiant",
        width: 100,
        height: 100,
        game: 'Valorant',
        paragraph: "A game developed by Riot Games, is a tactical first-person shooter where teams of five players compete against each other. Achieving the rank of Radiant signifies that a player is in the top 0.1% of all Valorant players.",
        styleName: "rank",
        url: 'https://playvalorant.com/',
    },
    {
        src: cs2Image,
        alt: "Elo: 20,376",
        width: 100,
        height: 100,
        game: 'Counter-Strike 2',
        paragraph: "A game developed by Valve, is a tatical first-person shooter where teams of five players compete against each other. Achieveing the elo of 20,376 signifies that a player is in the top 2% of all Counter-strike 2 players.",
        styleName: "rank",
        url: 'https://www.counter-strike.net/',
    },
    {
        src: diamondImage,
        alt: "Diamond in League of Legends",
        width: 100,
        height: 100,
        game: 'League of Legends',
        paragraph: "A game developed by Riot Games, is a multiplayer online battle arena where teams of five players compete against each other. Achieving the rank of Diamond signifies that a player is in the top 3.8% of all League players.",
        styleName: "rank",
        url: 'https://www.leagueoflegends.com/en-us/',
    },
    {
        src: theFinalsImage,
        alt: "TBD rank in The Finals",
        width: 100,
        height: 100,
        game: 'The Finals',
        paragraph: `A game developed by Embark Studios, is a fast paced first-person shooter where teams of three compete against each other for objectives. Currently grinding to be placed into a rank `,
        styleName: "rank",
        url: 'https://www.reachthefinals.com/',
    }
]