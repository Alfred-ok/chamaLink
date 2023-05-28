
import React from 'react'
import './input.css'

export default function Input({type, placeholder,label,index}) {
  return (
    <div className='inputField' key={index}>
        <label>{label}</label>
        <input type={type} placeholder={placeholder} />
    </div>
  )
}
