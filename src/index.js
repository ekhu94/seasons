import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

const App = () => {
    window.navigator.geolocation.getCurrentPosition(
        pos => console.log(pos),
        err => console.log(err)
    );
    return (
        <div>
            Hello there.
            <SeasonDisplay />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));