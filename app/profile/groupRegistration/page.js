import { Padding } from '@mui/icons-material'
import React from 'react'

function Page() {
  return (
    <div style={{display:'flex', flexFlow:'column',margin:'20px 50px'}}>
        <div style={{padding:"20px"}}>
            <h1>Registration</h1>
            <p>user groupRegistration</p>
        </div>
        <div style={{padding:"10px"}}>
            <div style={{padding:"5px 0px"}}>Group Name</div>
            <input type='text' placeholder='Enter info' style={{padding:"10px",width:"500px"}}  />
        </div>
        <div style={{padding:"10px"}}>
            <div style={{padding:"5px 0px"}}>Group Name</div>
            <input type='text' placeholder='Enter info' style={{padding:"10px",width:"500px"}}  />
        </div>
        <div style={{padding:"10px"}}>
          <div style={{padding:"5px 0px"}}>Group Name</div>
          <input type='text' placeholder='Enter info' style={{padding:"10px",width:"500px"}}  />
        </div>
        <div style={{padding:"10px"}}>
            <div style={{padding:"5px 0px"}}>Group Name</div>
            <input type='text' placeholder='Enter info' style={{padding:"10px",width:"500px"}}  />
        </div>
        <div style={{padding:"10px"}}>
            <div style={{padding:"5px 0px"}}>Group Name</div>
            <input type='text' placeholder='Enter info' style={{padding:"10px",width:"500px"}}  />
        </div>
        <div style={{padding:"10px"}}>
          <div style={{padding:"5px 0px"}}>Group Name</div>
            <input type='text' placeholder='Enter info' style={{padding:"10px",width:"500px"}}  />
        </div>
    </div>
  )
}

export default Page