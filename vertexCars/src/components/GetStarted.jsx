import React from 'react'
import styles from '../style'
import {arrowUp} from '../assets'

const GetStarted = () => {
  return (
    <a href="https://www.facebook.com/vertexcars/">
    <div className={`${styles.flexCenter} w-[120px] h-[120px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
        <div className={`${styles.flexStart} flex-row ml-2`}>
          <p className='font-poppins font-medium text-[18px] leading-[32px]'>
            <span className='text-gradient'>Our </span>
            
          </p>
          <img src={arrowUp} alt="arrow" className='w-[23px] h-[32px] object-container'/>
        </div>
        <p className='font-poppins font-medium text-[18px] leading-[32px]'>
            <span className='text-gradient'>Work</span>
            
        </p>
          
      </div>
      
            
      
    </div>
    </a>
  )
}

export default GetStarted