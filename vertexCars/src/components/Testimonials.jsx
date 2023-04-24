import React from 'react'
import styles from '../style'
import { feedback } from '../constants'
import FeedbackCard from './FeedbackCard'

const Testimonials = () => {
  return (
    <section id="feedback" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative mt-10`}>
      <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient' />
      <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]' >
        <h1 className={styles.heading2} >
          What people are 
          <br className='sm:block hidden' />
          saying about us
        </h1>
        <div className='w-full md:mt-0 mt-6' >
          <p className={`${styles.paragraph} text-left max-w-[500px] ml-20`}>
          From new and used car sales to repairs and insurance, our commitment to quality is reflected in the feedback we receive from our customers - see why they keep coming back
          </p>
        </div>
      </div>
      <div className='flex flex-wrap am:justify-start justify-center w-full feedback-container relative z-[1]' >
        {feedback.map((card)=>(
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
    
    
  )
}

export default Testimonials