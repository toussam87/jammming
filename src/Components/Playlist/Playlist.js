import React from 'react';
import './PlayList.css';
import TrackList from '../TrackList/TrackList';

class PlayList extends React.Component {
    render(){
        return (
            <div className="Playlist">
                <input defaultValue={'New Playlist'}/>
                <TrackList />
                <a class="Playlist-save">SAVE TO SPOTIFY</a>
            </div>
        );
    }
}

export default PlayList;