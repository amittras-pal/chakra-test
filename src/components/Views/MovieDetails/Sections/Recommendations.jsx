import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import MediaTile from "../../../shared/MediaTile/MediaTile";
import SectionHeading from "../../../shared/SectionHeading/SectionHeading";

function Recommendations({ data, type }) {
  if (!data || data?.recommendations?.results.length === 0) return null;

  return (
    <Box mb={6}>
      <SectionHeading size={"md"}>Recommendations</SectionHeading>
      <Flex
        w={"full"}
        flexWrap={"nowrap"}
        overflowX={"auto"}
        p={4}
        gap={"1rem"}>
        {data?.recommendations?.results.map((movie) => (
          <MediaTile key={movie.id} data={movie} mediaType={type} />
        ))}
      </Flex>
    </Box>
  );
}

export default Recommendations;
