import './App.css';
import { AnimatePresence } from 'framer-motion';
import {Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
