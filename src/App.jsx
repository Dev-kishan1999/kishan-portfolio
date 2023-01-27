import './App.css';
import { AnimatePresence } from 'framer-motion';
import {Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';

function App() {
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes>
        <Route  path='/' exact element={<Home />} />
        <Route  path='/aboutme' exact element={<AboutMe />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
