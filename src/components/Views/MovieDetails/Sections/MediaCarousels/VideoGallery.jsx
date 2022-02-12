import { Flex, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import YouTube from "react-youtube";
import "./gallery.scss";

function VideoGallery({ videos }) {
  const [currentVid, setCurrentVid] = useState(0);
  return (
    <>
      <Flex w={"full"} height={["18rem", "28rem"]}>
        <YouTube
          videoId={videos?.[currentVid].key}
          containerClassName="video-frame-container"
          opts={{ height: "100%", width: "100%" }}
        />
      </Flex>
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        py={2}
        borderTopWidth={"1px"}>
        <IconButton
          icon={<MdKeyboardArrowLeft />}
          colorScheme={"red"}
          variant={"solid"}
          rounded={"full"}
          size={"sm"}
          isDisabled={currentVid === 0}
          onClick={() => setCurrentVid(currentVid - 1)}
        />
        <Text fontSize={"sm"}>
          <Text as={"span"} fontWeight={"bold"} mr={2}>
            {currentVid + 1}
          </Text>
          <Text as={"span"} mr={2}>
            of
          </Text>
          <Text as={"span"} fontWeight={"bold"}>
            {videos.length}
          </Text>
        </Text>
        <IconButton
          icon={<MdKeyboardArrowRight />}
          colorScheme={"red"}
          variant={"solid"}
          rounded={"full"}
          size={"sm"}
          isDisabled={currentVid === videos.length - 1}
          onClick={() => setCurrentVid(currentVid + 1)}
        />
      </Flex>
    </>
  );
}

export default VideoGallery;
