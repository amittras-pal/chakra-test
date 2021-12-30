import React from "react";
import { useParams } from "react-router-dom";
import { setPageTitle } from "../../../utils/utils";

function ShowDetails() {
  setPageTitle("[SHOW] - ");
  const { id } = useParams();
  return <div>TV Show Details with ID: {id}</div>;
}

export default ShowDetails;
