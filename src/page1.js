function Page1() {
    return (
      <div className='smallerpage'>
      <div className="page1">
      
      page1...
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

  export default Page1;