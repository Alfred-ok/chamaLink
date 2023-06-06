'use client'
import React from 'react'
import { useState } from 'react'
import './asidelist.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupsIcon from '@mui/icons-material/Groups';
import VerticalAlignBottomIcon from '@mui/icons-material/VerticalAlignBottom';
import VerticalAlignTopIcon from '@mui/icons-material/VerticalAlignTop';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import Link from 'next/link';
import { usePathname} from 'next/navigation';

export default function Asidelist() {
    const [list, setList] = useState([
        {Item:'Dashboard', typelink:'dashboardChama',icon:<DashboardIcon/>},
        {Item:'Money Sent', typelink:'sent', icon:<VerticalAlignTopIcon/>},
        {Item:'Money Received',typelink:'received', icon:<VerticalAlignBottomIcon/>},
        {Item:'Chat', typelink:'chat',icon:<GroupsIcon/>},
        {Item:'settings',typelink:'settings', icon:<SettingsIcon/>},
        {Item:'Help', typelink:'help',icon:<HelpIcon/>},
    ])
    const pathname = usePathname();
  return (
    <div className='list'>
        {list.map((listItem, index)=>(
            <Link key={index} href={`/chama/${listItem.typelink}`} className={pathname == `/chama/${listItem.typelink}` ? "active" : "listItem"}>
                    <div className='listicon'>{listItem.icon}</div>
                    <div>{listItem.Item}</div>
            </Link>
        ))}
    </div>
  )
}
