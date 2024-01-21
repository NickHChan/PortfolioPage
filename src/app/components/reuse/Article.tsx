import React from 'react'
import Image from 'next/image';
import styles from './Article.module.css'
import { StaticImageData } from 'next/image';
import Link from 'next/link';

type Props = {
    src: StaticImageData;
    alt: string;
    width:number;
    height:number;
    game: string;
    paragraph: string;
    styleName: string;
    addtional?: string;
    url: string;
}


export default function Article({src, alt, width, height, game, paragraph, styleName, addtional, url}:Props) {
  return (
    <article className={styles[styleName]}>
      <Link href={url} rel='noopener noreferrer' target='_blank' className={styles.link} >
        <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            quality={80}
            className={styles.image}
        />
      </Link>
        <article className={styles.textInfo}>
            <p className={styles.gameTitle}>
              {game}
            </p>
            {paragraph}
            <br/>
            <br/>
            {addtional}
        </article>
    
    </article>
  )
}
