function Page4() {
  return (
    <div className='smallerpage'>
    <div className="page4">
    
    page4...
    {//<Miniappcell appname={'jonh'}/>
    }

    </div>
    </div>
  );
}

function Miniappcell(props){
  return(
  <div className="miniappcell">
  
  <div className="miniappicon">
    <img src="miniappicon2.png" alt="defaulticon" />
  </div>
  appname:{props.appname}<br/>


  </div>
  )
}

export default Page4;