import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Nav from './Nav';

function App() {
  return (
    <div className="App">
      {/* <Nav /> */}
      <div className="Menu">
          <a>Home</a> 
          <a>About</a> 
          <a>Services</a> 
      </div>
        <header className="App-header">
        
        <h1>Stuntman4Hire LLC</h1>
        <img src="https://secure.i.telegraph.co.uk/multimedia/archive/02257/potd-base-jump_2257955b.jpg" />
       
      </header>
    </div>
  );
}

export default App;
