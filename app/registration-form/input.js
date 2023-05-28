
import React from 'react'
import './input.css'

export default function Input({type, placeholder,label}) {
  return (
    <div className='inputField'>
        <label>{label}</label>
        <input type={type} placeholder={placeholder} />
    </div>
  )
}
