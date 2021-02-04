import React from 'react'
import './App.css';
import Joke from './components/Joke'

function App() {
  return (
    <div className="App">
      <Joke 
        question='joke one here'
        punchLine='punchLine one here'
      />
      <Joke 
        // question='joke one here'
        punchLine='punchLine one here'
      />
      <Joke 
        question='joke one here'
        punchLine='punchLine one here'
      />
      <Joke 
        question='joke one here'
        punchLine='punchLine one here'
      />
      <Joke 
        question='joke one here'
        punchLine='punchLine one here'
      />
    </div>
  );
}

export default App;
