import React from 'react'
import './app.scss';
import Doc from './components/Doc';
import Macwindow from './windows/Macwindow';

const App = () => {
  return (
    <div >
      <main>
<Doc />
      </main>
      <Macwindow/>
    </div>
  )
}

export default App  
