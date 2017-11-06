import React, { Component } from 'react';
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar';
import SearchResults from './Components/SearchResults/SearchResults';
import PlayList from './Components/PlayList/PlayList';
import Spotify from './Components/util/Spotify'; 

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
       searchResults: [
        "name", "artist", "album"
       ],
       playlistName: '',
       playlistTracks: [
         "name", "artists", "album"
       ]
    };
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
  }

  addTrack(track) {
    if (track.id !== this.props.playlistTracks) {
      this.setState((prevState, props) => ({
        playlistTracks: this.state.playlistTracks
        }) 
      )}
      this.onAdd = this.onAdd.bind(this);
    }

  removeTrack(track) {
    if(track.id === this.props.playListTracks) {
      this.setState((prevState, props) => ({
          playlistTracks: this.state.playlistTracks
        }) 
      )}
    }

  updatePlaylistName(name) {
    this.playlistName = this.state.playlistName;
  }

  search(term) {
    Spotify.search(term).then(searchResults => {
      this.setState({searchResults: searchResults});
    });
  } 
  
  render() {
    return (
      <div className="App">
         <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} onAdd={this.props.onAdd}/>
          <PlayList playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
        </div>
      </div>
    );
  }
}

export default App;