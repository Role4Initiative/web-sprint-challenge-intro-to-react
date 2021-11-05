import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Characters from './components/Characters.js';

const App = () => {
  const characterList = [];
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characters, setCharacters] = useState(characterList)
  
  useEffect(() => {
    axios.get("https://swapi.dev/api/people")
      .then(resp) => {
        console.log(resp.data)
        setCharacters(resp.data)
      }
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Characters characters={characters} />
    </div>
  )
}

export default App;
