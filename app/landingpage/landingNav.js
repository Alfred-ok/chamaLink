import React from 'react'
import './landingpage.css'
function Landingnav() {
  return (
    <nav style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <div style={{padding:"10px 50px",fontFamily:"'lato',sansSerif"}}>
            <h1>Chamalink</h1>
        </div>
        <div style={{padding:"10px 50px"}}>
          <button style={
            {outline:"none",border:"none",borderRadius:"10px",padding:"8px",backgroundColor:"green",color:"#fff",width:"120px"}
            }>
            Contact Us
          </button>
        </div>
    </nav>
  )
}

export default Landingnav