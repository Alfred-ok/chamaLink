'use client'

import Signin from './Signin/Page'
import { useState } from 'react';
import Projects from './Projects/Page'
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
