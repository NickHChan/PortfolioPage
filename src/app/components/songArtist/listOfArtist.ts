import { StaticImageData } from 'next/image';
import questionMarkImg from '../../../images/question_marks.svg'
import InfectedMushroomImg from '../../../images/InfectedMushroom.webp'

interface Artist {
    src: StaticImageData;
    alt: string;
    width: number;
    height: number;
    name: string;
    paragraph: string;
    styleName: string;
    url: string;
}

export const listOfGames: Artist[] = [
    {
        src: InfectedMushroomImg,
        alt: "picture of musical duo Infected Mushroom ",
        width: 180,
        height: 180,
        name: 'Infected Mushroom',
        paragraph: "A musical duo formed by producers Erez Eisen and Amit Duvdevani. They produce and perform psytrance, electronica, dream trance and psychedelic music.",
        styleName: "band",
        url: 'https://open.spotify.com/artist/6S2tas4z6DyIklBajDqJxI',
    }
]