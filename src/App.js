import './App.css';
import Mapbox from './Map/Mapbox';
import Navbar from './Navbar/Navbar';
import SubmitPub from './pages/SubmitPub/SubmitPub';
import { Routes, Route, useLocation } from 'react-router-dom'
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import { useQuery } from 'react-query';
import axios from 'axios';


function App() {

  const getData = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/pubs`)
    return response.data
  }

  const { data, isLoading } = useQuery({
    queryKey: ["pubs"],
    queryFn: getData
  })

  const location = useLocation()

  return (
  <div className="app">

  <Navbar location={location}/>

  <Routes>

  <Route path="/" element={<Mapbox pubs={data} isLoading={isLoading}/>}></Route>
  <Route path="/about" element={<About/>}></Route>
  <Route path="/contact" element={<Contact/>}></Route>
  <Route path="/submitpub" element={<SubmitPub/>}></Route>

  </Routes>
  
  </div>
  )
}

export default App;
