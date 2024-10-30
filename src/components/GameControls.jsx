import React from 'react';

function GameControls({ onReset }) {
    return (
        <button onClick={onReset}>Reiniciar Juego</button>
    );
}

export default GameControls;