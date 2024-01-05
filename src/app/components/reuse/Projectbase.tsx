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
}


export default function Project({src, alt, width, height, webLink, technologies, project_Name,role}:Props) {
  return (
    <section className={styles.projects}>
      <Link href='https://allstars.staypluggedin.gg/' rel='noopener noreferrer' target='_blank' className={styles.link}>
        <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            quality={80}
            layout='responsive'
            objectFit='cover'
            objectPosition='center'
        />
        <p>
            {project_Name}
            <br/>
            {technologies}
            <br/>
            {role}
        </p>    
      </Link>
    </section>
  )
}
