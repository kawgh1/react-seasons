import React from 'react'
import './SeasonDisplay.css'

// design pattern - Component configuration setup

const seasonConfig = {

    summer: {
        text: 'Let\'s hit the beach!',
        iconName: 'sun'
    },
    winter: {
        text: 'Brrr it\'s cold!',
        iconName: 'snowflake'
    }
}


// extract logic outside of const Components as possible

// Basic app logic
// Northern Hemisphere
/* 
Date.getMonth() - returns a 0-11 number for the current month
JAN - 0 WINTER
FEB - 1 WINTER
MAR - 2 WINTER
APR - 3 SUMMER
MAY - 4 SUMMER
JUN - 5 SUMMER
JUL - 6 SUMMER
AUG - 7 SUMMER
SEP - 8 SUMMER
OCT - 9 WINTER
NOV - 10 WINTER
DEC - 11 WINTER

// Southern Hemisphere

JAN - 0 SUMMER
FEB - 1 SUMMER
MAR - 2 SUMMER
APR - 3 WINTER
MAY - 4 WINTER
JUN - 5 WINTER
JUL - 6 WINTER
AUG - 7 WINTER
SEP - 8 WINTER
OCT - 9 SUMMER
NOV - 10 SUMMER
DEC - 11 SUMMER

*/
const getSeason = (lat, month) => {

    if (month > 2 && month < 9) {
        // if latitude is > 0, then we know we're in the Northern Hemisphere
        return lat > 0 ? 'summer' : 'winter';
    } else {

        // if latitude < 0, then we know we're in the Southern Hemisphere
        return lat > 0 ? 'winter' : 'summer';
    }


}


const SeasonDisplay = (props) => {

    // console.log(props)
    const season = getSeason(props.lat, new Date().getMonth());
    // const text = season === 'winter' ? 'Brrr, it\'s cold!' : 'Let\'s hit the beach!'
    // const icon = season === 'winter' ? 'snowflake' : 'sun';
    const { text, iconName } = seasonConfig[season]; // { text, iconName}

    console.log(season)
    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div >
    );
}

export default SeasonDisplay;