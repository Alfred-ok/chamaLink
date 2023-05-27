'use client'

"use client"

import Styles from './signup.module.css'
import KawilabLogo from '../../public/modification1.png'
import Image from 'next/image'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import GoogleIcon from '../../public/signin-up resources/icons8-google-96.png'
import { useRouter } from 'next/navigation';
import Link from 'next/link'


export default function Page() {
  const router = useRouter()
  const handleSubmit =(e)=>{
    e.preventDefault();
  }
  return (
    <div className={Styles.SignIn}>

      <div className={Styles.formContainer}>
          <div className={Styles.logoContainer}>
            <Image src={KawilabLogo} alt='kawilab logo' height={150}/>
          </div>
          <form className={Styles.form} onSubmit={handleSubmit}>
              <div className={Styles.email}>
                <MailOutlineIcon className={Styles.emailIcon}/>
                <input className={Styles.emailInput} type='text' placeholder='Enter Your Email' required/>
              </div>
              <div className={Styles.password}>
                <LockOutlinedIcon className={Styles.PasswordIcon}/>
                <input className={Styles.passwordInput} type='password' placeholder='Create Password' required />
              </div>
              <div className={Styles.password}>
                <LockOutlinedIcon className={Styles.PasswordIcon}/>
                <input className={Styles.passwordInput} type='password' placeholder='Confirm Password' required />
              </div>
              <button className={Styles.signupButton} onClick={()=>router.push('/')}>Sign Up</button>
              <h6 className={Styles.Noaccount}>Already have an acccount? <Link href='/signin'>Sign In</Link></h6>
              <div className={Styles.line}></div>
              <button className={Styles.google}>
                <Image src={GoogleIcon} alt='google signup logo' height={25} className={Styles.googleImg}/>
                Login with Google
              </button>
          </form>
      </div>
    </div>
  )
}
