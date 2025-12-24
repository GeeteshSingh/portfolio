import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Profile from './Profile';
import About from './About';
import Projects from './Projects';

const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 }
};

const pageTransition = { duration: 0.35, ease: 'easeOut' };

const AnimatedPage = ({ children }) => (
    <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={pageTransition}
    >
        {children}
    </motion.div>
);

const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route
                    path="/"
                    element={
                        <AnimatedPage>
                            <Profile />
                        </AnimatedPage>
                    }
                />
                <Route
                    path="/about"
                    element={
                        <AnimatedPage>
                            <About />
                        </AnimatedPage>
                    }
                />
                <Route
                    path="/projects"
                    element={
                        <AnimatedPage>
                            <Projects />
                        </AnimatedPage>
                    }
                />
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;
