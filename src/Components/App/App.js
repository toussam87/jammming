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
       playlistTracks: []
    };
    this.addTrack = this.addTrack.bind(this); 
    this.removeTrack = this.removeTrack.bind(this);
    // this.updatePlaylistName = this.updatePlaylistName.bind(this);
  }

// addTrack(track) {
//   if(this.state.playlistTracks.indexOf(track) === -1) {
//     this.state.playlistTracks.push(track);
//     this.setState({ playlistTracks: this.state.playlistTracks });
//   }
// }

 addTrack(track) {
     let tracks = this.state.playlistTracks;
         tracks = tracks.push(track);
         this.setState({playlistTracks: tracks })
  }

  removeTrack(track) {
   let tracks = this.state.playlistTracks;
   tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);
   this.setState({playlistTracks: tracks});
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
          <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/> 
          <PlayList playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onNameChange={this.updatePlaylistName}/>
        </div>
      </div>
    );
  }
}

export default App;