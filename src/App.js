import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Products from "./pages/Products";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Router>

      <Navbar />

      <Routes>
        <Route path='/' exact element={<Home />} /> 
        <Route path='/services' exact element={<Services />} /> 
        <Route path='/products' exact element={<Products />} /> 
        <Route path='/signup' exact element={<SignUp />} /> 
      </Routes>

    </Router>
  );
}

export default App;
