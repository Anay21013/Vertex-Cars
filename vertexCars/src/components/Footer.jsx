import React from 'react';
import styles from '../style';
import { logo3 } from '../assets';
import { logo4 } from '../assets';
import { footerLinks, socialMedia } from '../constants';
import { direction,mail,phone } from '../assets';

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-2 w-full`}>
        <div className='flex flex-col justify-start md:mr-[1140px]'>
          <div className='flex py-6 justify-around items-center navbar'>
            <img src={logo3} alt='vertex' className="w-[40px]"/>
            <img src={logo4} alt='cars' className="w-[160px] ml-0 mb-0.5" />
          </div>
          
 
        </div>
      </div>
      <br className='white'/>
          <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-6'>
            
              <div className='flex flex-row mt-3'>
              <img src={direction} className='w-[32px] h-[32px] relative z-[1]' />
              <a href="https://www.google.com/maps/place/Vertex+Cars/@28.7057757,77.1223241,17z/data=!3m1!4b1!4m6!3m5!1s0x390d03e004ecaab9:0xf6be0bec7edf7970!8m2!3d28.705771!4d77.124899!16s%2Fg%2F1hm3046w4">
              <p className={`text-dimWhite ml-3 font-poppins max-w-[310px]`}>Shop No.2 CSC-2, Pocket 10, Sector 8D, Rohini, Delhi, 110085</p>
              </a>
              
              </div>

              <div className='flex flex-row mt-3'>
              <img src={phone} className='w-[32px] h-[32px] relative z-[1]' />
              <p className={`text-dimWhite ml-3 font-poppins max-w-[310px]`}>+91 098113 97424</p>
              </div>
              
              <div className='flex flex-row mt-3'>
              <img src={mail} className='w-[32px] h-[32px] relative z-[1]' />
              <a href="mailto:mohit@vertexcars.in">
              <p className={`text-dimWhite ml-3 font-poppins max-w-[310px]`}>mohit@vertexcars.in</p>
              </a>
              
              </div>
           
          </div>
          <div className='flex flex-row md:mt-20 mt-6'>
            {socialMedia.map((social,index)=>(
              <a href = {social.link} >
              <div>
              <img key={social.id} src={social.icon} alt={social.id} 
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length-1?'mr-6':'mr-0'}` } 
              />
              </div>
              </a>
            ))}
          </div>
    </section>
  )
}

export default Footer