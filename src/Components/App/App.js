import React, { Component } from 'react';
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar';
import SearchResults from './Components/SearchResults/SearchResults';
import PlayList from './Components/PlayList/PlayList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
       searchResults: [
        "name", "artist", "album"
       ]
    };
  }

  render() {
    return (
      <div className="App">
         <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} />
          <PlayList />
        </div>
      </div>
    );
  }
}

export default App;