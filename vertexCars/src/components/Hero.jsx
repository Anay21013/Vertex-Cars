import React from 'react'
import styles from '../style';
import {coverpage1, discount,robot} from '../assets';
import GetStarted from './GetStarted';

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="animate-bounce flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="deals" className="w-[32px] h-[32px]"/>
          <span className='text-white'>Great cars, even better deals</span>
        </div>
        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
            Your <br className='sm:block hidden'/> {" "}
            <span className='text-gradient'>One Stop</span> {" "}
            <br className='sm:block hidden'/>
            Car Dealership
          </h1>
          <div className='ss:flex ml-1 hidden md:mr-4 mr-0'>
            <GetStarted/>
          </div>
        </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Looking for a comprehensive car solution? Look no further than us! Whether you're in the market for a new or used car, need car insurance, or require repairs, we have you covered. Visit us today to find the perfect solution for all your car-related needs.
        </p>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter}  md:my-0 my-10 relative`}>
          <div>
          <img src={coverpage1} className="ml-20 w-[50%] h-[50%] relative z-[5]"/>
          <img src={robot} className="w-[100%] h-[100%] top-0 relative z-[5]"/>
          </div>
          
        <div className='absolute z-[0] w-[40%] h-[35%] top-0 blue__gradient'/>
        <div className='absolute z-[0] bottom-20 w-[40%] h-[35%] top-0 pink__gradient'/>
        <div className='absolute z-[1]  w-[50%] h-[50%] rounded-full bottom-40 white__gradient'/>
      </div>
      <div className='absolute z-[0] w-[40%] h-[35%] top-0 blue__gradient'/>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted/>

      </div>
    </section>
  )
  
}

export default Hero