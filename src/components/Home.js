import React from 'react'
import '../css/Home.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Beer from './Beer'

const Home = (props) => {
const navigate = useNavigate()


  const [beerData, setBeerData] = useState([]);


  const fetchData = async () => {
console.log("test")
    if (props.beerid) {
      const response = await axios.get(`https://api.punkapi.com/v2/beers`)
      console.log(response.data)
      setBeerData(response.data)
    }
    else {
      navigate('/')

    }
  }

  useEffect(() => {
    
    fetchData()
  }, [])


  return (
    <div>
      <input onChange={(e) => setBeerData(e.target.value)} />
      <button onClick={(e) => fetchData()}>Search</button>

      {beerData.map((beer, index) =>
        <div key={index}>
          <h3> {beer.name}</h3>


        </div>

      )}

    </div>
  );
}

export default Home