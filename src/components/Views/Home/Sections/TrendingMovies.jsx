import { Box, CircularProgress, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { useTrendingToday } from "../../../../hooks/trending.query";
import MediaTile from "../../../shared/MediaTile/MediaTile";

function TrendingMovies() {
  const { data: trendingMovies, isLoading } = useTrendingToday("movie");

  return (
    <Box mb={5}>
      <Heading size={"md"}>Trending Movies Today</Heading>
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
          {trendingMovies?.data.results.map((movie) => (
            <MediaTile key={movie.id} data={movie} mediaType="movie" />
          ))}
        </Flex>
      )}
    </Box>
  );
}

export default TrendingMovies;
