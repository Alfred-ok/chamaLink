import React from 'react';
import Style from './profileNav.module.css';

function ProjectNav() {
  return (
    <div className={Style.navProject}>
        <div>
          <h2>Chama Link</h2>
        </div>
        <div>
            <button className={Style.updateButton}>Log Out</button>
        </div>
    </div>
  )
}

export default ProjectNav