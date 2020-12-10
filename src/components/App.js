import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  // write your code here

  const [currentTime, setCurrentTime] = React.useState(0);

  const handleRemainingTime = (inputTime, event) => {
    if (event.keyCode !== 13) return;
    inputTime = Math.floor(inputTime);
    if (inputTime <= 0) {
      inputTime = 0;
    }
    setCurrentTime(inputTime);
  };
  useEffect(() => {
    if (currentTime > 0) {
      const id = setInterval(() => {
        setCurrentTime(currentTime - 1);
      }, 1000);
    }
    return () => clearInterval(id);
  }, [currentTime]);

  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for
          <input
            id="timeCount"
            type="number"
            onKeyDown={(event) =>
              handleRemainingTime(event.target.value, event)
            }
          />{" "}
          sec.
        </h1>
      </div>
      <div id="current-time">{currentTime}</div>
    </div>
  );
};

export default App;
