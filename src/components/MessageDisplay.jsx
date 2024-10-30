import React from 'react';

function MessageDisplay({ playerChoice, cpuChoice }) {
    return (
        <div>
            {playerChoice && cpuChoice && (
                <p>Elegiste {playerChoice}, la CPU ha elegido {cpuChoice}</p>
            )}
        </div>
    );
}

export default MessageDisplay;