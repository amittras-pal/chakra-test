import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
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
  MdLightMode,
  MdMenu,
} from "react-icons/md";
import { Link as RouteLink, useNavigate } from "react-router-dom";
import routerMenu from "../../constants/routerMenu";

function AppHeader() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();

  const navigateToDiscover = (type, sort_by) => {
    navigate(`/discover/${type}`, { state: { sort_by } });
  };

  return (
    <>
      <Box
        bg={useColorModeValue("gray.200", "red.900")}
        px={4}
        position={"sticky"}
        top={0}
        zIndex={100}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack alignItems={"center"} spacing={4}>
            <IconButton
              size={"sm"}
              icon={<MdMenu />}
              aria-label={"Open Menu"}
              onClick={isOpen ? onClose : onOpen}
            />
            <Heading as="h1" fontWeight={"normal"} size={"md"}>
              ShowSurfer.
            </Heading>
          </HStack>
          <HStack alignItems={"center"} spacing={2}>
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
          <DrawerHeader borderBottomWidth={"1px"}>ShowSurfer.</DrawerHeader>
          <DrawerBody p={0}>
            <List>
              {routerMenu.map((section) => (
                <React.Fragment key={section.sectionId}>
                  {section.sectionItems.map((link) => (
                    <RouteLink
                      to={link.routePath}
                      key={link.routePath}
                      onClick={onClose}>
                      <ListItem
                        p={4}
                        display={"flex"}
                        alignItems={"center"}
                        _hover={{
                          bg: colorMode === "light" ? "gray.200" : "gray.600",
                        }}
                        cursor={"pointer"}>
                        <ListIcon as={link.routeIcon} mr={4} />{" "}
                        {link.routeLabel}
                      </ListItem>
                    </RouteLink>
                  ))}
                  <Divider />
                </React.Fragment>
              ))}
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
