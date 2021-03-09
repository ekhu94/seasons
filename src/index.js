import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = { lat: null, long: null, errorMsg: "" };

        window.navigator.geolocation.getCurrentPosition(
            pos => {
                this.setState({
                    long: pos.coords.longitude,
                    lat: pos.coords.latitude
                })
            },
            err => {
                this.setState({ errorMsg: err.message })
            }
        );
    }

    render() {
        return (
            <h2>
                Latitude: { this.state.lat } <br />
                Longitude: { this.state.long } <br />
                { this.state.errorMsg }
            </h2>
            // <h2>Longitude: { this.state.long }</h2>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));