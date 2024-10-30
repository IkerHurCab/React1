import React from 'react';

function Game() {
    return (
        <>

            <div className="flex flex-col items-center bg-white text-gray-800 py-8 px-4 space-y-6 max-w-lg mx-auto rounded-lg shadow-lg mt-10">
                <h2 className="text-2xl text-center font-semibold">
                    ¡Bienvenido al mejor juego de la historia!
                    <br />
                    <span className="text-blue-600">Piedra Papel Tijeras Lagarto Spock</span>
                </h2>
                <p className="text-center text-lg px-4 leading-relaxed">
                    ¿No te sabes las normas? ¡No hay problema! Simplemente memoriza la imagen, y cuando estés listo, dale a jugar.
                </p>
                <img 
                    src={'../public/media/logo.png'} 
                    alt="Logo" 
                    className="w-32 h-32 rounded-full border-4 border-blue-300 shadow-lg" 
                />
                <div className="flex flex-row gap-8">          
                    <a href="/game" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">JUGAR</a>
                    <a href="/contact" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">CONTACTO</a>
                </div>
    
            </div>
        </>
    );
}

export default Game;
