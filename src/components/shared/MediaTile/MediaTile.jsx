import {
  Box,
  Circle,
  Heading,
  Image,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { useApiConfig } from "../../../hooks/configuration.query";
import { DateTime } from "luxon";
import { Link } from "react-router-dom";
import { getFormattedDate } from "../../../utils/utils";
import RatingCircle from "../RatingCircle/RatingCircle";

function MediaTile({ mediaType, data }) {
  const { data: config } = useApiConfig();
  const { colorMode } = useColorMode();
  const titleString = mediaType === "movie" ? data.title : data.name;
  const dateString = getFormattedDate(
    mediaType === "movie" ? data.release_date : data.first_air_date,
    DateTime.DATE_MED
  );

  return (
    <Box
      maxW={"11rem"}
      minW={"11rem"}
      as={Link}
      to={`/${mediaType}/${data.id}`}
      h={"auto"}
      boxShadow={"lg"}
      rounded={"md"}
      borderWidth={"thin"}
      outline={"none"}
      padding={4}
      overflow={"hidden"}
      style={{ transition: "all 0.25s ease-in-out", outline: "none" }}
      _focusWithin={{
        borderColor: "blue.300",
        color: colorMode === "dark" ? "red.200" : "red.500",
      }}
      _hover={{
        borderColor: "blue.300",
        color: colorMode === "dark" ? "red.200" : "red.500",
      }}>
      <Box mt={-4} mx={-4} pos={"relative"} minH={"14rem"}>
        <Image
          src={`${config?.data?.images.secure_base_url}w342${data?.poster_path}`}
          layout={"fill"}
        />
        <Box
          position={"absolute"}
          bottom={"0"}
          right={"10px"}
          transform={"translateY(45%)"}
          bgColor={colorMode === "dark" ? "gray.800" : "white"}
          borderRadius={"full"}>
          <RatingCircle
            size={"2.5rem"}
            rating={data?.vote_average ? data?.vote_average : "NR"}
          />
        </Box>
      </Box>
      <Stack mt={4}>
        <Heading size={"xs"}>{titleString}</Heading>
        {dateString && (
          <Text color={"gray.500"} fontSize={"xs"}>
            {dateString}
          </Text>
        )}
      </Stack>
    </Box>
  );
}

export default MediaTile;
