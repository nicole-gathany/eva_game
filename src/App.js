import React from "react";
import ball from "./balls/ball.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ball} className="ball" alt="ball" />
      </header>
    </div>
  );
}

export default App;
