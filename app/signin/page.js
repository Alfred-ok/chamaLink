'use client'

import signImageVector from '../../public/20945760.png'
import Image from 'next/image'
import Link from 'next/link'
import Style from './signin.module.css'
import { useRouter } from 'next/navigation'
import {auth, realtimeDatabase} from '../firebase'
import { useState } from 'react'

export default function Page() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter()
  const handleSubmit =(e) =>{
    e.preventDefault();

    auth.signInWithEmailAndPassword(email, password)
    .then((userdetails)=>{
      const userData = {
        loginTime: Date.now()
      }
      
      //sending user data to realtime database
      const databaseRef = realtimeDatabase.ref();
      const user = auth.currentUser
      databaseRef.child('users/'+ user.uid).update(userData);
      
       //redux dispatch action
        if(userdetails){router.push('/profile');}
       //Done
    })
    .catch(err=>alert(err.message, err.code))

  
    
  }
  return (
    <div className={Style.container}>
      <div className= {Style.wrapper}>

        <div className= {Style.ImageWrap}>
            <Image src={signImageVector} className= {Style.imageVector}/>
        </div>

        <div  className= {Style.formWrap}>
          <form onSubmit={handleSubmit}>
            <div className= {Style.formTitleText} >
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <p>Don't have an account? <Link href='/signup'>Sign Up</Link></p>
            </div>
            <div className= {Style.inputContainer}>
              <label>Email address</label>
              <input type='text' placeholder='Email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
            <div className= {Style.inputContainer}>
              <label>Password</label>
              <input type='password' placeholder='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            </div>
            <div className= {Style.forgot}>Forgot password?</div>
            <div className= {Style.buttonContainer} >
              <button>Sign In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
