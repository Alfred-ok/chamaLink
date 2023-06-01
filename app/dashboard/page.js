'use client'
import React from 'react'
import Asidelist from './asidelist'
import './dashboard.css'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Chama from '../chama/page'
import MailIcon from '@mui/icons-material/Mail';

export default function Page() {
  return (
    <div className='dashboardContainer'>
        <aside>
          <div className='logo'>
            <h1>Chama Link</h1>
          </div>
          <div>
            <Asidelist/>
          </div>
          <div>
            <div>...</div>
          </div>
        </aside>
        <main>
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
            <section>
              <Chama/>
            </section>
        </main>
    </div>
  )
}