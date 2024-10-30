import React from 'react';

function OptionButton({ onClick, label }) {
    return (
        <button className='gap-10' onClick={onClick}>{label}</button>
    );
}

export default OptionButton;