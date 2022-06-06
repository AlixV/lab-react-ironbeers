import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import axios from "axios";

const ListBeers = () => {
  const [beers, setBeers] = useState([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((res) => {
        // Should I destructrer ?
        setBeers(res.data);
        setFetching(false);
      })
      .catch((e) => console.lof(e));
  }, []);

  return (
    <>
      <Header />
      {fetching && <p> Beers are coming 🍻 🍻 🍻 </p>}
      {!fetching && (
        <div>
          <ul style={{ listStyleType: "none" }}>
            {beers.map((beer) => {
              const id = String(beer._id);
              return (
                <li key={beer._id}>
                  <p> ------- TA MEILLEURE BIÈRE ------- </p>
                  <img src={beer.image_url} alt={beer.name} />
                  <p>{beer.name}</p>
                  <p>{beer.tagline}</p>
                  <p>By {beer.contributed_by}</p>
                  <Link to={id}>{beer.name}</Link>
                </li>
              );
            })}
          </ul>

          {/* <Link to={`/${id}`}>  Fonctionne aussi ! */}

          {/* revoir cette histoire id  !!!  */}
          {/* <Link to="/beers/:beerId">{beer.name}</Link> */}
          {/* /beers/:{id} */}
        </div>
      )}
    </>
  );
};

export default ListBeers;

// const ListBeers = ({ beers }) => { props destructurés
