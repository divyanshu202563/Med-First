import React from 'react'
import './IMAGE-FINAL.css'
import I1 from "../assets/govimage.svg"
import I2 from "../assets/Government_of_India_logo .svg.PNG"
import I3 from "../assets/govimage2.svg"

const IMAGEFINAL = () => {
  return (
    <div className='image--container'>
        <img src={I1} alt="Government Image" className='image-1' />
        <img src={I2} alt="Government Logo" className='image-2' />
        <img src={I3} alt="Government Image 2" className='image-3' />
      
  
    </div>

  )
}

export default IMAGEFINAL
