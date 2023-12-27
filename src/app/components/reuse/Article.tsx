import React from 'react'
import Image from 'next/image';
import styles from './Article.module.css'
import { StaticImageData } from 'next/image';

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
