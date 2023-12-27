'use client'
import Link from 'next/link';
import React from 'react'
import { useRouter } from 'next/navigation';
import styles from './NavBar.module.css'

type props = {
    navItem: string;
}

export default function Nav({navItem}:props) {
  const router = useRouter();
  const navTitle = navItem.slice(0,1).toUpperCase()+navItem.slice(1).toLowerCase();

  const handleOnClick = () =>{
    switch (navItem){
      case 'home':
        router.push('/')
        break;
      case 'contact':
        router.push('/contactme')
        break;
      default:
        router.push(`/${navItem}`)
    }
  }
  return (
    <button type='button' onClick={handleOnClick} className={styles.button}>{navTitle}</button>
  )
}
