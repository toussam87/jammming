import React from 'react';
import './PlayList.css';
import TrackList from '../TrackList/TrackList';

class PlayList extends React.Component {
    constructor(props) {
        super(props)

        this.handleNameChange = this.handleNameChange.bind(this);
    }
    
    handleNameChange(event) {
        this.setState({value: event.target.value});
    }
    render(){
        return (
            <div className="Playlist">
                <input value="New Playlist" onChange={this.handleNameChange}  />
                <TrackList tracks={this.props.playlistTracks} onRemove={this.props.onRemove} />
                <a class="Playlist-save">SAVE TO SPOTIFY</a>
            </div>
        );
    }
}

export default PlayList;