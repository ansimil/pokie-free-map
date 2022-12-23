import './App.css';
import Mapbox from './Map/Mapbox';
import Navbar from './Navbar/Navbar';
import { Routes, Route, useLocation } from 'react-router-dom'
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';


function App() {
  const location = useLocation()
  return (
  <div className="app">
  <Navbar location={location}/>
  <Routes>
  <Route path="/" element={<Mapbox/>}></Route>
  <Route path="/about" element={<About/>}></Route>
  <Route path="/contact" element={<Contact/>}></Route>
  </Routes>
  </div>
  )
}

export default App;
