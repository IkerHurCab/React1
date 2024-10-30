import React from 'react';
import OptionButton from './OptionButton';
import ResultDisplay from './ResultDisplay';
import MessageDisplay from './MessageDisplay';
import GameControls from './GameControls';
import useChoices from '../hooks/useChoices';

function Play() {
    const { playerChoice, cpuChoice, result, makeChoice, resetGame } = useChoices();

    return (
        <div className="flex flex-col items-center justify-center p-6 bg-gray-100 min-h-screen space-y-8">
            <h2 className="text-3xl font-bold text-gray-800">Elige tu jugada</h2>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                <div className="bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-md transition transform hover:scale-105 text-center">
                    <OptionButton onClick={() => makeChoice('piedra')} label="🪨 Piedra" />
                </div>
                <div className="bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-md transition transform hover:scale-105 text-center">
                    <OptionButton onClick={() => makeChoice('papel')} label="📄 Papel" className="bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-md transition transform hover:scale-105" />
                </div>
                <div className="bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-md transition transform hover:scale-105 text-center">
                    <OptionButton onClick={() => makeChoice('tijeras')} label="✂️ Tijeras" className="bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-md transition transform hover:scale-105" />

                </div>
                <div className="bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-md transition transform hover:scale-105 text-center">
                    <OptionButton onClick={() => makeChoice('lagarto')} label="🦎 Lagarto" className="bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-md transition transform hover:scale-105" />

                </div>
                <div className="bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-md transition transform hover:scale-105 text-center">
                    <OptionButton onClick={() => makeChoice('spock')} label="🖖 Spock" className="bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-md transition transform hover:scale-105" />

                </div>

            </div>

            <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-6 text-center space-y-4">
                <ResultDisplay result={result} />
                <MessageDisplay playerChoice={playerChoice} cpuChoice={cpuChoice} />
            </div>
            <div className="bg-blue-500 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-blue-600 transition transform hover:scale-105" >
                <GameControls onReset={resetGame} />
            </div>

        </div>
    );
}

export default Play;
