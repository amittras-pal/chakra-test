import { Box, Button, Flex, Modal, Text } from "@chakra-ui/react";
import React from "react";
import { MdChevronRight } from "react-icons/md";
import { useSearchParams } from "react-router-dom";
import ReviewModalBody from "../ModalBody/ReviewModalBody";
import ReviewTile from "../ReviewTile/ReviewTile";
import SectionHeading from "../SectionHeading/SectionHeading";

function Reviews({ config, data, titleKey }) {
  const [params, setParams] = useSearchParams();
  const reviews = params.get("reviews");

  const toggleModal = () => {
    setParams(reviews ? {} : { reviews: true });
  };

  return (
    <>
      <Box mb={6}>
        <Flex width={"100%"} justifyContent={"space-between"} mb={4}>
          <SectionHeading size={"md"}>Reviews</SectionHeading>
          {data?.reviews?.results.length > 2 && (
            <Button
              variant={"ghost"}
              size={"sm"}
              colorScheme={"red"}
              rightIcon={<MdChevronRight />}
              onClick={toggleModal}>
              Show All ({data?.reviews?.total_results})
            </Button>
          )}
        </Flex>
        {data?.reviews?.results.length > 0 ? (
          data?.reviews?.results
            .slice(0, 2)
            .map((review) => (
              <ReviewTile review={review} key={review.id} config={config} />
            ))
        ) : (
          <Text>There are no reviews yet for {data?.[titleKey]}</Text>
        )}
      </Box>
      <Modal isOpen={reviews} onClose={toggleModal} size={"full"}>
        <ReviewModalBody
          title={data?.[titleKey]}
          id={data?.id}
          type={"movie"}
        />
      </Modal>
    </>
  );
}

export default Reviews;
