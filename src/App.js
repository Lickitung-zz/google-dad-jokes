import React from 'react';
import SearchForm from './SearchForm'
import './App.css';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      searchTerm: '',
      jokes: [],
      isFetchingJokes: false
    };

    this.onSearchChange = this.onSearchChange.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  searchJokes(limit = 20) {
    this.setState({ isFetchingJokes: true });

    fetch(`https://icanhazdadjoke.com/search?term=${this.state.searchTerm}&limit=${limit}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    })
    .then(response => response.json())
    .then(json => {
      const jokes = json.results;
      console.log('jokes', jokes);
      this.setState({
        jokes,
        isFetchingJokes: false
      });
    });
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  onSearchSubmit(event) {
    event.preventDefault();
    this.searchJokes();
  }

  renderJokes() {
    return (
      <ul>
        {this.state.jokes.map(item => <li key={item.id}>{item.joke}</li>)}
      </ul> 
    );
  }

  render() {
    return (
      <div>
        <SearchForm 
          onFormSubmit = {this.onSearchSubmit}
          onSearchValueChange = {this.onSearchChange}
          isSearching = {this.state.isFetchingJokes}
          onSingleSearchClick = {() => this.searchJokes(1)}
        />

        {this.state.isFetchingJokes 
          ? 'Searching for jokes...'
          : this.renderJokes()
        }

        <p>search term: {this.state.searchTerm}</p>
      </div>
    );
  }
}

export default App;
