import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import MediaTile from "../MediaTile/MediaTile";
import SectionHeading from "../SectionHeading/SectionHeading";

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
        {data?.recommendations?.results.map((item) => (
          <MediaTile key={item.id} data={item} mediaType={type} />
        ))}
      </Flex>
    </Box>
  );
}

export default Recommendations;
