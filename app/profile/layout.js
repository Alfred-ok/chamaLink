
import ProfileNav from './profileNav'
import ProfileAside from './profileAside'

function ProfileLayout({children}) {
  return (
    <div style={{margin:'0px',padding:'0px'}}>
        <div>
            {/**nav */}
            <ProfileNav/> 
        </div>
        <div style={{display:'flex'}}>
          <div style={{flex:'1'}}>
              {/**aside nav */}
              <ProfileAside/>
          </div>
          <div style={{flex:'6',backgroundColor:'rgb(232, 232, 232)'}}>
              {/**body */}
              {children}
          </div>
        </div>
    </div>
  )
}

export default ProfileLayout