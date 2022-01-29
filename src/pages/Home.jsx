import React from 'react';
import { Link} from "react-router-dom";
import beersIMG from "../assets/beers.png";
import newIMG from "../assets/new-beer.png";
import randomIMG from "../assets/random-beer.png";

const Home = () => {
  return (<div>
        <img src={beersIMG} alt="beer"/>
      <Link to="/beers"> BEERS </Link>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, accusamus a magnam et ipsam amet tempora nostrum magni fugiat nulla blanditiis, eum dolores officiis eius saepe vero veniam pariatur fugit.</p>

      <img src={newIMG} alt="beer"/>
      <Link to="/random-beer"> RANDOM BEER </Link>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, accusamus a magnam et ipsam amet tempora nostrum magni fugiat nulla blanditiis, eum dolores officiis eius saepe vero veniam pariatur fugit.</p>

      <img src={randomIMG} alt="beer"/>
      <Link to="/new-beer"> NEW BEER </Link>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, accusamus a magnam et ipsam amet tempora nostrum magni fugiat nulla blanditiis, eum dolores officiis eius saepe vero veniam pariatur fugit.</p>
  </div>)
};

export default Home;
