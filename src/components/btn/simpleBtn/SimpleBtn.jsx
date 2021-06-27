import React from 'react';

const SimpleBtn = ({text,handleHero}) => {
    return (
        <button className="btn btn--simple--search btn--card" onClick={() => {handleHero()}}>
            {text}
        </button>
    );
}

export default SimpleBtn;
