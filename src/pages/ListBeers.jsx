import React from 'react';
import { Link } from 'react-router-dom';

const ListBeers = ({beers}) => {
  return (
  <div>
  <>
  <ul>
    {beers.map((beer) => {
      const id = String(beer._id) 
      
        return(

        <li key={beer._id}>
        <p>  ------------- UNE SUPER BIÈRE -------------</p>
        <img src={beer.image_url} alt={beer.name}/>
        <p>{beer.name}</p>
        <p>{beer.tagline}</p>
        <p> By {beer.contributed_by}</p>

        <Link to={`/${id}`}>{beer.name}</Link>
        {/* revoir cette histoire id  !!!  */}
        {/* <Link to="/beers/:beerId">{beer.name}</Link> */}
        {/* /beers/:{id} */}

        </li>
        )

    })}

  </ul>

  </>

  </div>)
};

export default ListBeers;
