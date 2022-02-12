import { Box, Flex, Image, Tag, TagLabel, Text } from "@chakra-ui/react";
import SectionHeading from "../../../shared/SectionHeading/SectionHeading";
import React from "react";
import { getLanguageName } from "../../../../utils/utils";
import { DateTime } from "luxon";
import { ReactComponent as ImageThumb } from "../../../../resources/image-thumb.svg";

function Overview({ data, config }) {
  console.log(data);
  return (
    <Box mb={6}>
      <SectionHeading size={"md"} mb={3}>
        Overview
      </SectionHeading>
      <Text mb={2}>{data?.overview}</Text>
      <Text mb={2}>
        <Text as="span" fontWeight={"bold"} color={"gray.400"}>
          Original Name:{" "}
        </Text>
        <Text as="span">{data?.original_name}</Text>
      </Text>
      <Text mb={2}>
        <Text as="span" fontWeight={"bold"} color={"gray.400"}>
          Original Language:{" "}
        </Text>
        <Text as="span">{getLanguageName(data?.original_language)}</Text>
      </Text>
      <Text mb={2}>
        <Text as="span" fontWeight={"bold"} color={"gray.400"}>
          First Aired:{" "}
        </Text>
        <Text as="span">
          {DateTime.fromISO(data?.first_air_date).toLocaleString(
            DateTime.DATE_MED
          )}
        </Text>
      </Text>
      <Text mb={2}>
        <Text as="span" fontWeight={"bold"} color={"gray.400"}>
          Last Aired:{" "}
        </Text>
        <Text as="span">
          {DateTime.fromISO(data?.last_air_date).toLocaleString(
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
      {/* <Text mb={2}>
        <Text as="span" fontWeight={"bold"} color={"gray.400"}>
          Creator(s):{" "}
        </Text>
        {data?.credits?.crew
          ?.filter((member) => member.job.includes("Creator"))
          ?.map((dir, i, { length }) => (
            <Text as="span" key={dir.id} me={2}>
              {dir.name}
              {length - 1 !== i ? "," : ""}
            </Text>
          ))}
      </Text> */}
      <Flex
        borderRadius={"md"}
        borderWidth={"1px"}
        mt={4}
        p={2}
        gap={2}
        direction={"column"}
        width={["full", "container.sm"]}>
        <Text size="md" fontWeight={"bold"}>
          Last Episode
        </Text>

        <Flex direction={["column", "row"]} gap={2}>
          {data?.last_episode_to_air?.still_path ? (
            <Image
              width={["full", "40%"]}
              borderRadius={"md"}
              src={`${config?.data?.images.secure_base_url}w342${data?.last_episode_to_air?.still_path}`}
            />
          ) : (
            <Box width={["full", "40%"]}>
              <ImageThumb />
            </Box>
          )}
          <Box>
            <Text size={"lg"} mb={2} fontWeight={"bold"}>
              {data?.last_episode_to_air?.name}
            </Text>
            <Text mb={2}>{data?.last_episode_to_air?.overview}</Text>
            <Tag variant={"solid"} colorScheme={"red"} mr={2}>
              <TagLabel>
                Season {data?.last_episode_to_air?.season_number}
              </TagLabel>
            </Tag>
            <Tag variant={"solid"} colorScheme={"red"}>
              <TagLabel>
                Episode {data?.last_episode_to_air?.episode_number}
              </TagLabel>
            </Tag>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Overview;
