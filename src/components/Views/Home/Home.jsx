import {
  Container,
  Heading,
  Progress,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { APP_TITLE } from "../../../constants/appConstants";
import { useApiConfig } from "../../../hooks/configuration.query";
import { useAllTrendingToday } from "../../../hooks/trending.query";
import { getRandomHeaderImg, setPageTitle } from "../../../utils/utils";
import TrendingMovies from "./Sections/TrendingMovies";
import TrendingShows from "./Sections/TrendingShows";

function Home() {
  setPageTitle("");

  const { colorMode } = useColorMode();
  const { data: config, isLoading: loadingConfig } = useApiConfig();
  const { data: trendingToday } = useAllTrendingToday();

  const bgTint =
    colorMode === "dark"
      ? "linear-gradient(to bottom, #00000088, #00000088)"
      : "linear-gradient(to bottom, #ffffff88,#ffffff88)";

  if (loadingConfig) return <Progress isIndeterminate />;

  return (
    <>
      <Container
        maxW={"full"}
        minH={"20rem"}
        p={"6"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        bgSize={"cover"}
        backgroundImage={`${bgTint}, ${
          trendingToday
            ? getRandomHeaderImg(config, trendingToday?.data?.results)
            : ""
        }`}
        bgPosition={"center"}
        bgRepeat={"no-repeat"}>
        <Heading size={"xl"} textAlign={"center"}>
          Welcome to {APP_TITLE}.
        </Heading>
        <Text textAlign={"center"} fontWeight={"bold"} mb={"8"}>
          Millions of movies, TV shows and people to discover. Explore now.
        </Text>
      </Container>
      <Container maxW={"container.xl"} mt={5}>
        <TrendingMovies />
        <TrendingShows />
      </Container>
    </>
  );
}

export default Home;
