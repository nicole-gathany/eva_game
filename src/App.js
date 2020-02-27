import React from "react";
import ball from "./balls/ball.svg";
import "./App.css";
import Balls from "./components/Balls";

function App() {
  return (
    <div className="App">
      <div>
        <Balls></Balls>
      </div>
    </div>
  );
}

export default App;
