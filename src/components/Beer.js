import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import '../css/Beer.css'

function Beer(props) {

    const [beers, setBeers] = useState([])
    const [beerSearch, setBeerSearch] = useState('beerSearch')
    const fetchData = async () => {
        let response = await axios.get(`https://api.punkapi.com/v2/beers?beer_name=${beerSearch}`)
console.log(response.data)
        setBeers(response.data)


    }
    //console.log(beers)//check
    //console.log(setBeerSearch)//check

    return (
        <div className="homepage">
            <h1>Cheers!</h1>
            <input onChange={(e) => setBeerSearch(e.target.value)} />
            <button onClick={() => fetchData()}>Search</button>

            {beers.map((beer, index) =>
                <div key={index}>
                    <h3> Fist appeared on {beer.first_brewed}</h3>
                    <h5> Name: {beer.name}</h5>
                  
                    
                    <img className="Pic" alt = "My Beer" src={beer.image_url} />
                    


                </div>

            )}

        </div>
    );
}


export default Beer
