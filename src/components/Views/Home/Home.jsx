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
import { setPageTitle } from "../../../utils/utils";
import GlobalSearch from "../../shared/GlobalSearch/GlobalSearch";

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
          ? `url(${config?.data?.images?.secure_base_url}w1280${trendingToday?.data?.results[0].backdrop_path})`
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
      <GlobalSearch usedAtHome />
    </Container>
  );
}

export default Home;
