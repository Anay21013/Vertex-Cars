import React,{useEffect} from "react";
import {pic1,pic2,pic3,pic4} from '../assets';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from "../style";

const Clients = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative mt-10`}>
    <div className='flex flex-col mt-10'>
      
      <div data-aos="zoom-in-right" data-aos-duration="1000" >
        <div className='absolute z-[0] bottom-20 w-[53%] h-[53%] top-0 pink__gradient'/>
        <div className='absolute z-[1] bottom-20 w-[30%] h-[35%] top-0 white__gradient'/>
        < img src={pic1} className='relative z-[5]' />
      </div>
      <div data-aos="zoom-in-left" data-aos-duration="1000" className="mt-5  md:ml-[720px]">
        < img src={pic2} className='relative z-[5]' />
      </div> 
      <div data-aos="zoom-in-right" data-aos-duration="1000" className="mt-5 ">
      
        < img src={pic3} className='relative z-[5]' />
      </div>
      
      <div data-aos="zoom-in-left" data-aos-duration="1000" className="mt-5 md:ml-[720px] ">
      <div className='absolute z-[0] bottom-20 w-[80%] h-[80%] top-0 pink__gradient'/>
      <div className='absolute z-[1] bottom-20 w-[40%] h-[40%] top-0 white__gradient'/>
        < img src={pic4} className='relative z-[5]' />
      </div>  
    </div>
    </section>
  )
}

export default Clients