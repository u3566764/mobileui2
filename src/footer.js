import React ,{useEffect, useState} from 'react';
import './footer.css';
import { FaBeer } from 'react-icons/fa';
import { render } from '@testing-library/react';



function Footer(props) {
  useEffect(() => {
    var pagenumber = props.pagenumber

    var pagenumbercallback = props.parentpagenumbercallback
    
    const roundbutton1 = document.querySelector(".roundbutton1");
    const roundbutton2 = document.querySelector(".roundbutton2");
    const roundbutton3 = document.querySelector(".roundbutton3");
    const roundbutton4 = document.querySelector(".roundbutton4");
  
  
    roundbutton1.addEventListener('click', () => {
      pagenumbercallback(1)
      });
      
    roundbutton2.addEventListener('click', () => {
      pagenumbercallback(2)
      });
  
    roundbutton3.addEventListener('click', () => {
      pagenumbercallback(3)
      });
      
    roundbutton4.addEventListener('click', () => {
      pagenumbercallback(4)
      });
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