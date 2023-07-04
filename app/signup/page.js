"use client"

import './signup.css'
import Image from 'next/image'
import signupImage from '../../public/6343824.png'
import Link from 'next/link'
import { useState } from 'react'
import {auth, realtimeDatabase} from '../firebase'
import { useRouter } from 'next/navigation'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export default function Page() {
  const router = useRouter();
  //password show/hide 
  const [showpasswordIcon, setPasswordShowIcon] = useState(<VisibilityIcon/>)
  const [togglepassword, setTogglepassword] = useState(false);
  const [typePassword, setTypePassword] = useState('password');

  //confirm password show/hide
  const [showConfirmpasswordText, setShowconfirmpasswordText] = useState(<VisibilityIcon/>)
  const [toggleConfirmpassword, setToggleConfirmpassword] = useState(false);
  const [typeConfirmpassword, setTypeConfirmpassword] = useState('password');

  //input values
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  //input validation
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    //form validation
    //confirmPassword !== password? "password doesn't match":

    //craeting email and password authentication
    auth.createUserWithEmailAndPassword(email, password)
        .then(()=>{
          //creating user data  object for realtime database and redux
          const userData = {
            firstName: firstName,
            lastName:lastName,
            email:email,
            contact:contact,
            idNumber:idNumber,
            loginTime: Date.now()
          }

          //sending user data to realtime database
          const databaseRef = realtimeDatabase.ref();
          const user = auth.currentUser
          databaseRef.child('users/'+ user.uid).set(userData);
           //redux dispatch action
          alert('user created successfully');
        })
      .catch((err)=>{
        alert(err.message,err.code);
      })
      
      //clear out the form after submission

      setfirstName('');
      setlastName('');
      setEmail('');
      setContact('')
      setIdNumber('');
      router.push('/signin');
  }


 //password visuals on and off
 //password func
  const passwordshow = (e) =>{
    setTogglepassword(!togglepassword)

    if(togglepassword){
      setTypePassword('text');
      setPasswordShowIcon(<VisibilityOffIcon/>);
 
    }else{
      setTypePassword('password');
      setPasswordShowIcon(<VisibilityIcon/>);
    }
  }

  //confirm password func
  const confirmPasswordShow = ()=>{
    setToggleConfirmpassword(!toggleConfirmpassword)

    if(toggleConfirmpassword){
      setTypeConfirmpassword('text');
      setShowconfirmpasswordText(<VisibilityOffIcon/>);
 
    }else{
      setTypeConfirmpassword('password');
      setShowconfirmpasswordText(<VisibilityIcon/>);
    }
  }

  return (
    <div className='container'>
        <div className='signupImage'>
          <h1 className='titleWelcome'>Welcome to Chama Link</h1>
          <Image src={signupImage} className='image' alt='signup'/>
        </div>
        <div className='formContainer'>
          <form onSubmit={handleSubmit}>
            <div>
              <h1 className='titleStart'>Get Started</h1>
              <p className='loginLink'>Already have an account? <Link href="/signin">Log in</Link></p>
            </div>
            <div className='inputs doubleInput'>
              <input type='text' placeholder='First Name' value={firstName}  onChange={(e)=>setfirstName(e.target.value)}  required/>
              <input type='text' placeholder='Last Name' value={lastName} onChange={(e)=>setlastName(e.target.value)} required/>
            </div>
            <div className='inputs inputBorder'>
              <input type='email' placeholder='Email' value={email} className='inputCover' onChange={(e)=>setEmail(e.target.value)} required/>
            </div>
            <div className='inputs inputBorder'>
              <input type='number' placeholder='Phone Number' value={contact} className='inputCover' onChange={(e)=>setContact(e.target.value)} required/>
            </div>
            <div className='inputs inputBorder'>
              <input type='number' placeholder='ID Number' value={idNumber} className='inputCover' onChange={(e)=>setIdNumber(e.target.value)} required/>
            </div>
            <div className='inputs passwordWrap'>
              <input type={typePassword} placeholder='Password'  value={password} className='inputCover' onChange={(e)=>setPassword(e.target.value)} required/>
              <div className='pass' onClick={passwordshow}>{showpasswordIcon}</div>
            </div>
            <div className='inputs passwordWrap'>
              <input type={typeConfirmpassword} placeholder='Confirm Password' value={confirmPassword} className='inputCover' onChange={(e)=>setConfirmPassword(e.target.value)} required/>
              <div className='pass' onClick={confirmPasswordShow}>{showConfirmpasswordText}</div>
            </div>
            <div className='inputs'>
              <input type='checkbox' id='terms' style={{marginRight:'10px',padding:'30px'}}  required/>
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
