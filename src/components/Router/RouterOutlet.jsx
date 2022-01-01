import React from "react";
import { Route, Routes } from "react-router-dom";
import Movies from "../Views/Discover/Movies";
import Home from "../Views/Home/Home";
import MovieDetails from "../Views/MovieDetails/MovieDetails";
import MoviesList from "../Views/MoviesList/MoviesList";
import ShowDetails from "../Views/ShowDetails/ShowDetails";
import ShowsList from "../Views/ShowsList/ShowsList";

function RouterOutlet() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie" element={<MoviesList />} />
      <Route path="/tv" element={<ShowsList />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route path="/tv/:id" element={<ShowDetails />} />
      <Route path="discover/movie" element={<Movies />} />
    </Routes>
  );
}

export default RouterOutlet;
