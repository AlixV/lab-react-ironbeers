import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Header from "./components/Header";
// import Error from './components/Error';
import ListBeers from "./pages/ListBeers";
import SingleBeer from "./pages/SingleBeer";
import NewBeer from "./pages/NewBeer";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<ListBeers />} />
        <Route path="/beers/:id" element={<SingleBeer />} />
        <Route path="/random-beer" element={<SingleBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />

        {/* cette adresse/path renvoie sur cette (view hbs).
     components = partials.
     On peut passer les propes, les infos aux pages et components ici 
     <Route path="/:id" element={<SingleBeer />} /> Fonctionne
      */}
      </Routes>
    </div>
  );
}

export default App;
// Display Header everywhere except on Home
/*<Home /> ? <Navbar2 /> : <Header />*/
