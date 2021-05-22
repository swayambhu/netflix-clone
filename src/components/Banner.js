/** @format */

import classes from "./Banner.module.css";
import React, { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../request";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ],
      );
      return request;
    };
    fetchData();
  }, []);

  console.log(movie);
  return (
    <header
      className={classes.banner}
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className={classes.banner__contents}>
        <h1 className={classes.banner__title}>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className={classes.banner__buttons}>
          <button className={classes.banner__button}>Play</button>
          <button className={classes.banner__button}>My List</button>

          <h1 className={classes.banner__description}>{truncate(movie?.overview, 150)}</h1>
        </div>
      </div>
      <div className={classes.banner__fadeBottom}></div>
    </header>
  );
};

export default Banner;
