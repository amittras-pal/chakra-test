import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Divider,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormLabel,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FormikProvider, useFormik } from "formik";
import React from "react";
import { MdCheck, MdExpandLess, MdExpandMore } from "react-icons/md";
import { MOVIE_SORT_MODES } from "../../../../constants/appConstants";
import { LANGUAGE_CODES } from "../../../../constants/languageCodes";
import ChipSelectionList from "../../../shared/Form/ChipSelectionList";
import DatePicker from "../../../shared/Form/DatePicker/DatePicker";
import RangeSlider from "../../../shared/Form/RangeSlider";
import Select from "../../../shared/Form/Select/Select";
import Switch from "../../../shared/Form/Switch";

function MovieFilters({ filters, genreList, onApplyFilters }) {
  const filterForm = useFormik({
    initialValues: {
      ...filters,
    },
    onSubmit: onApplyFilters,
  });

  return (
    <>
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
              <Accordion defaultIndex={[0, 1]} allowMultiple>
                <AccordionItem>
                  {({ isExpanded }) => (
                    <>
                      <AccordionButton
                        display={"flex"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        p={3}>
                        <Text m={0} fontWeight={"bold"}>
                          Sort By
                        </Text>
                        {isExpanded ? <MdExpandLess /> : <MdExpandMore />}
                      </AccordionButton>
                      <AccordionPanel p={0}>
                        <Divider />
                        <Box p={3}>
                          <Select
                            name={"sort_by"}
                            options={MOVIE_SORT_MODES}
                            isSearchable={false}
                            maxMenuHeight={400}
                          />
                        </Box>
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
                        alignItems={"center"}
                        p={3}>
                        <Text m={0} fontWeight={"bold"}>
                          Filter
                        </Text>
                        {isExpanded ? <MdExpandLess /> : <MdExpandMore />}
                      </AccordionButton>
                      <AccordionPanel p={0}>
                        <Divider />
                        <Box p={3}>
                          <ChipSelectionList
                            name="with_genres"
                            options={
                              genreList?.map((g) => ({
                                ...g,
                                id: String(g.id),
                              })) || []
                            }
                            label="Genres"
                          />
                        </Box>
                        <Divider />
                        <Box p={3}>
                          <RangeSlider
                            label={"Average User Vote"}
                            min={0}
                            max={10}
                            step={1}
                            defaultValue={[0, 10]}
                            minStepsBetweenThumbs={1}
                            name_1={"vote_average.gte"}
                            name_2={"vote_average.lte"}
                          />
                        </Box>
                        <Divider />
                        <Box p={3}>
                          <RangeSlider
                            label={"Runtime (minutes)"}
                            min={0}
                            max={400}
                            step={10}
                            defaultValue={[0, 400]}
                            minStepsBetweenThumbs={1}
                            name_1={"with_runtime.gte"}
                            name_2={"with_runtime.lte"}
                          />
                        </Box>
                        <Divider />
                        <Box p={3}>
                          <FormLabel>Movie Language</FormLabel>
                          <Select
                            name={"with_original_language"}
                            options={LANGUAGE_CODES}
                            placeholder={"Search Languages..."}
                            menuPlacement={"top"}
                            maxMenuHeight={250}
                            isClearable={true}
                          />
                        </Box>
                        <Divider />
                        <Box p={3}>
                          <VStack spacing={3} textAlign={"left"} mb={3}>
                            <Text
                              textAlign={"left"}
                              w={"100%"}
                              fontWeight={"bold"}>
                              Release Dates
                            </Text>
                            <DatePicker
                              name={"primary_release_date.gte"}
                              label={"From"}
                              maxDate={
                                filterForm.values["primary_release_date.lte"]
                              }
                            />
                            <DatePicker
                              name={"primary_release_date.lte"}
                              label={"To"}
                              minDate={
                                filterForm.values["primary_release_date.gte"]
                              }
                            />
                          </VStack>
                        </Box>
                        <Divider />
                        <Box p={3}>
                          <Switch
                            name="include_adult"
                            label="Include Adult?"
                            colorScheme="red"
                            mr={2}
                          />
                        </Box>
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              </Accordion>
            </form>
          </FormikProvider>
        </DrawerBody>
        <DrawerFooter borderTopWidth={"1px"} display={"flex"}>
          <Button
            flex={1}
            onClick={filterForm.handleSubmit}
            size={"sm"}
            variant={"solid"}
            colorScheme={"red"}
            leftIcon={<MdCheck />}>
            Apply
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </>
  );
}

export default MovieFilters;
