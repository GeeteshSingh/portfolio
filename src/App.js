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
                    <Route path="/" element={<Profile />} /> {/* Home */}
                    <Route path="/about" element={<About />} /> {/* About Me */}
                    <Route path="/projects" element={<Projects />} /> {/* Projects */}
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
