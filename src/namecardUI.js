import { render } from '@testing-library/react';
import React ,{useEffect, useState} from 'react';
import './App.css';


function NamecardUI(props) {
  

  if (props.pagenumber == 1){
    
    console.log('t2')
    
    return( 
    <div>
      {Page1()}
    </div> 
    )
  }

  if (props.pagenumber == 2){
    return( 
      <div>
        {Page2()}
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

  function Page1() {
    return (
      <div className='smallerpage'>
      <div className="page1">
      
      <Namecardcell
      name={'jonh'}
      post={'jonh'}
      phone={'jonh'}
      company={'jonh'}
      />
      
      <Namecardcell
      name={'jonh'}
      post={'jonh'}
      phone={'jonh'}
      company={'jonh'}
      />
            
      <Namecardcell
      name={'jonh'}
      post={'jonh'}
      phone={'jonh'}
      company={'jonh'}
      />
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

function Namecardcell(props){
  <div className="namecardcell">
  
  name:{props.name}
  post:{props.post}
  phone:{props.phone}
  company:{props.company}

</div>
}
export default  NamecardUI;