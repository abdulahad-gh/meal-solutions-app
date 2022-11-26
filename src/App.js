import React from 'react';
import { CreateContainer, Home } from './Components';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import './index.css'
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Shared/Navbar';

const App = () => {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })
    return (
        <>
            <AnimatePresence exitBeforeEnter>

                <motion.div className="progress-bar" style={{ scaleX }} />
                <Navbar />

                <main>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='create-container' element={<CreateContainer />} />
                    </Routes>
                </main>
            </AnimatePresence>

        </>
    );
};

export default App;