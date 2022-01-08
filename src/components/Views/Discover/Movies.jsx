import {
  Button,
  CircularProgress,
  Container,
  Drawer,
  Flex,
  Heading,
  Text,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { MdFilterAlt } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { useMovieDiscover } from "../../../hooks/discover.query";
import { useMovieGenres } from "../../../hooks/genre.query";
import { nFormatter, setPageTitle } from "../../../utils/utils";
import MediaTileWithInfo from "../../shared/MediaTile/MediaTileWithInfo";
import MovieFilters from "./MovieFilters";

function Movies() {
  const { state } = useLocation();
  const { colorMode } = useColorMode();
  const [filters, setFilters] = useState({
    ...state,
  });
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { data: genre } = useMovieGenres();

  const { data, hasNextPage, fetchNextPage, isFetchingNextPage, isLoading } =
    useMovieDiscover(filters);

  const loadMore = () => {
    fetchNextPage();
  };

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
          <Heading size={"md"}>
            Explore Movies{" "}
            {data && `(${nFormatter(data?.pages?.[0]?.data.total_results)})`}
          </Heading>
          <Button
            size={"sm"}
            variant={"outline"}
            leftIcon={<MdFilterAlt />}
            onClick={onOpen}>
            Filter
          </Button>
        </Flex>
        {isLoading ? (
          <Flex w={"full"} justifyContent={"center"} py={10}>
            <CircularProgress isIndeterminate m={10} />
          </Flex>
        ) : (
          <Container maxW={"container.xl"} p={3}>
            {data?.pages.map((page) => {
              return page.data?.results.map((movie) => (
                <MediaTileWithInfo
                  mediaType="movie"
                  data={movie}
                  key={movie.id}
                />
              ));
            })}
            {data?.pages?.[0]?.data.total_results === 0 && (
              <Flex
                h={" 6rem"}
                justifyContent={"center"}
                alignItems={"center"}
                direction={"column"}>
                <Heading colorScheme={"red"} textAlign={"center"}>
                  {" "}
                  No Results
                </Heading>
                <Text>Please choose some other filters</Text>
              </Flex>
            )}
            {!hasNextPage && data?.pages?.[0]?.data.total_results > 0 && (
              <Flex h={"6rem"} justifyContent={"center"} alignItems={"center"}>
                <Heading colorScheme={"red"} textAlign={"center"}>
                  {" "}
                  !! No More Results !!
                </Heading>
              </Flex>
            )}
            {hasNextPage && (
              <Button
                w={"full"}
                colorScheme={"red"}
                isLoading={isFetchingNextPage}
                onClick={loadMore}>
                Load More
              </Button>
            )}
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
