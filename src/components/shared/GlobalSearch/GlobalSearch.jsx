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
import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import { createSearchParams, useNavigate } from "react-router-dom";
import { globalSearchCategories } from "../../../constants/appConstants";
import ButtonGroupRadio from "../Form/ButtonGroupRadio";
import TextInput from "../Form/TextInput";

const GlobalSearch = ({ usedAtHome }) => {
  const [showGlobalSearch, setShowGlobalSearch] = useState(false);
  const navigate = useNavigate();
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
    onSubmit: (values) => {
      if (!values.searchTerm)
        globalSearch.setFieldError(
          "searchTerm",
          "Please enter some search text."
        );
      else {
        navigate(
          `/discover/${values.searchCategory}?${createSearchParams({
            q: values.searchTerm,
          })}`
        );
        if (!usedAtHome) closeSearch();
      }
    },
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
        <ModalContent maxW={"95%"} w={"container.sm"}>
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
