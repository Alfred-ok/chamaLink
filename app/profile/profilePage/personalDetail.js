import Image from 'next/image'
import React from 'react'
import personalImage from '../../../public/cheerful-black-man.jpg'
import Style from './personalDetail.module.css'
function PersonalDetail() {
  return (
    <div className={Style.personCard}>
        <div className={Style.imageWrap}>
            <Image src={personalImage } width={250} className={Style.image}/>
        </div>
        <div className={Style.personContent}>
            <div>
                <h2>Ken Muninzwa</h2>
                <p style={{border:'2px solid green',padding:'5px',borderRadius:'20px', width:'100px',margin:'0px auto'}}>Verified</p>
            </div>
            <div style={{padding:'20px'}}></div>
            <div className={Style.personalDetailItem}>
                <p className={Style.PersonalDetailTitle}>Email</p>
                <p className={Style.PersonalDetailContent}>ken@gmail.com</p>
            </div>
            <div className={Style.personalDetailItem}>
                <p className={Style.PersonalDetailTitle}>Contact</p>
                <p className={Style.PersonalDetailContent}>0712345678</p>
            </div>
            <div className={Style.personalDetailItem}>
                <p className={Style.PersonalDetailTitle}>ID Number</p>
                <p className={Style.PersonalDetailContent}>123565567</p>
            </div>
            <div className={Style.personalDetailItem}>
                <p className={Style.PersonalDetailTitle}>Gender</p>
                <p className={Style.PersonalDetailContent}>Male</p>
            </div>
            <div>
                <button>Update</button>
            </div>
        </div>
    </div>
  )
}

export default PersonalDetail