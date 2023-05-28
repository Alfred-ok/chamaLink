'use client'

import React from 'react'
import Input from './input'
import { useState } from 'react'
import './registration.css'
import { useRouter } from 'next/navigation'

export default function Page() {
  const [inputproperty, setInputproperty] =useState([
    {type:'email',placeholder:'Enter Email',label:'Email'},
    {type:'name',placeholder:'Enter name',label:'Name'},
    {type:'email',placeholder:'Enter Email',label:'Email'},
    {type:'number',placeholder:'Enter Phone number',label:'Phone Number'},
    {type:'date',placeholder:'Enter Date of Birth',label:'Date of Birth'},
    {type:'Number',placeholder:'Enter Id Number',label:'Identification Number(ID)'},
    {type:'email',placeholder:'Enter Email',label:'Email'},
    {type:'name',placeholder:'Enter name',label:'Name'},
    {type:'email',placeholder:'Enter Email',label:'Email'},
    {type:'number',placeholder:'Enter Phone number',label:'Phone Number'},
    {type:'date',placeholder:'Enter Date of Birth',label:'Date of Birth'},
    {type:'Number',placeholder:'Enter Id Number',label:'Identification Number(ID)'}
  ])
  const router = useRouter();
  const handleSubmit =(e)=>{
    e.preventDefault()
    router.push('/chama')
  }
  return (

    <div className='container'>
      <h1>Chama Registration</h1>
      <form className='formContainer' onSubmit={handleSubmit}>
          {
            inputproperty.map((property, index)=>(
              <Input type={property.type} placeholder={property.placeholder} label={property.label} key={index}/>
            ))
          }
          <button>Submit</button>
        </form>
    </div>
  )
}