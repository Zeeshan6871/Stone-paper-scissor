import React from 'react';

const Scoreboard = (props) => (
    <div 
        id="scoreboard" 
        style={{display: 'flex', justifyContent: 'space-between'}}
    >
        <div className="ele">
            You -
            <span id="yourScoreSpan">{props.your}</span>
        </div>
        <div className="ele">
            <span id="theirScoreSpan">{props.their}</span>
            - Them
        </div>
    </div>
);

export default Scoreboard;