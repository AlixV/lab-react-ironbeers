
import './App.css';
import React from 'react'; // PAS OUBLIER
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from './components/Header';
// import RandomBeer from "./pages/RandomBeer";
import SingleBeer from './pages/SingleBeer';
import NewBeer from "./pages/NewBeer";
// import Error from './components/Error';
import { useState, useEffect } from "react";
import axios from "axios"
import ListBeers from './pages/ListBeers';



function App() {
  const [beers, setBeers] = useState([])

  useEffect(()=>{
    axios
    .get("https://ih-beers-api2.herokuapp.com/beers")
    .then(res => setBeers(res.data))
    .catch(err=> console.log(err))
    }, []) 

  return (
    <div className="App">
    <Header/>
    <Routes>

      <Route path="/" element={<Home />}/>
      <Route path="/beers" element={<ListBeers beers={beers}/>}/>
      <Route path="/:id" element={<SingleBeer/>}/>
      <Route path="/random-beer" element={<SingleBeer/>}/>
      <Route path="/new-beer" element={<NewBeer/>}/>
     {/* cette adresse/path renvoie sur cette (view hbs).
     components = partials.
     On peut passer les propes, les infos aux pages et components ici 
      */}

    </Routes>



      
    </div>
  );
}

export default App;
