import React from 'react'
import styles from '../style'

const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className='flex-l flex flex-col'>
        <h2 className={styles.heading2}>Try our services now!</h2>
        <p className={`${styles.paragraph} max-w-[1100px] mt-5`}>Experience the best in car dealership services - our team of experts is here to provide you with top-notch service for all your automotive needs.
        Visit us for a one-stop-shop automotive experience that delivers quality, convenience, and expertise in every service we offer.
        </p>
      </div>
      <a href="https://www.google.com/maps/place/Vertex+Cars/@28.7057757,77.1223241,17z/data=!3m1!4b1!4m6!3m5!1s0x390d03e004ecaab9:0xf6be0bec7edf7970!8m2!3d28.705771!4d77.124899!16s%2Fg%2F1hm3046w4">
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <button type='button' className={`py-1 px-2 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded ${styles}`}>
        Visit us
      </button>
      </div>
      </a>
    </section>
    
  )
}

export default CTA