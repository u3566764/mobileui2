import { render } from '@testing-library/react';
import React ,{useEffect, useState} from 'react';
import './App.css';


function Namecardcell(props) {
  
  if (props.pagenumber == 1){
    return(Page1)
  }

  if (props.pagenumber == 2){
    return(Page2)
  }
    return (
      
      <div>
      <div className='namecardcell'>
        pp
      </div>
      </div>
    )
  }

  function Page1() {
    return (
      <div className='smallerpage'>
      <div className="page1">
  
        page1.....
  
      </div>
      </div>
    );
  }
  
  function Page2() {
    return (
      <div className='smallerpage'>
      <div className="page2">
  
        page2.....
  
      </div>
      </div>
    );
  }
export default  Namecardcell;