import './App.css';
import Bottom from './components/Bottom';
import Top from './components/Top';

import React from 'react';

function App() {
  return (
    <div className="container">
      <h1>최상단 화면</h1>
      <Top />
      <Bottom />
    </div>
  );
}

export default App;
