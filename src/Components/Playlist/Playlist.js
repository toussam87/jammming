import React from 'react';
import './PlayList.css';
import TrackList from '../TrackList/TrackList';

class PlayList extends React.Component {
    constructor(props) {
        super(props)

        this.handleNameChange = this.handleNameChange.bind(this);
    }
    
    handleNameChange(event) {
        this.setState({onNameChange: event.target.value}); 
    }


    render(){
        return (
            <div className="Playlist">
                <input onChange={this.handleNameChange} placeholder="New Playlist" />
                <TrackList tracks={this.props.playlistTracks} isRemoval={true}  onRemove={this.props.onRemove} />
                    <a className="Playlist-save">SAVE TO SPOTIFY</a>
            </div>
        );
    }
}

export default PlayList;