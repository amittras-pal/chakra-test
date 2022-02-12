import React from "react";
import { useParams } from "react-router-dom";
import { setPageTitle } from "../../../utils/utils";
import { useApiConfig } from "../../../hooks/configuration.query";
import { useTvShowById } from "../../../hooks/tv.query";
import { Grid, GridItem, Progress } from "@chakra-ui/react";
import Header from "../../shared/DetailsSections/Header";
import Overview from "./Sections/Overview";
import Reviews from "../../shared/DetailsSections/Reviews";
import Recommendations from "../../shared/DetailsSections/Recommendations";
import Media from "../../shared/DetailsSections/Media";

function ShowDetails() {
  // React Hooks.
  const { id } = useParams();

  // Query Hooks
  const { data: config, isLoading: loadingConfig } = useApiConfig();
  const { data: show, isLoading: loadingShow } = useTvShowById(id);

  setPageTitle(`[SHOW] - ${show?.data?.name}`);

  return (
    <>
      {loadingShow || loadingConfig ? (
        <Progress isIndeterminate size={"md"} />
      ) : (
        <>
          <Header data={show?.data} config={config} titleKey={"name"} />
          <Grid templateColumns={"repeat(12, 1fr)"} gap={4} p={4}>
            <GridItem colSpan={[12, 9]}>
              <Overview data={show?.data} config={config} />
              <Reviews config={config} data={show?.data} titleKey={"name"} />
              <Media data={show?.data} type={"tv"} />
              <Recommendations data={show?.data} type={"tv"} />
            </GridItem>
            <GridItem colSpan={[12, 3]}></GridItem>
          </Grid>
        </>
      )}
    </>
  );
}

export default ShowDetails;
