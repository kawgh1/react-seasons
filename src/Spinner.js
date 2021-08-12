import React from 'react';

// Component to show a REUSABLE loading spinner

const Spinner = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">
                {props.message}
            </div>
        </div>
    );

};

export default Spinner;