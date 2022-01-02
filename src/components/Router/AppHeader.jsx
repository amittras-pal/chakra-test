import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  HStack,
  IconButton,
  List,
  ListIcon,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import {
  MdArrowDropDown,
  MdDarkMode,
  MdHome,
  MdInfo,
  MdLightMode,
  MdLocalFireDepartment,
  MdMenu,
  MdOfflineBolt,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";

function AppHeader() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();

  const navigateToDiscover = (type, sort_by) => {
    navigate(`/discover/${type}`, { state: { sort_by } });
    if (isOpen) onClose();
  };

  const navigateToHome = () => {
    navigate("/");
    if (isOpen) onClose();
  };

  return (
    <>
      <Box
        bg={useColorModeValue("gray.200", "red.800")}
        px={4}
        position={"sticky"}
        top={0}
        zIndex={100}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack alignItems={"center"} spacing={4}>
            <IconButton
              size={"sm"}
              variant={"ghost"}
              icon={
                <MdMenu
                  style={{
                    transform: "translateX(65%)",
                  }}
                />
              }
              display={{
                md: "none",
              }}
              aria-label={"Open Menu"}
              onClick={isOpen ? onClose : onOpen}
            />
            <Heading as="h1" fontWeight={"normal"} size={"md"}>
              ShowSurfer.
            </Heading>
          </HStack>
          <HStack alignItems={"center"} spacing={2}>
            <Box display={{ base: "none", md: "block" }}>
              <Menu>
                <MenuButton
                  as={Button}
                  size={"sm"}
                  rightIcon={<MdArrowDropDown />}>
                  Movies
                </MenuButton>
                <MenuList maxW={"fit-content"}>
                  <MenuItem
                    onClick={() =>
                      navigateToDiscover("movie", "popularity.desc")
                    }>
                    Popular
                  </MenuItem>
                  <MenuItem
                    onClick={() =>
                      navigateToDiscover("movie", "release_date.desc")
                    }>
                    Latest
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
            <IconButton
              size={"sm"}
              icon={colorMode === "light" ? <MdDarkMode /> : <MdLightMode />}
              aria-label={"Change Color Theme"}
              onClick={toggleColorMode}
            />
          </HStack>
        </Flex>
      </Box>
      <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader
            borderBottomWidth={"1px"}
            display={"flex"}
            alignItems={"center"}>
            <Heading size={"sm"}>ShowSurfer.</Heading>
            <DrawerCloseButton />
          </DrawerHeader>
          <DrawerBody p={0}>
            <List>
              <ListItem p={3} onClick={navigateToHome}>
                <ListIcon as={MdHome} />
                Home
              </ListItem>
            </List>
            <Accordion allowToggle defaultIndex={[0]}>
              <AccordionItem>
                <AccordionButton
                  disabled
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}>
                  <Text m={0} fontWeight={"bold"}>
                    Movies
                  </Text>
                </AccordionButton>
                <AccordionPanel p={0}>
                  <List>
                    <ListItem
                      p={3}
                      onClick={() =>
                        navigateToDiscover("movie", "popularity.desc")
                      }>
                      <ListIcon as={MdLocalFireDepartment} />
                      Popular
                    </ListItem>
                    <ListItem
                      p={3}
                      onClick={() =>
                        navigateToDiscover("movie", "release_date.desc")
                      }>
                      <ListIcon as={MdOfflineBolt} />
                      Latest
                    </ListItem>
                  </List>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            <List>
              <ListItem p={3}>
                <ListIcon as={MdInfo} />
                About
              </ListItem>
            </List>
          </DrawerBody>
          <DrawerFooter
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            borderTopWidth={"1px"}>
            <Text colorScheme={"red"} size="sm">
              Powered By: themoviedb.org
            </Text>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default AppHeader;
