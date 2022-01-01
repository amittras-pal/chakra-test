import {
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  useDisclosure,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { DateTime } from "luxon";
import React from "react";
import { MdCheck, MdClose, MdFilterAlt } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { setPageTitle } from "../../../utils/utils";

function Movies() {
  const { state } = useLocation();
  const { isOpen, onClose, onOpen } = useDisclosure();
  setPageTitle("[Movies] - Explore");

  const filterForm = useFormik({
    initialValues: {
      sort_by: state.sort_by,
      include_adult: false,
      with_genres: [],
      "vote_average.gte": 0,
      "release_date.gte": "",
      "release_date.lte": DateTime.now().toISO(),
    },
  });

  return (
    <>
      <Container width={"full"} p={5} maxW={"full"}>
        <Flex w={"full"} justifyContent={"space-between"} alignItems={"center"}>
          <Heading size={"md"}>Explore Movies</Heading>
          <Button
            size={"sm"}
            variant={"outline"}
            leftIcon={<MdFilterAlt />}
            onClick={onOpen}>
            Filter
          </Button>
        </Flex>
      </Container>
      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth={"1px"}>Filter Results</DrawerHeader>
          <DrawerBody>{JSON.stringify(filterForm.values)}</DrawerBody>
          <DrawerFooter borderTopWidth={"1px"}>
            <Button
              size={"sm"}
              variant={"ghost"}
              colorScheme={"red"}
              leftIcon={<MdClose />}
              mr={4}>
              Clear All
            </Button>
            <Button
              size={"sm"}
              variant={"solid"}
              colorScheme={"red"}
              leftIcon={<MdCheck />}>
              Apply
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Movies;
