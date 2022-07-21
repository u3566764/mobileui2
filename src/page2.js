import ReactCSSTransitionGroup from 'react-transition-group'; // ES6
var ReactCSSTransitionGroup = require('react-transition-group'); // ES5 with npm

function Page2() {
    return (
      <div className='smallerpage'>
      <div className="page3">
      
      page2...
      <Namecardcell name={'jonh'}
      post={'jonh'}
      phone={'jonh'}
      company={'jonh'}/>
      
      <Namecardcell name={'jonh'}
      post={'jonh'}
      phone={'jonh'}
      company={'jonh'}/>
      
      <Namecardcell name={'jonh'}
      post={'jonh'}
      phone={'jonh'}
      company={'jonh'}/>
      
      <Namecardcell name={'jonh'}
      post={'jonh'}
      phone={'jonh'}
      company={'jonh'}/>

      <Namecardcell name={'jonh'}
      post={'jonh'}
      phone={'jonh'}
      company={'jonh'}/>
      </div>
      </div>
    );
  }

  function Namecardcell(props){
    return(
    <div className="namecardcell">
    
    name:{props.name}<br/>
    post:{props.post}<br/>
    phone:{props.phone}<br/>
    company:{props.company}<br/>
  
    </div>
    )
  }

  export default Page2;