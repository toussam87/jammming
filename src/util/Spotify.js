import React from 'react';

let userAccess

class Spotify extends React.Component {
    getAccessToken() {
        if (userAccess) {
            return new Promise(resolve => resolve(accessToken));
        }
    }
}

export default Spotify;