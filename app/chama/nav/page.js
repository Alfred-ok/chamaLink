"use client"
import React from 'react'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MailIcon from '@mui/icons-material/Mail';
import './nav.css'
export default function Page() {
  return (
    <nav>
        <div className='searchItem'>
        <input type='text' placeholder='Search'/>
        </div>
        <div className='profile'>
        <MailIcon color="success" />
        <AccountBoxIcon className='boxIcon'/>
        <span>John Smith</span>
        </div>
    </nav>
  )
}
