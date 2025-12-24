import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
    return (
        <Router>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <Header />
                <Routes>
                    <Route path="/" element={<Profile />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                </Routes>
                <Footer />
            </motion.div>
        </Router>
    );
}

export default App;
