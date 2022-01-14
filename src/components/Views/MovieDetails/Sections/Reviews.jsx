import {
  Box,
  Button,
  Flex,
  Modal,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { MdChevronRight } from "react-icons/md";
import ReviewModalBody from "../../../shared/ModalBody/ReviewModalBody";
import ReviewTile from "../../../shared/ReviewTile/ReviewTile";
import SectionHeading from "../../../shared/SectionHeading/SectionHeading";

function Reviews({ config, data }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box mb={6}>
        <Flex width={"100%"} justifyContent={"space-between"} mb={4}>
          <SectionHeading size={"md"}>Reviews</SectionHeading>
          {data?.reviews?.results.length > 0 && (
            <Button
              variant={"ghost"}
              size={"sm"}
              colorScheme={"red"}
              rightIcon={<MdChevronRight />}
              onClick={onOpen}>
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
          <Text>There are no reviews yet for {data?.title}</Text>
        )}
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} size={"full"}>
        <ReviewModalBody title={data?.title} movieId={data?.id} />
      </Modal>
    </>
  );
}

export default Reviews;
