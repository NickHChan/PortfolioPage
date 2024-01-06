import React from 'react'
import Image from 'next/image';
import styles from './Projectbase.module.css'
import { StaticImageData } from 'next/image';
import Link from 'next/link';

type Props = {
    src: StaticImageData;
    alt: string;
    width:number;
    height:number;
    webLink: string;
    technologies: string;
    project_Name: string;
    project_summary: string;
    role: string;
    works: boolean;
}


export default function Project({src, alt, width, height, webLink, technologies, project_Name,role, works}:Props) {

  return (
    <section className={styles.projects}>
      
      {
        //ternary
        works
        //works is true render with link 
        ? <Link href={webLink} rel='noopener noreferrer' target='_blank' className={styles.link}>
        <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            quality={100}
            className={styles.image}
        />
      
      
        <p>
            {project_Name}
            <br/>
            {technologies}
            <br/>
            {role}
        </p>    
      </Link>
      //works if false render without link
      : <div>
      <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            quality={100}
            className={styles.image}
        />
        <p>
            {project_Name}
            <br/>
            {technologies}
            <br/>
            {role}
        </p>    
      </div>
  }
    </section>
  )
}
