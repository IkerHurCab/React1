import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Game from './components/Game';
import Play from './components/Play';7
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return(
        <Router>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Game />} />
                <Route path="/game" element={<Play />} />
                <Route path="/contact" element={<Contact/>}></Route>
            </Routes>
            <Footer></Footer>
        </Router> 
    );
}

export default App;