import {
  Box,
  Container,
  Heading,
  Image,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import RatingCircle from "../../../shared/RatingCircle/RatingCircle";
import { ReactComponent as ImageThumb } from "../../../../resources/image-thumb.svg";

function Header({ config, data }) {
  const { colorMode } = useColorMode();

  const bgTint =
    colorMode === "dark"
      ? "linear-gradient(to bottom, #00000088, #00000088)"
      : "linear-gradient(to bottom, #ffffff88,#ffffff88)";

  return (
    <Container
      maxW={"full"}
      minH={"24rem"}
      p={"6"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      bgSize={"cover"}
      backgroundImage={`${bgTint}, ${`url(${config?.data?.images.secure_base_url}original${data?.backdrop_path})`}`}
      bgPosition={"top"}
      bgRepeat={"no-repeat"}>
      <Box
        maxH={{ base: "16rem", md: "20rem" }}
        maxW={{ base: "10rem", md: "14rem" }}
        minH={{ base: "14rem", md: "20rem" }}
        minW={{ base: "10rem", md: "14rem" }}
        position={"relative"}
        display={"flex"}
        alignItems={"center"}
        bgColor={colorMode === "light" ? "gray.200" : "gray.700"}
        boxShadow={"lg"}
        borderRadius={"xl"}
        mt={4}>
        {data?.poster_path ? (
          <Image
            borderRadius={"xl"}
            src={`${config?.data?.images.secure_base_url}w342${data.poster_path}`}
          />
        ) : (
          <ImageThumb />
        )}
        <Box
          borderRadius={"full"}
          position={"absolute"}
          top={"0"}
          right={"0"}
          transform={"translate(25%, -25%)"}
          bgColor={colorMode === "dark" ? "gray.800" : "white"}>
          <RatingCircle
            size={"3rem"}
            rating={data?.vote_average ? data?.vote_average : "NR"}
          />
        </Box>
      </Box>
      <Heading textAlign={"center"} fontWeight={"bold"} size={"lg"} mt={4}>
        {data?.title ? data.title : "Movie Title"}
      </Heading>
      <Text fontStyle={"italic"} my={1} textAlign={"center"}>
        {data?.tagline}
      </Text>
    </Container>
  );
}

export default Header;
