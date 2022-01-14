import {
  Button,
  Divider,
  Flex,
  Heading,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  Progress,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useMovieReviews } from "../../../hooks/reviews.query";
import React from "react";
import ReviewTile from "../ReviewTile/ReviewTile";

function ReviewModalBody({ title, movieId }) {
  const { data, hasNextPage, isLoading, isFetchingNextPage, fetchNextPage } =
    useMovieReviews(movieId);

  return (
    <ModalContent
      borderRadius={"none"}
      height={"100vh"}
      display={"flex"}
      bgColor={useColorModeValue("white", "gray.800")}>
      <ModalHeader flexGrow={0}>
        <Text fontSize={"sm"} fontWeight={"normal"}>
          REVIEWS
        </Text>
        <Text fontSize={"md"}>{title}</Text>
        <ModalCloseButton />
      </ModalHeader>
      <Divider />
      {isLoading ? (
        <Progress isIndeterminate size={"md"} />
      ) : (
        <ModalBody flexGrow={1} overflowY={"auto"} p={4}>
          {data?.pages.map((page) => {
            return page.data?.results?.map((review) => (
              <ReviewTile key={review.id} review={review} />
            ));
          })}
          {hasNextPage && (
            <Button
              w={"full"}
              colorScheme={"red"}
              isLoading={isFetchingNextPage}
              onClick={fetchNextPage}>
              Load More
            </Button>
          )}
          {!hasNextPage && data?.pages?.[0]?.data.total_results > 0 && (
            <Flex h={"4rem"} justifyContent={"center"} alignItems={"center"}>
              <Heading fontSize={"sm"} textAlign={"center"}>
                !! No More Reviews !!
              </Heading>
            </Flex>
          )}
        </ModalBody>
      )}
    </ModalContent>
  );
}

export default ReviewModalBody;
