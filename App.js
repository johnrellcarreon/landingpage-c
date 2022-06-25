import React from 'react'
import download from './img/download.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to my Landing page</h1>
      <h2>Created by Johnrell E. Carreon</h2>
      <h3>BSIT2A</h3>
      <img src={download} alt="download" />
    </div>
  );
}

export default App;
