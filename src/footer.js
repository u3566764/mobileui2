import React ,{useEffect, useState} from 'react';
import './footer.css';
import { FaBeer } from 'react-icons/fa';
import { render } from '@testing-library/react';



function Footer() {
  const roundbutton1 = document.querySelector(".roundbutton1");
  const roundbutton2 = document.querySelector(".roundbutton2");
  const roundbutton3 = document.querySelector(".roundbutton3");
  const roundbutton4 = document.querySelector(".roundbutton4");


  roundbutton1.addEventListener('click', () => {
    console.log("aa")
    });
  roundbutton2.addEventListener('click', () => {
    console.log("aa")
    });
    return (
      <div className="Footer">
        
        <button className='roundbutton1'> 
        <FaBeer/>
        111 </button>

        <button className='roundbutton2'> 
        <FaBeer/>
        222 </button>

        <button className='roundbutton3'> 
        <FaBeer/>
        333 </button>
        
        
        <button className='roundbutton4'> 
        <FaBeer/>
        444 </button>
        

      </div>
    );
  }
  
  export default Footer;