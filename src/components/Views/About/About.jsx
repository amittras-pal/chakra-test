import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { MdMail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { ReactComponent as TMDB } from "../../../resources/tmdb.svg";
import { setPageTitle } from "../../../utils/utils";

function About() {
  setPageTitle("About");

  return (
    <Container maxW={"container.xl"} py={4}>
      <Box py={2} my={2}>
        <Heading size={"lg"} fontWeight={"normal"}>
          What is ShowSurfer?
        </Heading>
      </Box>
      <Text>
        ShowSurfer is a place for searching movies, tv shows and people related
        to the showbiz. You can find popular movies, filter them based on your
        preferences and look for cast and crew in most of the items. The
        application was built as an experiment to test the capabilities and
        accessibility of{" "}
        <Link
          href="https://chakra-ui.com/"
          target={"_blank"}
          textColor={useColorModeValue("red.500", "red.200")}>
          Chakra UI components Library
        </Link>
        .
      </Text>
      <Box py={2} my={2}>
        <Heading size={"lg"} fontWeight={"normal"}>
          Where is the data sourced from?
        </Heading>
      </Box>
      <Text>
        All the data available on this application is sourced form{" "}
        <Link
          href="https://www.themoviedb.org/"
          target={"_blank"}
          textColor={useColorModeValue("red.500", "red.200")}>
          themoviedb.org.{" "}
        </Link>
        Showsurfer uses{" "}
        <Link
          href="https://developers.themoviedb.org/3/getting-started/introduction"
          target={"_blank"}
          textColor={useColorModeValue("red.500", "red.200")}>
          themoviedb.org API{" "}
        </Link>
        to retrieve and show all the information
      </Text>
      <Flex justifyContent={"center"}>
        <TMDB style={{ width: "25%", margin: "1rem" }} />
      </Flex>
      <Box
        py={2}
        my={2}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}>
        <Heading size={"lg"} fontWeight={"normal"}>
          Can I see the source code?
        </Heading>
      </Box>
      <Text>
        ShowSurfer is a{" "}
        <Link
          href="https://reactjs.org/"
          target={"_blank"}
          textColor={useColorModeValue("red.500", "red.200")}>
          React.js
        </Link>{" "}
        application built with quite a few additional libraries which support
        various parts of the application including switching between views,
        getting data from the datasource, and this awesome and interactive user
        interface. The source code is available on{" "}
        <Link
          href="https://github.com/amittras-pal/chakra-test"
          target={"_blank"}
          textColor={useColorModeValue("red.500", "red.200")}>
          github
        </Link>
        .
      </Text>
      <Box
        py={2}
        my={2}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}>
        <Heading size={"lg"} fontWeight={"normal"}>
          Developer's contact?
        </Heading>
      </Box>
      <Flex gap={6}>
        <Button
          variant={"ghost"}
          as={Link}
          href="https://www.linkedin.com/in/amittras-pal"
          target={"_blank"}
          textColor={"blue.400"}>
          <FaLinkedin style={{ fontSize: "24px" }} />
        </Button>
      </Flex>
    </Container>
  );
}

export default About;
