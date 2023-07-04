import React from 'react';
import Style from './profileNav.module.css';
import Link from 'next/link';

function ProjectNav() {
  return (
    <div className={Style.navProject}>
        <div>
          <h2>Chama Link</h2>
        </div>
        <div>
            <Link href='/signin'>
              <button className={Style.updateButton} >Log Out</button>
            </Link>
        </div>
    </div>
  )
}

export default ProjectNav