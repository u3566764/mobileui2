import { render } from '@testing-library/react';
import React ,{useEffect, useState, useCallback} from 'react';
import './App.css';
import Footer from './footer';
import SmallpageUI from './namecardUI'


function App() {
  const [pagenumber, setPagenumber] = useState(0);

  const pagenumbercallback = useCallback((pagenumber) => {
    setPagenumber(pagenumber);
  }, []);

  return (
    <div className="App">
      
      <SmallpageUI pagenumber= {pagenumber} 
      />

      <Footer
      parentpagenumbercallback = {pagenumbercallback}
      />
    </div>
  );
}

export default App;
