"use client"
import React from 'react'
import vectorImage from '../../public/2402304.png'
import './landingpage.css'
import Image from 'next/image'
import Link from 'next/link'

function LandingTopInfo() {
  return (
    <div className='card'>
        <div className='cardInfo'>
            <div className='cardTitle'>
              <h1>Let's Grow Your Chama<span style={{color:"white"}}> To The Next Level</span> </h1>
            </div>
            <div className='cardDescription'>
              <p>
              We power the growth and sustainability of households and communities
              by enabling access to clean cooking solutions
              </p>
            </div>
            <div className='cardButtons'>
              <Link href='/signin'><button>Log In</button></Link>
              <Link href='/signup'><button>Join Us</button></Link>
            </div>
        </div>
        <div className='cardImageInfo'>
            <Image src={vectorImage}  className='vectorImage'/>
        </div>
    </div>
  )
}

export default LandingTopInfo