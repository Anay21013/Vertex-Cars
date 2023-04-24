import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Business from './components/Business';
import Footer from './components/Footer';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import GetStarted from './components/GetStarted';
import CTA from './components/CTA';
import Clients from './components/Clients';
import Button from './components/Button';
import Contact from './components/Contact';

const App = () => {
  return (
    
    <div className='bg-primary w-full overflow-hidden'>
      <div className='sm:px-16 px-6 flex justify-center items-center'>
        <div className='xl:max-w-[1280px] w-full'>
          <Navbar />
        </div>
      </div>

      <div className='bg-primary flex justify-center items-start'>
        <div className='xl:max-w-[1280px] w-full'>
          <Hero />
        </div>
      </div>

      <div className='bg-primary sm:px-16 px-6 flex justify-center items-start'>
        <div className='xl:max-w-[1280px] w-full'>
          
          <Stats/> 
          <Business/> 
          <Clients />
          <Testimonials/> 
          
          
          <Contact/>
          <CTA/>
          <Footer/>
        </div>
      </div>

    </div>
  )
}

export default App