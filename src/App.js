import {BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
          <Routes>
             <Route path='/' element={<Home />} />
             <Route path='/services' element={<Services/>} />
             <Route path='/about' element={<About/>} />
             <Route path='/contact' element={<Contact/>} />
          </Routes>
          <Footer />
     </BrowserRouter>
    </div>
  );
}

export default App;
