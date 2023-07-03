import React from 'react'
import Style from './createpage.module.css'
function createpage() {
  return (
    <div className={Style.card}>
        <h1>Create Your Chama Group</h1>
        <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </p>
        <button>Create a group</button>
    </div>
  )
}

export default createpage