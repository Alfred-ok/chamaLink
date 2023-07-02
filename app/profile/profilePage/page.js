import React from 'react'
import PersonalDetail from './personalDetail'

function Page() {
  return (
    <div style={{display:"flex"}}>
        <PersonalDetail/>
        <div style={{fontFamily:"'lato',sanserif",fontWeight:"900", color:'grey'}}>
            <div style={{
                padding:'20px',
                margin:'30px',
                height:'200px',
                backgroundColor:'#fff',
                borderRadius:'10px',
                width:'900px',
                border:'1px solid rgb(192, 191, 191)',
                display:'flex',
                justifyContent:"center",
                alignItems:'center',
                fontSize:'36px',
                }}>No data</div>

            <div style={{
                padding:'20px',
                margin:'30px',
                height:'350px',
                backgroundColor:'#fff',
                borderRadius:'10px',
                width:'900px',
                border:'1px solid rgb(192, 191, 191)',
                display:'flex',
                justifyContent:"center",
                alignItems:'center',
                fontSize:'36px',
                }}>No data</div>
        </div>
    </div>
  )
}

export default Page