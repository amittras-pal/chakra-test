import React from "react";
import { useParams } from "react-router-dom";
import { setPageTitle } from "../../../utils/utils";

function MovieDetails() {
  setPageTitle(`[MOVIE] - `);
  const { id } = useParams();
  return <div>Movie Details with ID: {id}</div>;
}

export default MovieDetails;
