import React, { useEffect, useState } from 'react';
import './App.css';

function Display (props) {
  const [time, setTime] = useState(props.defaultTime)

  function formatTime(seconds) {
    if (seconds % 60 > 9) {
      return `${Math.floor(seconds / 60)}:${seconds % 60}`
    }
    return `${Math.floor(seconds / 60)}:0${seconds % 60}`
  }

  useEffect(() => {
    setInterval(() => {
      setTime(time - 1)
    }, 1000);
  })

  return (
    <div>
      <h1>
        {formatTime(time)}
      </h1>
      <button onClick={() => setTime(time - 1)}>
        Decrement Time
      </button>
    </div> 
  )
}

function Interface() {
  //modes: timer | break | long-break
  const [mode, setMode] = useState('timer')

  return (
    <div>
      <Display defaultTime={60*25}/>
    </div>
  )

}

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Interface />
      {/* Footer */}
    </div>
  );
}

export default App;
