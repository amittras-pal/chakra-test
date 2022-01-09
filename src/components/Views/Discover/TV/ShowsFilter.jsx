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
import React, { useEffect } from "react";
import { MdCheck, MdExpandLess, MdExpandMore } from "react-icons/md";
import {
  tvSearchdateModes,
  TV_SORT_MODES,
} from "../../../../constants/appConstants";
import { LANGUAGE_CODES } from "../../../../constants/languageCodes";
import ButtonGroupRadio from "../../../shared/Form/ButtonGroupRadio";
import ChipSelectionList from "../../../shared/Form/ChipSelectionList";
import DatePicker from "../../../shared/Form/DatePicker/DatePicker";
import RangeSlider from "../../../shared/Form/RangeSlider";
import Select from "../../../shared/Form/Select/Select";
import Slider from "../../../shared/Form/Slider";
import Switch from "../../../shared/Form/Switch";

function ShowsFilter({ filters, genreList, onApplyFilters }) {
  const filterForm = useFormik({
    initialValues: filters,
    onSubmit: (values) => {
      if (searchDateMode.values.dateMode === "first") {
        delete values["air_date.gte"];
        delete values["air_date.lte"];
      } else if (searchDateMode.values.dateMode === "all") {
        delete values["first_air_date.gte"];
        delete values["first_air_date.lte"];
      }
      onApplyFilters(values);
    },
  });

  const searchDateMode = useFormik({
    initialValues: {
      dateMode:
        JSON.parse(sessionStorage.getItem("searchDateMode")) ||
        tvSearchdateModes[0].value,
    },
  });

  useEffect(() => {
    sessionStorage.setItem(
      "searchDateMode",
      JSON.stringify(searchDateMode.values.dateMode)
    );
  }, [searchDateMode.values]);

  const dateModeToggle = (
    <FormikProvider value={searchDateMode}>
      <ButtonGroupRadio name={"dateMode"} options={tvSearchdateModes} />
    </FormikProvider>
  );

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
                            options={TV_SORT_MODES}
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
                          <Slider
                            name={"vote_average.gte"}
                            label={"Average Vote (greater than)"}
                            min={0}
                            max={10}
                            step={1}
                            defaultValue={0}
                            minStepsBetweenThumbs={1}
                          />
                        </Box>
                        <Divider />
                        <Box p={3}>
                          <FormLabel>Language</FormLabel>
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
                          <Text
                            textAlign={"left"}
                            w={"100%"}
                            fontWeight={"bold"}>
                            Air Dates
                          </Text>
                          <Box my={4}>{dateModeToggle}</Box>
                          {searchDateMode.values.dateMode === "first" ? (
                            <VStack spacing={3} textAlign={"left"} mb={3}>
                              <DatePicker
                                name={"first_air_date.gte"}
                                label={"From"}
                                maxDate={
                                  filterForm.values["first_air_date.lte"]
                                }
                              />
                              <DatePicker
                                name={"first_air_date.lte"}
                                label={"To"}
                                minDate={
                                  filterForm.values["first_air_date.gte"]
                                }
                              />
                              <Switch
                                name="include_null_first_air_dates"
                                label="Show results with no first air date."
                                colorScheme="red"
                                mr={2}
                              />
                            </VStack>
                          ) : (
                            <VStack spacing={3} textAlign={"left"} mb={3}>
                              <DatePicker
                                name={"air_date.gte"}
                                label={"From"}
                                maxDate={filterForm.values["air_date.lte"]}
                              />
                              <DatePicker
                                name={"air_date.lte"}
                                label={"To"}
                                minDate={filterForm.values["air_date.gte"]}
                              />
                            </VStack>
                          )}
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

export default ShowsFilter;
