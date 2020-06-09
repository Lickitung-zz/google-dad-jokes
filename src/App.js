import React from 'react';
import './App.css';

function App(props) {

  const onTellJoke = () => {
    fetch('https://icanhazdadjoke.com/', {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    })
    .then(response => response.json())
    .then(json => console.log(json));
  };

  return (
    <button onClick={onTellJoke}>Tell me a joke</button>
  );
}

export default App;
