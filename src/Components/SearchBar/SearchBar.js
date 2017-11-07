import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.search = this.search.bind(this);
    }

    search(term) {
       this.state({searchResults: this.state.searchResults
        })
    }

    handleTermChange(event) {
        this.onTermChange(event.target.value); 
    }

    render() {
        return (
            <div className="SearchBar">
                <input onChange={this.props.handleTermChange} placeholder="Enter A Song, Album, or Artist" />
                <a>SEARCH</a>
            </div>
        );  
    }
}

export default SearchBar;

// this.setState({ playlistTracks: this.state.playlistTracks });