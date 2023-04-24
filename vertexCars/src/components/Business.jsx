import React from 'react'
import {features} from '../constants';
import styles,{layout} from '../style';
import Button from './Button';

const FeatureCard = ({icon,title,content,index})=>(
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6":"mb-0" } feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src = {icon} alt="icon" className='w-[50%] h-[50%] object-contain'/>
    </div>
    <div className='flex-1 flex flex-col ml-3'>
      <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
        {title}
      </h4>
      <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px]'>
        {content}
      </p>
    </div>
  </div>
)

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      We take care of your car,<br className='sm:block hidden'/> so you don't have to
      </h2>
      <p className={`${styles.paragraph} max-w-[500px] mt-5`}>
      From selling quality new and used cars to offering car insurance and repairs, 
      we take pride in making car ownership as convenient and worry-free as possible.
      With our team of experienced technicians, customers can trust that their vehicles are in good hands.
      </p>

      
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature,index)=>(
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}

      </div>
    </section>
  )
}

export default Business