import {
  Box,
  Button,
  IconButton,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import { globalSearchCategories } from "../../../constants/appConstants";
import ButtonGroupRadio from "../Form/ButtonGroupRadio";
import TextInput from "../Form/TextInput";

const GlobalSearch = ({ usedAtHome }) => {
  const [showGlobalSearch, setShowGlobalSearch] = useState(false);
  const openSearch = () => {
    setShowGlobalSearch(true);
  };
  const closeSearch = () => {
    globalSearch.handleReset();
    setShowGlobalSearch(false);
  };

  const globalSearch = useFormik({
    initialValues: {
      searchTerm: "",
      searchCategory: globalSearchCategories[0].value,
    },
    validationSchema: Yup.object({
      searchTerm: Yup.string().required("Please enter some text."),
    }),
    onSubmit: (values) => console.log(values),
  });

  return (
    <>
      {usedAtHome ? (
        <Button
          colorScheme={"red"}
          mx={"auto"}
          leftIcon={<MdSearch />}
          size={"lg"}
          onClick={openSearch}>
          Search Something
        </Button>
      ) : (
        <IconButton icon={<MdSearch />} size={"sm"} onClick={openSearch} />
      )}

      <Modal isOpen={showGlobalSearch} onClose={closeSearch}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Search Movies, TV or People</ModalHeader>
          <FormikProvider value={globalSearch}>
            <form onSubmit={globalSearch.handleSubmit}>
              <ModalBody>
                <Box mb={4} display={"flex"}>
                  <ButtonGroupRadio
                    name="searchCategory"
                    form={globalSearch}
                    options={globalSearchCategories}
                  />
                </Box>
                <TextInput
                  size={"sm"}
                  borderRadius={"md"}
                  type="text"
                  name="searchTerm"
                  placeholder={`Search ${
                    globalSearchCategories.find(
                      (cat) => cat.value === globalSearch.values.searchCategory
                    ).textFormLabel
                  } in themoviedb...`}
                  autoFocus={true}
                />
              </ModalBody>
              <ModalFooter borderTop={"thin"}>
                <Button
                  type="button"
                  variant={"ghost"}
                  size={"sm"}
                  mr={3}
                  onClick={closeSearch}>
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={!globalSearch.isValid}
                  size={"sm"}
                  variant={"solid"}
                  colorScheme={"red"}>
                  Search
                </Button>
              </ModalFooter>
            </form>
          </FormikProvider>
        </ModalContent>
      </Modal>
    </>
  );
};

export default GlobalSearch;
