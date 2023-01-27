import "./App.css";
import { AnimatePresence } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Work from "./pages/Work";

function App() {
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/aboutme" exact element={<AboutMe />} />
        <Route path="/work" exact element={<Work />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
