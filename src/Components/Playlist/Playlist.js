import React from 'react';
import './PlayList.css';
import TrackList from '../TrackList/TrackList';

class PlayList extends React.Component {
    constructor(props) {
        super(props)

        this.handleNameChange = this.handleNameChange.bind(this);
    }
    
handleNameChange(event) {
    onNameChange = this.setState({value: event.target.value});
}

    render(){
        return (
            <div className="Playlist">
                <input value="New Playlist" onChange={this.props.handleNameChange}  />
                <TrackList tracks={this.props.playlistTracks} isRemoval={true}  onRemove={this.props.onRemove} />
                    <a className="Playlist-save">SAVE TO SPOTIFY</a>
            </div>
        );
    }
}

export default PlayList;