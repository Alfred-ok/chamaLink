'use client'

import signImageVector from '../../public/20945760.png'
import Image from 'next/image'
import Link from 'next/link'
import Style from './signin.module.css'
import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()
  const handleSubmit =(e) =>{
    e.preventDefault();
    router.push('/profile');
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
              <input type='text' placeholder='Email'/>
            </div>
            <div className= {Style.inputContainer}>
              <label>Password</label>
              <input type='password' placeholder='password'/>
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
