import React from 'react';
function ResultDisplay({ result }) {
    return (
        <div>
            {result && <h2>{result}</h2>}
        </div>
    );
}

export default ResultDisplay;