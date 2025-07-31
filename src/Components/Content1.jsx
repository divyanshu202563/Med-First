/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Logo from '../assets/Logo.png'

import "./Content1.css"


const Content1 = () => {
    return  (

        <>

           


            <div className='content1-container'>
                <img src={Logo} alt="logo" className='content1-logo' />
                <span className='content1-heading'> MED-FIRST </span>
                <br/>
                <span className='motto'>Cure Begins with a Click</span>

            </div>


    

        </>



    )
}
   


export default  Content1
