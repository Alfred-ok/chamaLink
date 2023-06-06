import React from 'react'
import Asidelist from './asidelist'
import './aside.css'

function Aside() {
  return (
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
  )
}

export default Aside