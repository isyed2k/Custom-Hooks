import React, { useState, useEffect } from "react";
import UseInputState from "./hooks/UserInputState";
import axios from "axios";
const SWMovies = () => {
  const [number, setNumber] = useState(1);
  const [movie, setMovie] = useState("");
  const [value, handleChange, reset] = UseInputState("");

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        `https://swapi.dev/api/films/${number}/`
      );
      setMovie(response.data);
    }
    getData();
  }, [number]);
  return (
    <div>
      <h1>Pick a Movie</h1>
      <h4>{movie.title}</h4>
      <p>{movie.opening_crawl}</p>
      <select value={number} onChange={e => setNumber(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
      </select>
      <h1>Hooks</h1>
      {value}
      <br />
      <input type="text" value={value} onChange={handleChange} />
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default SWMovies;
