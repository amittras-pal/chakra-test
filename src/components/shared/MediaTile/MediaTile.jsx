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

function MediaTile({ mediaType, data }) {
  const { data: config } = useApiConfig();
  const { colorMode } = useColorMode();
  const titleString = mediaType === "movie" ? data.title : data.name;
  const dateString = DateTime.fromISO(
    mediaType === "movie" ? data.release_date : data.first_air_date
  ).toLocaleString(DateTime.DATE_MED);

  return (
    <Box
      maxW={"11rem"}
      minW={"11rem"}
      h={"auto"}
      boxShadow={"lg"}
      rounded={"md"}
      borderWidth={"thin"}
      padding={4}
      overflow={"visible"}
      style={{ transition: "all 0.25s ease-in-out" }}
      _focusWithin={{ borderColor: "blue.300", transform: "translateY(-10px)" }}
      _hover={{
        borderColor: "blue.300",
        transform: "translateY(-10px)",
      }}>
      <Link to={`/${mediaType}/${data.id}`} style={{ outline: "none" }}>
        <Box mt={-4} mx={-4} pos={"relative"} minH={"14rem"}>
          <Image
            rounded={"md"}
            src={`${config?.data?.images.secure_base_url}w342${data?.poster_path}`}
            layout={"fill"}
          />
          <Circle
            bgColor={colorMode === "dark" ? "red.200" : "red.500"}
            borderColor={colorMode === "dark" ? "gray.800" : "white"}
            padding={2}
            borderRadius={"full"}
            borderWidth={"4px"}
            position={"absolute"}
            bottom={"0"}
            right={"10px"}
            transform={"translateY(50%)"}
            w={"2.3rem"}
            h={"2.3rem"}
            fontSize={"14px"}>
            <Text
              color={colorMode === "dark" ? "gray.800" : "gray.100"}
              fontWeight={"bold"}>
              {data?.vote_average}
            </Text>
          </Circle>
        </Box>
        <Stack mt={4}>
          <Heading size={"xs"}>{titleString}</Heading>
          <Text color={"gray.500"} fontSize={"xs"}>
            {dateString}
          </Text>
        </Stack>
      </Link>
    </Box>
  );
}

export default MediaTile;
