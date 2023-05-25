import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components';

import AllLPs from './pages/LP/ListLP';
import UpdatesLP from 'pages/LP/UpdatingLP';
import CreatesLP from 'pages/LP/CreatingLP';

import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from 'pages/LP/MainPage';
import RandomLP from 'pages/LP/RandomLP';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={ <MainPage /> } />
                <Route path="/music/lp" element={ <AllLPs /> } />
                <Route
                    path="/music/lp/update/:id"
                    element={ <UpdatesLP /> }
                />
                <Route path="/music/lp/create" element={ <CreatesLP /> }/>
                <Route path="/music/lp/random" element={ <RandomLP /> } />
            </Routes>
        </Router>
    )
}

export default App