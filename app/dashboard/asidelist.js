'use client'
import React from 'react'
import { useState } from 'react'
import './asidelist.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupsIcon from '@mui/icons-material/Groups';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';

export default function Asidelist() {
    const [list, setList] = useState([
        {Item:'Dashboard', icon:<DashboardIcon/>},
        {Item:'Chama', icon:<GroupsIcon/>},
        {Item:'NonProfit', icon:<CorporateFareIcon/>},
        {Item:'Supplier', icon:<CachedOutlinedIcon/>},
        {Item:'settings', icon:<SettingsIcon/>},
        {Item:'Help', icon:<HelpIcon/>},
    ])
  return (
    <div className='list'>
        {list.map((listItem, index)=>(
            <div key={index} className='listItem'>
                <div className='listicon'>{listItem.icon}</div>
                <div>{listItem.Item}</div>
            </div>
        ))}
    </div>
  )
}
