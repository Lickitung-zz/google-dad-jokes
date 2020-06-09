import React from 'react';
import './App.css';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      joke: null,
      isFetchingJoke: false
    };

    this.onTellJoke = this.onTellJoke.bind(this);
  }

  componentDidMount() {
    this.fetchJoke();
  }

  fetchJoke() {
    this.setState({ isFetchingJoke: true });
    fetch('https://icanhazdadjoke.com/', {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    })
    .then(response => response.json())
    .then(json => {
      this.setState({ 
        joke: json.joke,
        isFetchingJoke: false 
      });
    });
  }

  onTellJoke() {
    this.fetchJoke();
  };

  render() {
    return (
      <div>
        <button onClick={this.onTellJoke} disabled={this.state.isFetchingJoke}>Tell me a joke</button>
        <p>{this.state.isFetchingJoke ? 'Loading joke...' : this.state.joke}</p>
      </div>
    );
  }
}

export default App;
