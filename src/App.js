import React from "react";
import ball from "./balls/ball.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <img src={ball} className="ball" alt="ball" />
      </div>
    </div>
  );
}

export default App;
