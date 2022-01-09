import React from "react";
import { Route, Routes } from "react-router-dom";
import Movies from "../Views/Discover/Movie/Movies";
import Home from "../Views/Home/Home";
import MovieDetails from "../Views/MovieDetails/MovieDetails";
import ShowDetails from "../Views/ShowDetails/ShowDetails";

function RouterOutlet() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route path="/tv/:id" element={<ShowDetails />} />
      <Route path="discover/movie" element={<Movies />} />
    </Routes>
  );
}

export default RouterOutlet;
