'use client'

import React from 'react'
import Style from './profileAside.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
function ProfileAside() {
  const pathname = usePathname();
  return ( 
    <div className={Style.asidenav}>
        <Link href={`/profile`} className={pathname == '/profile' ? Style.active :Style.asidenavItem}>
            Profile
        </Link>
        <Link href={`/profile/groupPage`} className={pathname == '/profile/groupPage' ? Style.active :Style.asidenavItem}>
            Groups
        </Link>
    </div>
  )
}

export default ProfileAside