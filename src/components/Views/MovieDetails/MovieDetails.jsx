import { Grid, GridItem, Progress } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import { useApiConfig } from "../../../hooks/configuration.query";
import { useMovieDetailsById } from "../../../hooks/movie.query";
import { setPageTitle } from "../../../utils/utils";
import Header from "../../shared/DetailsSections/Header";
import Reviews from "../../shared/DetailsSections/Reviews";
import Overview from "./Sections/Overview";
import Recommendations from "../../shared/DetailsSections/Recommendations";
import Media from "../../shared/DetailsSections/Media";

function MovieDetails() {
  // React hooks
  const { id } = useParams();

  // Query hooks
  const { data: config, isLoading: loadingConfig } = useApiConfig();
  const { data: movie, isLoading: loadingMovie } = useMovieDetailsById(id);

  setPageTitle(`[MOVIE] - ${movie?.data?.title}`);

  return (
    <>
      {loadingMovie || loadingConfig ? (
        <Progress isIndeterminate size={"md"} />
      ) : (
        <>
          <Header config={config} data={movie?.data} titleKey={"title"} />
          <Grid templateColumns={"repeat(12, 1fr)"} gap={4} p={4}>
            <GridItem colSpan={[12, 9]}>
              <Overview data={movie?.data} />
              <Reviews data={movie?.data} config={config} titleKey={"title"} />
              <Media data={movie?.data} type={"movie"} />
              <Recommendations data={movie?.data} type={"movie"} />
            </GridItem>
            <GridItem colSpan={[12, 3]}></GridItem>
          </Grid>
        </>
      )}
    </>
  );
}

export default MovieDetails;
