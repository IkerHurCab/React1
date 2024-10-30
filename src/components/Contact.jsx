import React from 'react';

function Contact() {
    return (
        <div className="flex flex-col items-center bg-gray-100 py-10 px-6 min-h-screen">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Contáctanos</h2>
            <p className="text-gray-600 mb-8 text-center max-w-md">
                Si tienes alguna pregunta o quieres comunicarte con nosotros, completa el formulario o usa nuestra información de contacto.
            </p>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8 w-full max-w-lg text-center">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Información de Contacto</h3>
                <p className="text-gray-600">📞 Teléfono: +34 111 222 333</p>
                <p className="text-gray-600">✉️ Email: elmejorjuegodela@hola.apruebame</p>
                <p className="text-gray-600">📍 Dirección: Calle Monlau 7, Barcelona</p>
            </div>

            <form className="bg-white rounded-lg shadow-md p-6 w-full max-w-lg">
                <h3 className="text-xl font-semibold text-gray-700 mb-4 text-center">Formulario de Contacto</h3>

                <label className="block text-gray-700 mb-2">Nombre</label>
                <input 
                    type="text" 
                    className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4" 
                    placeholder="Nombre" 
                />

                <label className="block text-gray-700 mb-2">Correo Electrónico</label>
                <input 
                    type="email" 
                    className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4" 
                    placeholder="Correo electrónico" 
                />

                <label className="block text-gray-700 mb-2">Mensaje</label>
                <textarea 
                    className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6" 
                    rows="5" 
                    placeholder="Escribe tu mensaje aquí..."
                ></textarea>

                <button 
                    type="submit" 
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out"
                >
                    Enviar Mensaje
                </button>
            </form>
        </div>
    );
}

export default Contact;
