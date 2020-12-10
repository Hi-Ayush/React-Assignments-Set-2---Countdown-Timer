import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  // write your code here

  const [currentTime, setCurrentTime] = React.useState("");
  const handleRemainingTime = () => {
    let inputTime = +currentTime;
    inputTime = Math.floor(inputTime);
    if (inputTime <= 0) {
      inputTime = 0;
    }
    while (inputTime > 0) {
      setCurrentTime(inputTime--);
    }
  };

  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for
          <input
            id="timeCount"
            type="number"
            onChage={(event) => setCurrentTime(event.target.value)}
            onKeyDown={handleRemainingTime}
          />{" "}
          sec.
        </h1>
      </div>
      <div id="current-time">{currentTime}</div>
    </div>
  );
};

export default App;
