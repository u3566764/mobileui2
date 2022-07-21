
function Page2() {
    return (
      <div className='smallerpage'>
      <div className="page3">
      
      PersonaldataNFTcell
      
      <PersonaldataNFTcell name={'jonh'}
      post={'jonh'}
      phone={'jonh'}
      company={'jonh'}/>
      
      <PersonaldataNFTcell name={'jonh'}
      post={'jonh'}
      phone={'jonh'}
      company={'jonh'}/>

      <PersonaldataNFTcell name={'jonh'}
      post={'jonh'}
      phone={'jonh'}
      company={'jonh'}/>
      </div>
      </div>
    );
  }

  function PersonaldataNFTcell(props){
    return(
    <div className="personaldataNFTcell">
    
    name:{props.name}<br/>
    post:{props.post}<br/>
    phone:{props.phone}<br/>
    company:{props.company}<br/>
  
    </div>
    )
  }

  export default Page2;