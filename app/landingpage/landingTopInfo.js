"use client"
import React from 'react'
import vectorImage from '../../public/2402304.png'
import './landingpage.css'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

function LandingTopInfo() {
  const router = useRouter();
  return (
    <div className='card'>
        <div className='cardInfo'>
            <div className='cardTitle'>
              <h1>Let's Grow Your Chama<span style={{color:"green"}}> To The Next Level</span> </h1>
            </div>
            <div className='cardDescription'>
              <p>
              We power the growth and sustainability of households and communities
              by enabling access to clean cooking solutions
              </p>
            </div>
            <div className='cardButtons'>
              <button onClick={()=>router.push('/signin')}>Log In</button>
              <button onClick={()=>router.push('/signup')}>Join Us</button>
            </div>
        </div>
        <div className='cardImageInfo'>
            <Image src={vectorImage}  className='vectorImage'/>
        </div>
    </div>
  )
}

export default LandingTopInfo