import {
  Box,
  Circle,
  Flex,
  Heading,
  Image,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { useApiConfig } from "../../../hooks/configuration.query";
import { ReactComponent as ImageThumb } from "../../../resources/image-thumb.svg";
import { MdVideocam, MdLiveTv } from "react-icons/md";
import React from "react";
import { Link } from "react-router-dom";
import { DateTime } from "luxon";
import { getFormattedDate } from "../../../utils/utils";

function MediaTileWithInfo({ mediaType, data, showMediaType }) {
  const { data: config } = useApiConfig();
  const { colorMode } = useColorMode();
  const titleString = mediaType === "movie" ? data.title : data.name;
  const dateString = getFormattedDate(
    mediaType === "movie" ? data.release_date : data.first_air_date,
    DateTime.DATE_FULL
  );

  const bgTint =
    colorMode === "dark"
      ? "linear-gradient(to right, #000000CC, #00000022)"
      : "linear-gradient(to right, #ffffffCC,#ffffff22)";

  return (
    <Box
      as={Link}
      to={`/${mediaType}/${data.id}`}
      w={"full"}
      borderWidth={"thin"}
      display={"flex"}
      rounded={"md"}
      boxShadow={"lg"}
      outline={"none"}
      overflow={"hidden"}
      mb={4}
      style={{ transition: "all 0.25s ease-in-out" }}
      _focusWithin={{
        borderColor: "blue.300",
        color: colorMode === "dark" ? "red.200" : "red.500",
      }}
      _hover={{
        borderColor: "blue.300",
        color: colorMode === "dark" ? "red.200" : "red.500",
      }}>
      <Box pos={"relative"} maxW={"6rem"} minW={"6rem"} minH={"9rem"}>
        {data.poster_path ? (
          <Image
            layout={"fill"}
            src={`${config?.data?.images.secure_base_url}w342${data.poster_path}`}
          />
        ) : (
          <Box
            h={"100%"}
            w={"100%"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            bgColor={colorMode === "light" ? "gray.200" : "gray.700"}>
            <ImageThumb />
          </Box>
        )}
        {showMediaType && (
          <Flex
            position={"absolute"}
            w={"full"}
            top={0}
            left={0}
            py={0.5}
            px={1}
            backgroundImage={bgTint}>
            {mediaType === "movie" ? <MdVideocam /> : <MdLiveTv />}
            <Text fontSize={"xs"} fontWeight={"bold"} ml={1}>
              {mediaType === "movie" ? "Movie" : "TV Show"}
            </Text>
          </Flex>
        )}
        <Circle
          bgColor={colorMode === "dark" ? "red.200" : "red.500"}
          borderColor={colorMode === "dark" ? "gray.800" : "white"}
          padding={2}
          borderRadius={"full"}
          borderWidth={"4px"}
          position={"absolute"}
          right={"0"}
          top={"10px"}
          transform={"translateX(50%)"}
          w={"2.3rem"}
          h={"2.3rem"}
          fontSize={"14px"}>
          <Text
            color={colorMode === "dark" ? "gray.800" : "gray.100"}
            fontWeight={"bold"}>
            {data?.vote_average ? data?.vote_average : "!"}
          </Text>
        </Circle>
      </Box>
      <Flex
        padding={3}
        height={"auto"}
        ml={3}
        direction={"column"}
        justifyContent={"space-between"}>
        <Box>
          <Heading size={"sm"}>{titleString}</Heading>
          {dateString && (
            <Text color={"gray.500"} fontSize={"xs"}>
              {dateString}
            </Text>
          )}
        </Box>
        <Text
          fontSize={"sm"}
          style={{
            display: "-webkit-box",
            WebkitLineClamp: "2",
            WebkitBoxOrient: "vertical",
            textOverflow: "ellipsis",
            overflow: "hidden",
            margin: "0",
          }}>
          {data.overview}
        </Text>
      </Flex>
    </Box>
  );
}

export default MediaTileWithInfo;
