import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FormikProvider, useFormik } from "formik";
import { DateTime } from "luxon";
import React from "react";
import {
  MdCheck,
  MdClose,
  MdExpandLess,
  MdExpandMore,
  MdFilterAlt,
} from "react-icons/md";
import { useLocation } from "react-router-dom";
import { setPageTitle } from "../../../utils/utils";
import SelectDropdown from "../../shared/Form/SelectDropdown";
import Switch from "../../shared/Form/Switch";

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

  const sortOptions = [
    { label: "Popularity Ascending", value: "popularity.asc" },
    { label: "Popularity Descending", value: "popularity.desc" },
    { label: "Release Date Ascending", value: "release_date.asc" },
    { label: "Release Date Descending", value: "release_date.desc" },
    { label: "Vote Average Ascending", value: "vote_average.asc" },
    { label: "Vote Average Descending", value: "vote_average.desc" },
    { label: "Vote Count Ascending", value: "vote_count.asc" },
    { label: "Vote Count Descending", value: "vote_count.desc" },
  ];

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
        {JSON.stringify(filterForm.values)}
      </Container>
      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader
            borderBottomWidth={"1px"}
            display={"flex"}
            alignItems={"center"}>
            <Heading size={"sm"}>Filter and Sort</Heading>
            <DrawerCloseButton />
          </DrawerHeader>
          <DrawerBody p={0}>
            <FormikProvider value={filterForm}>
              <form>
                <Accordion defaultIndex={[0]} allowMultiple>
                  <AccordionItem>
                    {({ isExpanded }) => (
                      <>
                        <AccordionButton
                          display={"flex"}
                          justifyContent={"space-between"}
                          alignItems={"center"}>
                          <Text m={0} fontWeight={"bold"}>
                            Sort By
                          </Text>
                          {isExpanded ? <MdExpandLess /> : <MdExpandMore />}
                        </AccordionButton>
                        <AccordionPanel p={3}>
                          <SelectDropdown
                            variant={"outline"}
                            size={"sm"}
                            borderRadius={"md"}
                            name={"sort_by"}
                            options={sortOptions}
                          />
                        </AccordionPanel>
                      </>
                    )}
                  </AccordionItem>
                  <AccordionItem>
                    {({ isExpanded }) => (
                      <>
                        <AccordionButton
                          display={"flex"}
                          justifyContent={"space-between"}
                          alignItems={"center"}>
                          <Text m={0} fontWeight={"bold"}>
                            Filter
                          </Text>
                          {isExpanded ? <MdExpandLess /> : <MdExpandMore />}
                        </AccordionButton>
                        <AccordionPanel p={3}>
                          <Switch
                            name="include_adult"
                            label="Include Adult?"
                            colorScheme="red"
                            mr={2}
                          />
                        </AccordionPanel>
                      </>
                    )}
                  </AccordionItem>
                </Accordion>
              </form>
            </FormikProvider>
          </DrawerBody>
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
