import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const NewBeer = () => {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirstBrewed] = useState("");
  const [attenuation_level, setAttenuationLevel] = useState("");
  const [contributed_by, setContributedBy] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  // revoir navigate ...

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name,
      tagline,
      description,
      first_brewed,
      attenuation_level,
      contributed_by,
    };

    axios
      .post("https://ih-beers-api2.herokuapp.com/beers", data)
      .then((res) => {
        console.log(res);
        navigate("/beers");
      })
      .catch((e) => {
        console.log(e);
        setError("There was an error, please try again");
      });
  };

  return (
    <>
      <Header />
      <div>
        <form onSubmit={handleSubmit}>
          {error !== "" && <p>{error}</p>}
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="tagline">Tagline</label>
            <input
              type="text"
              id="tagline"
              name="tagline"
              value={tagline}
              onChange={(e) => setTagline(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="description">description</label>
            <input
              type="text"
              id="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="first_brewed">First Brewed</label>
            <input
              type="text"
              id="first_brewed"
              name="first_brewed"
              value={first_brewed}
              onChange={(e) => setFirstBrewed(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="attenuation_level">Attenuation Level</label>
            <input
              type="number"
              id="attenuation_level"
              name="attenuation_level"
              value={attenuation_level}
              onChange={(e) => setAttenuationLevel(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="contributed_by">Contributed by</label>
            <input
              type="text"
              id="contributed_by"
              name="contributed_by"
              value={contributed_by}
              onChange={(e) => setContributedBy(e.target.value)}
            />
          </div>

          <button>Create your beer!</button>
        </form>
      </div>
    </>
  );
};

export default NewBeer;

// name - must be type text
// tagline - must be type text
// description - must be type text
// first_brewed - must be type text
// brewers_tips - must be type text
// attenuation_level - must be type number
//contributed_by - must be type textattenuation_level
