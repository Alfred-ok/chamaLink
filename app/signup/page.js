"use client"

import './signup.css'
import Image from 'next/image'
import signupImage from '../../public/6343824.png'
import Link from 'next/link'

export default function Page() {

  const handleSubmit = (e) =>{
    e.preventDefault();
  }

  return (
    <div className='container'>
        <div className='signupImage'>
          <h1 className='titleWelcome'>Welcome to Chama Link</h1>
          <Image src={signupImage} className='image'/>
        </div>
        <div className='formContainer'>
          <form onSubmit={handleSubmit}>
            <div>
              <h1 className='titleStart'>Get Started</h1>
              <p className='loginLink'>Already have an account? <Link href="/signin">Log in</Link></p>
            </div>
            <div className='inputs doubleInput'>
              <input type='text' placeholder='First Name' required/>
              <input type='text' placeholder='Last Name' required/>
            </div>
            <div className='inputs'>
              <input type='email' placeholder='Email' className='inputCover' required/>
            </div>
            <div className='inputs'>
              <input type='number' placeholder='Phone Number' className='inputCover' required/>
            </div>
            <div className='inputs'>
              <input type='number' placeholder='ID Number' className='inputCover' required/>
            </div>
            <div className='inputs'>
              <input type='password' placeholder='Password' className='inputCover' required/>
            </div>
            <div className='inputs'>
              <input type='password' placeholder='Confirm Password' className='inputCover' required/>
            </div>
            <div className='inputs'>
              <input type='checkbox' id='terms' style={{marginRight:'10px',padding:'30px'}} required/>
              <label htmlFor='terms'> I agree to the terms and conditions of <span style={{color:'green'}}>Privacy Policy</span></label>
            </div>
            <div className='inputs'>
              <button>Sign Up</button>
            </div>
          </form>
        </div>
    </div>
  )
}
