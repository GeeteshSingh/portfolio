import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Profile from './components/Profile'; // Home Page
import About from './components/About'; // About Me Page
import Projects from './components/Projects'; // Projects Page
import Footer from './components/Footer';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Profile />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} /> 
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
