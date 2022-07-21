import { render } from '@testing-library/react';
import React ,{useEffect, useState} from 'react';
import './App.css';
import Page1 from './page1';
import Page2 from './page2';
import Page3 from './page3';
import Page4 from './page4';



function SmallpageUI(props) {
  

  if (props.pagenumber === 1){    
    return( 
    <div>
      {Page1()}
    </div> 
    )
  }

  if (props.pagenumber === 2){
    return( 
      <div>
        {Page2()}
      </div> 
      )
  }

  if (props.pagenumber === 3){
    return( 
      <div>
        {Page3()}
      </div> 
      )
  }

  if (props.pagenumber === 4){
    return( 
      <div>
        {Page4()}
      </div> 
      )
  }
    return (
      
      <div className='smallerpage'>
      <div className='page0'>
        pp
      </div>
      </div>
    )
  }


  



export default  SmallpageUI;