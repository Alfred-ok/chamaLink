import React from 'react'
import Aside from './aside/aside'
import Nav from './nav/page'

function ChamaLayout({children}) {
  return (
  <div style={{height:'100vh'}}>
    <div className='body'>
      <Aside className='aside'/>
      <div className='container'>
        <Nav  className='nav'/>
        <div className='pages'>
          {children}
        </div>
      </div>
    </div>
  </div>
  )
}

export default ChamaLayout