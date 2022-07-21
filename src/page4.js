function Page4() {
  return (
    <div className='smallerpage'>
    <div className="page4">

    <Miniappcell appname={'jonh'} appiconurl={'miniappicon2.png'}/>    
    <Miniappcell appname={'jonh'} appiconurl={'miniappicon2.png'}/>    
    <Miniappcell appname={'jonh'} appiconurl={'miniappicon2.png'}/>    
    <Miniappcell appname={'jonh'} appiconurl={'miniappicon2.png'}/>    
    <Miniappcell appname={'jonh'} appiconurl={'miniappicon2.png'}/>    
    <Miniappcell appname={'jonh'} appiconurl={'miniappicon2.png'}/>    
    <Miniappcell appname={'jonh'} appiconurl={'miniappicon2.png'}/>    
    <Miniappcell appname={'jonh'} appiconurl={'miniappicon2.png'}/> 
    </div>
    </div>
  );
}

function Miniappcell(props){
  const appiconurl22 = props.appiconurl;

  return(
  <div className="miniappcell">
  
  <div className="miniappicon">
  <img src={appiconurl22} width={'80vh'} height={'80vh'} alt="defaulticon" />
  </div>


  appname:{props.appname}<br/>


  </div>
  )
}

export default Page4;