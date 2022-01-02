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
import React from "react";
import {
  MdCheck,
  MdClose,
  MdExpandLess,
  MdExpandMore,
  MdFilterAlt,
} from "react-icons/md";
import { useLocation } from "react-router-dom";
import { MOVIE_SORT_MODES } from "../../../constants/appConstants";
import { useMovieGenres } from "../../../hooks/genre.query";
import { setPageTitle } from "../../../utils/utils";
import ChipSelectionList from "../../shared/Form/ChipSelectionList";
import SelectDropdown from "../../shared/Form/SelectDropdown";
import Switch from "../../shared/Form/Switch";

function Movies() {
  const { state } = useLocation();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const filterForm = useFormik({
    initialValues: {
      sort_by: state.sort_by,
      include_adult: false,
      with_genres: [],
      "vote_average.gte": 0,
      "release_date.gte": "",
      "release_date.lte": "",
    },
    onSubmit: (values) => {
      const payload = { ...values, with_genres: values.with_genres.join(",") };
      console.log(payload);
    },
  });

  const { data: genre, isLoading: loadingGenres } = useMovieGenres();

  setPageTitle("[Movies] - Explore");
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
                <Accordion defaultIndex={[1]} allowMultiple>
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
                            options={MOVIE_SORT_MODES}
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
                          <ChipSelectionList
                            name="with_genres"
                            options={genre?.data?.genres.map((g) => ({
                              ...g,
                              id: String(g.id),
                            }))}
                            label="Genres"
                            form={filterForm}
                          />
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
              onClick={filterForm.handleSubmit}
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
