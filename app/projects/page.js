'use client'

import React from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import KawilabLogo from '../../public/modification1.png'
import styles from './projects.module.css'
import Image from 'next/image';

export default function Page() {
  return (
    <div className={styles.projectComponent}>
        <div className={styles.nav}>
            <div className={styles.logo}><Image src={KawilabLogo} alt='kawilab logo' height={60}/></div>
            <div className={styles.ContainerProfile}> 
                <div><AccountCircleIcon className={styles.profile}/></div>
            </div>
        </div>
        <div>
            <div className={styles.projectHead}> 
                <h1 className={styles.projectHeadTitle}>Chama Link Accounts</h1>
                <h4>With Chama Link you can separate all your accounts</h4>
            </div>

            <div className={styles.searchform}>
                    <form className={styles.form} >
                        <button className={styles.searchIcon}><SearchIcon/></button>
                        <input type='text' placeholder='search your Chama' className={styles.search}/>
                    </form>
            </div>

            <div className={styles.project}>
                <div className={styles.newProjects}>
                    <button className={styles.addButton}><AddCircleIcon className={styles.addIcon}/></button>
                    <h5 className={styles.registerChama}>Register New Chama</h5>
                </div>
            </div>
        </div>
        
    </div>
  )
}
