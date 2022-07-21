function Page4() {
  return (
    <div className='smallerpage'>
    <div className="page4">
    <Miniappcell appname={'jonh'}/>

    <Miniappcell appname={'jonh'}/>
    <Miniappcell appname={'jonh'}/>
    <Miniappcell appname={'jonh'}/>
    <Miniappcell appname={'jonh'}/>
    <Miniappcell appname={'jonh'}/>
    <Miniappcell appname={'jonh'}/>
    <Miniappcell appname={'jonh'}/>    

    </div>
    </div>
  );
}

function Miniappcell(props){
  return(
  <div className="miniappcell">
  
  <div className="miniappicon">
    <img src="miniappicon2.png"width={'80vh'} height={'80vh'} alt="defaulticon" />
  </div>
  appname:{props.appname}<br/>


  </div>
  )
}

export default Page4;