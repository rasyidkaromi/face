import React from 'react';

const Preemty = ({ className }) => {
    const faceStyle = {
        fontSize: 14
    };

    return (
        <div className={className}>
            <p className='Preemty'
                style={faceStyle}> pre - emptively</p>
            <br></br>
            <div className="pre-emty">
            </div>
        </div>
    );
};

export default Preemty;