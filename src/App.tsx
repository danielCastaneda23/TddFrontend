import './App.css';

import React, { useState } from 'react';

import Card from './components/Card/Card';
import logo from './logo.svg';

function App() {
  const [lightTheme, setLightTheme] = useState<Boolean>(false)
  const handleOnClick = () => {
    setLightTheme(!lightTheme)
  }
  return (
    <main className='container'>
      <button className='button--position' onClick={handleOnClick}>Change Theme</button>
      <Card theme={lightTheme} />
    </main>
  );
}

export default App;
