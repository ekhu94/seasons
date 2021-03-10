import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';

class App extends React.Component {
    state = { lat: null, errMsg: '' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            pos => this.setState({ lat: pos.coords.latitude }),
            err => this.setState({ errMsg: err.message })
        );
    }

    render() {
        const { lat, errMsg } = this.state;
        if (errMsg && !lat) {
            return (
                <h2>
                    The following error occurred: { this.state.errMsg }
                </h2>
            );
        }
        if (!errMsg && lat) {
            return <SeasonDisplay lat={ lat }/>
        }
        return <Loader text="Loading...please wait" />;
    }

}

ReactDOM.render(<App />, document.querySelector('#root'));