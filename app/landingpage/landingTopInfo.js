"use client"
import React from 'react'
import vectorImage from '../../public/2402304.png'
import './landingpage.css'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

function landingTopInfo() {
  const router = useRouter();
  return (
    <div className='card'>
        <div className='cardInfo'>
            <div className='cardTitle'>
              <h1>ChamaLink Solutions That helps your Chama</h1>
            </div>
            <div className='cardDescription'>
              <p>
              We power the growth and sustainability of households and communities
              by enabling access to clean cooking solutions
              </p>
            </div>
            <div className='cardButtons'>
              <button onClick={()=>router.push('/signin')}>Log In</button>
              <button onClick={()=>router.push('/signup')}>Sign Up</button>
            </div>
        </div>
        <div className='cardImageInfo'>
            <Image src={vectorImage}  className='vectorImage'/>
        </div>
    </div>
  )
}

export default landingTopInfo