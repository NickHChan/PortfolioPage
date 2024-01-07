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
    frameWork: StaticImageData;
    language: StaticImageData;
    styling: StaticImageData;
    hosting: StaticImageData;
    project_Name: string;
    project_summary: string;
    role: string;
    linkworks: boolean;
}


export default function Project({src, alt, width, height, webLink, frameWork, language, styling, hosting, project_Name,role, linkworks}:Props) {

  return (
    <section className={styles.projects}>
      <Link href={webLink} rel='noopener noreferrer' target='_blank' className={ linkworks ? styles.link : styles.linkDisabled} aria-disabled={linkworks} tabIndex={linkworks ? undefined : -1}>
        <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            quality={100}
            className={styles.image}
        />
        <div>
            {project_Name}
            <br/>
              <section className={styles.tech}>   
                <p>Framework:</p>
                <Image src={frameWork} alt='list of framework(s) used' height={25} width={25}/>
                <p>Language:</p>
                <Image src={language} alt='list of coding language(s) used' height={25} width={25}/>
                <p>Styling:</p>
                <Image src={styling} alt='the way the website was styled' height={25} width={25}/>
                <p>Hosting:</p>
                <Image src={hosting} alt='the platform the website was hosted on' height={25} width={25}/>
              </section>
            <br/>
            {role}
        </div>    
      </Link>
    </section>
  )
}
