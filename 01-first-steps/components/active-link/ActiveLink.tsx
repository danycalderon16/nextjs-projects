"use client"
import React from 'react'
import Link from 'next/link';

import style from './ActiveLink.module.css'
import { usePathname } from 'next/navigation';

interface Props{
  text: string;
  path: string;
}

export const ActiveLink = ({path, text}:Props) => {

  const pathName = usePathname()

  console.log(pathName, path);
  
  return (
    <Link className={`${style.link} ${(pathName===path )&& style['active-link']}`} href={path}>
      {text}
    </Link>
       
  )
}
