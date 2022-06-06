import React from "react";
import { Link } from "react-router-dom";
import beerImg from "../assets/beers.png";
import randomB from "../assets/random-beer.png";
import newB from "../assets/new-beer.png";

const Home = () => {
  return (
    <div>
      <div>
        <img src={beerImg} alt="Some beers" /> <br />
        <Link to="/beers"> All Beers</Link>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit,
          accusamus a magnam et ipsam amet tempora nostrum magni fugiat nulla
          blanditiis, eum dolores officiis eius saepe vero veniam pariatur
          fugit.
        </p>
      </div>

      <div>
        <img src={randomB} alt="Some randoms beers" /> <br />
        <Link to="/random-beer"> Random Beer</Link>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit,
          accusamus a magnam et ipsam amet tempora nostrum magni fugiat nulla
          blanditiis, eum dolores officiis eius saepe vero veniam pariatur
          fugit.
        </p>
      </div>

      <div>
        <img src={newB} alt="a beer" /> <br />
        <Link to="/new-beer"> Add a new Beer</Link>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit,
          accusamus a magnam et ipsam amet tempora nostrum magni fugiat nulla
          blanditiis, eum dolores officiis eius saepe vero veniam pariatur
          fugit.
        </p>
      </div>
    </div>
  );
};

export default Home;

/* <img src={beersIMG} alt="beer"/>
<Link to="/beers"> BEERS </Link>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, accusamus a magnam et ipsam amet tempora nostrum magni fugiat nulla blanditiis, eum dolores officiis eius saepe vero veniam pariatur fugit.</p>

<img src={newIMG} alt="beer"/>
<Link to="/random-beer"> RANDOM BEER </Link>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, accusamus a magnam et ipsam amet tempora nostrum magni fugiat nulla blanditiis, eum dolores officiis eius saepe vero veniam pariatur fugit.</p>

<img src={randomIMG} alt="beer"/>
<Link to="/new-beer"> NEW BEER </Link>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, accusamus a magnam et ipsam amet tempora nostrum magni fugiat nulla blanditiis, eum dolores officiis eius saepe vero veniam pariatur fugit.</p> */

// import { Link} from "react-router-dom";
// import beersIMG from "../assets/beers.png";
// import newIMG from "../assets/new-beer.png";
// import randomIMG from "../assets/random-beer.png";
