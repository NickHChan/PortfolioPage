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
    frameWorkName: string;
    languageName: string;
    stylingName: string;
    hostingName: string;
    project_Name: string;
    project_summary: string;
    project_summary2: string;
    project_summary3: string;
    project_summary4: string;
    role: string;
    linkworks: boolean;
    i:number;
}


export default function Project({src, alt, width, height, webLink, frameWork, language, styling, hosting, project_Name, linkworks, project_summary,project_summary2, project_summary3, project_summary4, i, frameWorkName, languageName, stylingName, hostingName}:Props) {

  return (
    <section className={styles.projects}>
    <header className={styles.header}>
      {project_Name}
    </header>
    <section className={styles.projectInfoContainer}>
      <Link href={webLink} rel='noopener noreferrer' target='_blank' className={ linkworks ? styles.link : styles.linkDisabled} aria-disabled={linkworks} tabIndex={linkworks ? undefined : -1}>
        <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            quality={100}
            className={styles.image}
        />
      </Link>
      <article className={styles.projectInfo}>
        <section className={styles[`tech${i}`]}>   
                <p>Framework:</p>
                <Image src={frameWork} alt='list of framework(s) used' height={25} width={25} className={styles.techIcon}/>
                <p className={styles[`${frameWorkName}`]}>{frameWorkName}</p>
                <p>Language:</p>
                <Image src={language} alt='list of coding language(s) used' height={25} width={25} className={styles.techIcon}/>
                <p className={styles[`${languageName}`]}>{languageName}</p>
                <p>Styling:</p>
                <Image src={styling} alt='the way the website was styled' height={25} width={25} className={styles.techIcon}/>
                <p className={styles[`${stylingName}`]}>{stylingName}</p>
                <p>Hosting:</p>
                <Image src={hosting} alt='the platform the website was hosted on' height={25} width={25} className={styles.techIcon}/>
                <p className={styles[`${hostingName}`]}>{hostingName}</p>
        </section>
        <summary className={styles[`summaryContainer${i}`]}>
          <p className={styles.summary1}>
            {project_summary}
          </p>
          <p className={styles.summary2}>
            {project_summary2}
          </p>
          <p className={styles.summary3}>
            {project_summary3}
          </p>
          <p className={styles.summary4}>
            {project_summary4}
          </p>
        </summary>
      </article>
    </section>    
    </section>
  )
}
