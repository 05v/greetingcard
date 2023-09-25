import React, { useState, useEffect } from 'react';
import './Card.css';

function Timer(){
  let greetings = "Hello"

  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  if (hours >= 5 && hours < 12) {
    greetings = 'Good Morning';
  } else if (hours >= 12 && hours < 17) {
    greetings = 'Good Afternoon';
  } else {
    greetings = 'Good Evening';
  }

  const currentTime = hours + ':' + minutes;

  return (
    <div className="card">
      <h1 className="card__title">{greetings}</h1>
      <p className="card__description">{`Current time is: ${currentTime}`}</p>
    </div>
  );
}
export default Timer;