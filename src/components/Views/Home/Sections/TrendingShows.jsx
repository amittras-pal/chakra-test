import React from "react";
import { Box, CircularProgress, Flex, Heading } from "@chakra-ui/react";
import { useTrendingToday } from "../../../../hooks/trending.query";
import MediaTile from "../../../shared/MediaTile/MediaTile";

function TrendingShows() {
  const { data: trendingShows, isLoading } = useTrendingToday("tv");

  return (
    <Box mb={5}>
      <Heading size={"md"}>Trending TV Shows Today</Heading>
      {isLoading ? (
        <Flex w={"full"} flexWrap={"nowrap"} justifyContent={"center"} py={5}>
          <CircularProgress isIndeterminate />
        </Flex>
      ) : (
        <Flex
          w={"full"}
          flexWrap={"nowrap"}
          overflowX={"auto"}
          px={3}
          py={4}
          gap={"1rem"}>
          {trendingShows?.data.results.map((show) => (
            <MediaTile key={show.id} data={show} mediaType="tv" />
          ))}
        </Flex>
      )}
    </Box>
  );
}

export default TrendingShows;
