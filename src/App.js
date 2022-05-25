
import './App.css';
import { Route, Routes,useNavigate } from 'react-router-dom'
import Home from './components/Home';
import Header from './components/Header'
import { useState } from 'react';
import axios from 'axios';
import Beer from './components/Beer';


function App() {

  const navigate = useNavigate();
  const [currentBeer, setCurrentBeer] = useState([]);// one variable that reperesents the current state
//





  const fetchIndividualData = async (url) => {
    const response = await axios.get(url)
    setCurrentBeer(response.data)
    navigate('/beer')//taking local page
  }

  return (
    <div className="App">
      <Header />
      <Routes>

      <Route path="/" element={<Home fetch={fetchIndividualData} />} />
        <Route path="/beer" element={<Beer current={currentBeer} />} />
       

      </Routes>
    </div>
  );
}

export default App;
















