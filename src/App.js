import React from 'react';
import './App.css';
import bar from './bar.jpg';
import geri from './geri.jpg';
import farage from './farage.jpg';

function BrexitJoke(props) {
  return (
    <div>
      <img src={props.img} alt=" " />
      <h2>{props.text}</h2>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <h1>Welcome the Brexit Jokes App!</h1>
      <BrexitJoke
        text="Joke 1"
        img={bar} />
      <BrexitJoke
        text="Joke 2"
        img={geri} />
      <BrexitJoke
        text="Joke 3"
        img={farage} />
    </div>
  );
}

export default App;
