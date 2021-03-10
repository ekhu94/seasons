import React from 'react';

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = props => {
    const season = getSeason(props.lat, new Date().getMonth());
    const textDisplay = season === 'summer' ? 'Winter is coming.' : 'Winter is here.';

    return <h1>{ textDisplay }</h1>
};

export default SeasonDisplay;