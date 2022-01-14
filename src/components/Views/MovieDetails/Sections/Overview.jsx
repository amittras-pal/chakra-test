import { Box, Flex, Tag, Text } from "@chakra-ui/react";
import { DateTime } from "luxon";
import React from "react";
import { getLanguageName } from "../../../../utils/utils";
import SectionHeading from "../../../shared/SectionHeading/SectionHeading";

function Overview({ data }) {
  return (
    <Box mb={6}>
      <SectionHeading size={"md"} mb={3}>
        Overview
      </SectionHeading>
      <Text mb={2}>{data?.overview}</Text>
      <Text mb={2}>
        <Text as="span" fontWeight={"bold"} color={"gray.400"}>
          Original Title:{" "}
        </Text>
        <Text as="span">{data?.original_title}</Text>
      </Text>
      <Text mb={2}>
        <Text as="span" fontWeight={"bold"} color={"gray.400"}>
          Original Language:{" "}
        </Text>
        <Text as="span">{getLanguageName(data?.original_language)}</Text>
      </Text>
      <Text mb={2}>
        <Text as="span" fontWeight={"bold"} color={"gray.400"}>
          Released:{" "}
        </Text>
        <Text as="span">
          {DateTime.fromISO(data?.release_date).toLocaleString(
            DateTime.DATE_MED
          )}
        </Text>
      </Text>
      <Flex mb={2}>
        <Text as="span" fontWeight={"bold"} color={"gray.400"} mr={2}>
          Genre(s):{" "}
        </Text>
        <Flex gap={2} flexWrap={"wrap"}>
          {data?.genres?.map((genre) => (
            <Tag
              key={genre.id}
              size={"sm"}
              variant={"subtle"}
              colorScheme={"red"}>
              {genre.name}
            </Tag>
          ))}
        </Flex>
      </Flex>
      <Text mb={2}>
        <Text as="span" fontWeight={"bold"} color={"gray.400"}>
          Director(s):{" "}
        </Text>
        {data?.credits?.crew
          ?.filter((member) => member.job === "Director")
          ?.map((dir, i, { length }) => (
            <Text as="span" key={dir.id}>
              {dir.name}
              {length - 1 !== i ? "," : ""}
            </Text>
          ))}
      </Text>
    </Box>
  );
}

export default Overview;
