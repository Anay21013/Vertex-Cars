import React from 'react'
import { useState } from 'react';
import  {close} from '../assets';
import { logo3 } from '../assets';
import { logo4 } from '../assets';
import {menu} from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <div className="flex py-6 justify-around items-center navbar">
        <img src={logo3} alt='vertex cars' className="w-[30px]"/>
        <img src={logo4} alt='vertex cars' className="w-[120px]"/>
      </div>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav,id)=>(
          <li key={nav.id} className={"font-poppins font-normal cursor-pointer text-[16px] text-white mr-10"}>
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src={toggle?close:menu} 
          alt="menu" 
          className='w-[28px] h-[28px] object-contain'
          onClick={()=>setToggle((prev) => !prev)}/>
          <div className={`${toggle ? 'flex': 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
            <ul className="list-none flex flex-col justify-end items-center flex-1">
              {navLinks.map((nav,id)=>(
                <li key={nav.id} className={"font-poppins font-normal cursor-pointer text-[16px] text-white mb-4"}>
                  <a href={`#${nav.id}`}>
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
      </div>
    </nav>
  )
}

export default Navbar