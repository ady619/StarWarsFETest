import React from 'react';
import './CircularProgressBar.scss';

function CircularProgressBar({ text }) {
    return (
        <div>
            <div className="circular-progress">
                <div className="circular-progress-inner"></div>
            </div>
            {text && <div className='progress-text'>{text}</div>}
        </div>

    );
}

export default CircularProgressBar;