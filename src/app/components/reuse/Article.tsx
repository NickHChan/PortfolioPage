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
    paragraph: string;
    styleName: string;
    addtional?: string;
}


export default function Article({src, alt, width, height, paragraph, styleName, addtional}:Props) {
  return (
    <article className={styles[styleName]}>
        <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            quality={80}
            className={styles.image}
        />
        <p>
            {paragraph}
            <br/>
            <br/>
            {addtional}
        </p>
    
    </article>
  )
}
