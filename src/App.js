import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router';
import Home from './components/Home/Home.js';
import AboutUs from './components/AboutUs/AboutUs.js';
import Products from './components/Products/Products.js';
import Cart from './components/Cart/Cart.js';

function App() {
  return (
    <div className="App">
          <Navbar />
          <br />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/AboutUs" element={<AboutUs />} />
              <Route path="/Products" element={<Products />} />
              <Route path="/Cart" element={<Cart />} />
          </Routes>
    </div>
  );
}

export default App;
