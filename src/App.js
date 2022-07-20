import { render } from '@testing-library/react';
import React ,{useEffect, useState} from 'react';
import './App.css';
import Footer from './footer';
import NamecardUI from './namecardUI'


function App() {

  return (
    <div className="App">
      
      <NamecardUI pagenumber= {0} />

      <Footer/>
    </div>
  );
}

export default App;
