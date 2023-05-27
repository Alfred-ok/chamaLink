'use client'

import Signin from './signin/page'
import { useState } from 'react';
import Projects from './projects/page'
export default function Home() {
  const [user, setuser] = useState(false);
  const useradd = (add) =>{
    setuser(add)
  }
  return (
    <div>
      {user? <Projects/>: <Signin useradd = {useradd}/>}
    </div>
  )
}
