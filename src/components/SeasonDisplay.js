import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
    summer: {
        text: "Let's go to the beach",
        iconName: 'sun',
    },
    winter: {
        text: 'Burr, its Chilly!',
        iconName: 'snowflake',
    },
};

// Helper f
const getSeason = (lat, month) => {
    if (lat > 0) {
        return month > 2 && month < 9 ? 'summer' : 'winter';
    } else {
        return month > 2 && month < 9 ? 'winter' : 'summer';
    }
};

// SeasonDisplay - component f
const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const { text, iconName } = seasonConfig[season];
    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    );
};

export default SeasonDisplay;
