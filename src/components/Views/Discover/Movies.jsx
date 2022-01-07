import {
  Button,
  CircularProgress,
  Container,
  Drawer,
  Flex,
  Heading,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { MdFilterAlt } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { useDiscover } from "../../../hooks/discover.query";
import { useMovieGenres } from "../../../hooks/genre.query";
import { setPageTitle } from "../../../utils/utils";
import MediaTileWithInfo from "../../shared/MediaTile/MediaTileWithInfo";
import MovieFilters from "./MovieFilters";

function Movies() {
  const { state } = useLocation();
  const { colorMode } = useColorMode();
  const [filters, setFilters] = useState({
    ...state,
  });
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { data: genre, isLoading: loadingGenres } = useMovieGenres();
  const { data: discover, isLoading: loadingResults } = useDiscover(
    "movie",
    filters
  );

  useEffect(() => {
    setFilters(state);
  }, [state]);

  const applyFilters = (filters) => {
    setFilters(filters);
    onClose();
  };

  setPageTitle("[Movies] - Explore");

  return (
    <>
      <Container width={"full"} p={0} maxW={"full"}>
        <Flex
          w={"full"}
          justifyContent={"space-between"}
          alignItems={"center"}
          p={3}
          pos={"sticky"}
          top={"4rem"}
          zIndex={1}
          bgColor={colorMode === "dark" ? "gray.800" : "white"}>
          <Heading size={"md"}>Explore Movies</Heading>
          <Button
            size={"sm"}
            variant={"outline"}
            leftIcon={<MdFilterAlt />}
            onClick={onOpen}>
            Filter
          </Button>
        </Flex>
        {loadingResults ? (
          <Flex w={"full"} justifyContent={"center"} py={10}>
            <CircularProgress isIndeterminate m={10} />
          </Flex>
        ) : (
          <Container maxW={"container.xl"} p={3}>
            {discover?.data?.results.map((movie) => (
              <MediaTileWithInfo
                mediaType="movie"
                data={movie}
                key={movie.id}
              />
            ))}
          </Container>
        )}
      </Container>
      <Drawer isOpen={isOpen} onClose={onClose}>
        <MovieFilters
          genreList={genre?.data?.genres}
          filters={filters}
          onApplyFilters={applyFilters}
        />
      </Drawer>
    </>
  );
}

export default Movies;
