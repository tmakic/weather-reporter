import React from 'react';
import logo from './logo.svg';
import './App.css';
import axiosBase from "axios";

const axios = axiosBase.create({
  baseURL: process.env.REACT_APP_WEATHER_API_BASE_URL
});

const onSuccessGetPosition = (position: GeolocationPosition) => {
  const latitude  = position.coords.latitude;
  const longitude = position.coords.longitude;

  alert(`latitude: ${latitude}, longitude: ${longitude}`)
}

const onErrorGetPosition = () => {
  // 都庁所在地
  const latitude  = 35.68966414887361;
  const longitude = 139.69210148192565;

  alert(`latitude: ${latitude}, longitude: ${longitude}`)
}

if(!navigator.geolocation) {
  onErrorGetPosition()
} else {
  navigator.geolocation.getCurrentPosition(onSuccessGetPosition, onErrorGetPosition);
}

function App() {
  axios.get("/onecall", {
    params: {
      lat: 35.681236,
      lon: 139.767125,
      units: "metric",
      lang: "jp",
      appid:process.env.REACT_APP_WEATHER_API_KEY
    }
  })


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
