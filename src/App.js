import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <svg width="900" height = "500">
      <circle
        cx ="480"
        cy ="300"
        r="200"
        fill ="yellow"
      />
      </svg>
    <Circle  />
    </div>
  );
}
const Circle =() => (
  <div className="App">
      <svg width="900" height = "500">
      <circle
        cx ="480"
        cy ="300"
        r="200"
        fill ="yellow"
      
      />
      </svg>

    </div>
);


export default App;
