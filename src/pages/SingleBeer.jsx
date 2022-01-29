import React from 'react';
import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';


const SingleBeer = () => {

    const [beer, setBeer] = useState({})
    const {id} = useParams

    useEffect(() => {
        if (id) {
        axios
            .get("https://ih-beers-api2.herokuapp.com/beers" +id)
            .then(res => setBeer(res.data))
            .catch(err=> console.log(err))
        }else{
            axios
            .get("https://ih-beers-api2.herokuapp.com/beers/random")
            .then(res => setBeer(res.data))
            .catch(err=> console.log(err))
    }},[id])
   
        
  return (
    <div>
       <div key={beer._id}>
        <img src={beer.image_url} alt={beer.name} />
        <p> {beer.name}</p>
        <p>{beer.tagline}</p>
        <p>{beer.first_brewed}</p>
        <p>{beer.attenuation_level}</p>
        <p>{beer.description}</p>
        <p>By : {beer.contributed_by}</p>
      </div> 

    </div>
    );
};

export default SingleBeer;


// image
// name
// tagline
// first_brewed
// attenuation_level
// description
// contributed_by

// CountryDetails : This is the component that we will 
// render via the react-router-dom's Route, and it 
// should receive the : --- country code (alpha3Code) via the URL. ---
// -->>>This is the id of the country (ex: /FRA for France).
// CountriesList component:
// This component should render a list of Links, each having 
// -- the country's alpha3Code embedded in the URL. --
// Click on a Link should render the Country Details component.

// --- The alpha3Code of the country 
// will be available throught the URL parameters. ---

// To access URL parameters, from the browser's URL bar,
//  use the React Routers hooks -> useParams. 

