import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import DragMove from "./DragMove";

function App() {
  const [translate, setTranslate] = useState({
    x: 0,
    y: 0
  });

  const handleDragMove = (e) => {
    setTranslate({
      x: translate.x + e.movementX,
      y: translate.y + e.movementY
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <DragMove onDragMove={handleDragMove}>
          <div
            style={{
              transform: `translateX(${translate.x}px) translateY(${translate.y}px)`
            }}
          >
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        </DragMove>
      </header>
    </div>
  );
}

export default App;
