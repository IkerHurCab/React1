import { useState } from 'react';
import opciones from '../data/options';

const useChoices = () => {
    const [playerChoice, setPlayerChoice] = useState(null);
    const [cpuChoice, setCpuChoice] = useState(null);
    const [result, setResult] = useState(null);

    const makeChoice = (choice) => {
        const cpuChoice = opciones[Math.floor(Math.random() * opciones.length)].nombre;
        setPlayerChoice(choice);
        setCpuChoice(cpuChoice);
        setResult(getResult(choice, cpuChoice));
    };

    const getResult = (player, cpu) => {
        if (player === cpu) return 'Empate';
        const playerOption = opciones.find(option => option.nombre === player);
        return playerOption.gana.includes(cpu) ? 'Ganaste' : 'Perdiste';
    };

    const resetGame = () => {
        setPlayerChoice(null);
        setCpuChoice(null);
        setResult(null);
    };

    return { playerChoice, cpuChoice, result, makeChoice, resetGame };
};

export default useChoices;