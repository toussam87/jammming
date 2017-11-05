import React from 'react';
import './Track.css';

class Track extends React.Component {
    renderAction(isRemoval) {
        if (isRemoval) {
            return (
                <a ClassName="Tract-action"> - </a> 
            )} else {
            return (
                <a ClassName="Tract-action"> + </a> 
            )
        }
    }
    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>track name</h3>
                    <p>track artisr | track album</p>
                </div>
                <a className="Track-action">{/*<!-- + or - will go here -->*/} </a>
            </div>
        );
    }
}

export default Track;