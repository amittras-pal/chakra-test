import {
  Box,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  HStack,
  IconButton,
  List,
  ListIcon,
  ListItem,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { MdDarkMode, MdLightMode, MdMenu } from "react-icons/md";
import { Link as RouteLink } from "react-router-dom";
import routerMenu from "../../constants/routerMenu";

function AppHeader() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "red.900")} px={4}>
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
          <IconButton
            size={"sm"}
            icon={colorMode === "light" ? <MdDarkMode /> : <MdLightMode />}
            aria-label={"Change Color Theme"}
            onClick={toggleColorMode}
          />
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
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default AppHeader;
