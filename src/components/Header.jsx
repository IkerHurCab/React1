import React from 'react';

function Header() {
    return(
        <header className="flex justify-between items-center bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 p-6 shadow-md">
            <h1 className="text-3xl font-bold text-white tracking-wider drop-shadow-md">
                El JUEGO DEL AÑO
            </h1>

            <nav>
                <ul className='flex gap-10 text-white'>
                    <li className='hover:font-bold'><a href='/'>Inicio</a></li>
                    <li className='hover:font-bold'><a href='/game'>Jugar</a></li>
                    <li className='hover:font-bold'><a href='/contact'>Contacto</a></li>
                </ul>
            </nav>
        </header>)
}
export default Header;