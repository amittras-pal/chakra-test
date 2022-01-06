import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Button,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  Text,
} from "@chakra-ui/react";
import { FormikProvider, useFormik } from "formik";
import React from "react";
import { MdCheck, MdExpandLess, MdExpandMore } from "react-icons/md";
import { MOVIE_SORT_MODES } from "../../../constants/appConstants";
import ChipSelectionList from "../../shared/Form/ChipSelectionList";
import RangeSlider from "../../shared/Form/RangeSlider";
import SelectDropdown from "../../shared/Form/SelectDropdown";
import Switch from "../../shared/Form/Switch";

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
                        alignItems={"center"}
                        p={3}>
                        <Text m={0} fontWeight={"bold"}>
                          Filter
                        </Text>
                        {isExpanded ? <MdExpandLess /> : <MdExpandMore />}
                      </AccordionButton>
                      <AccordionPanel p={3}>
                        <ChipSelectionList
                          name="with_genres"
                          options={genreList.map((g) => ({
                            ...g,
                            id: String(g.id),
                          }))}
                          label="Genres"
                        />
                        <RangeSlider
                          label={"Average User Vote"}
                          min={0}
                          max={10}
                          step={0.5}
                          minStepsBetweenThumbs={0.5}
                          name_1={"vote_average.gte"}
                          name_2={"vote_average.lte"}
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
          {/* {JSON.stringify(filterForm.values)} */}
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
