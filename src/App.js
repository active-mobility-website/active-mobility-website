//import './App.css';
import { ThemeProvider } from '@mui/material';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router';
import Home from './components/Home/Home.js';
import AboutUs from './components/AboutUs/AboutUs.js';
import Products from './components/Products/Products.js';
import ContactUs from './components/ContactUs/ContactUs.js';
import Cart from './components/Cart/Cart.js';
import { WebsiteTheme } from './WebsiteTheme.js';
import './css/PageLayout.css';

function App() {
    return (
        <ThemeProvider theme={WebsiteTheme}>
            <div className="App">
                <Navbar />
                <br />
                <div className="page-layout">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/active-mobility-website" element={<Home />} />
                        <Route path="/AboutUs" element={<AboutUs />} />
                        <Route path="/Products" element={<Products />} />
                        <Route path="/ContactUs" element={<ContactUs />} />
                    </Routes>
                </div>
            </div>
        </ThemeProvider>
    
  );
}
/*
 * 
 * <Route path="/Cart" element={<Cart />} />
 * 
 * */

export default App;
