import React from 'react'
import Style from './profileAside.module.css'
function ProfileAside() {
  return (
    <div className={Style.asidenav}>
        <div className={Style.asidenavItem}>
            Profile
        </div>
        <div className={Style.asidenavItem}>
            Groups
        </div>
    </div>
  )
}

export default ProfileAside