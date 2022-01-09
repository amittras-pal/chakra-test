import {
  Button,
  CircularProgress,
  Container,
  Drawer,
  Flex,
  Heading,
  useColorMode,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useTvGenres } from "../../../../hooks/genre.query";
import { useTvDiscover } from "../../../../hooks/discover.query";
import { nFormatter, setPageTitle } from "../../../../utils/utils";
import { MdFilterAlt } from "react-icons/md";
import MediaTileWithInfo from "../../../shared/MediaTile/MediaTileWithInfo";
import ShowsFilter from "./ShowsFilter";
import { tvSearchdateModes } from "../../../../constants/appConstants";

function ShowsList() {
  // React Hooks
  const { state } = useLocation();
  const [filters, setFilters] = useState(state);
  // Chakra Hooks
  const { colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  // Query Hooks.
  const { data: genres } = useTvGenres();
  const { data, hasNextPage, isFetchingNextPage, isLoading, fetchNextPage } =
    useTvDiscover(filters);

  //   Effects
  useEffect(() => {
    setFilters(state);
  }, [state]);

  useEffect(() => {
    sessionStorage.setItem(
      "searchDateMode",
      JSON.stringify(tvSearchdateModes[0].value)
    );
  }, []);

  //   Functions
  const applyFilters = (filters) => {
    setFilters(filters);
    onClose();
  };

  const loadMore = () => {
    fetchNextPage();
  };

  setPageTitle("[TV] - Explore");

  return (
    <>
      <Container width={"full"} maxW={"full"} p={0}>
        <Flex
          width={"full"}
          justifyContent={"space-between"}
          alignItems={"center"}
          p={3}
          pos={"sticky"}
          top={"4rem"}
          zIndex={1}
          bgColor={colorMode === "dark" ? "gray.800" : "white"}>
          <Heading size={"md"}>
            Explore TV Shows{" "}
            {data && `(${nFormatter(data?.pages?.[0]?.data.total_results, 1)})`}
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
          <Flex width={"full"} justifyContent={"center"} py={10}>
            <CircularProgress isIndeterminate m={10} />
          </Flex>
        ) : (
          <Container maxW={"container.xl"} p={3}>
            {data?.pages?.map((page) => {
              return page.data?.results.map((show) => (
                <MediaTileWithInfo mediaType={"tv"} data={show} key={show.id} />
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
        <ShowsFilter
          filters={filters}
          genreList={genres?.data?.genres}
          onApplyFilters={applyFilters}
        />
      </Drawer>
    </>
  );
}

export default ShowsList;
