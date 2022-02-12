import { CircularProgress, Flex, IconButton, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {
  MdCloudDownload,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { useApiConfig } from "../../../../hooks/configuration.query";
import { createImageUrl, downloadImage } from "../../../../utils/utils";

function ImageGallery({ imageList, galleryType }) {
  const [currentImg, setCurrentImg] = useState(0);
  const [image, setImage] = useState(null);

  const { data: config } = useApiConfig();

  useEffect(() => {
    setImage(null);
    const imgUrl = createImageUrl(
      "original",
      galleryType,
      config,
      imageList?.[currentImg].file_path
    );
    if (imgUrl) {
      fetch(imgUrl)
        .then((data) => data.blob())
        .then((src) => {
          const localUrl = URL.createObjectURL(src);
          setImage(`url(${localUrl})`);
        });
    }
  }, [config, galleryType, currentImg, imageList]);

  const download = () => {
    downloadImage(
      createImageUrl(
        "original",
        galleryType,
        config,
        imageList?.[currentImg].file_path
      ),
      imageList?.[currentImg].file_path.substr(1)
    );
  };

  return (
    <>
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        py={0}
        px={2}
        w={"full"}
        height={["18rem", "28rem"]}
        bgImage={image}
        bgSize={"contain"}
        bgRepeat={"no-repeat"}
        bgPosition={"center"}>
        <Flex w={"2.2rem"} alignItems={"center"} justifyContent={"center"}>
          <IconButton
            onClick={() => setCurrentImg(currentImg - 1)}
            isDisabled={currentImg === 0}
            size={"md"}
            rounded={"full"}
            variant={"solid"}
            colorScheme={"red"}
            fontSize={"xl"}
            icon={<MdKeyboardArrowLeft />}
          />
        </Flex>
        {!image && (
          <CircularProgress
            trackColor="none"
            size={"80px"}
            isIndeterminate
            capIsRound
            color="red.400"
          />
        )}
        <Flex w={"2.2rem"} alignItems={"center"} justifyContent={"center"}>
          <IconButton
            onClick={() => setCurrentImg(currentImg + 1)}
            isDisabled={currentImg === imageList.length - 1}
            size={"md"}
            rounded={"full"}
            variant={"solid"}
            colorScheme={"red"}
            fontSize={"xl"}
            icon={<MdKeyboardArrowRight />}
          />
        </Flex>
      </Flex>
      <Flex
        width={"full"}
        py={2}
        px={4}
        justifyContent={"space-between"}
        alignItems={"center"}
        borderTopWidth={"1px"}>
        <Text fontSize={"sm"}>
          <Text as={"span"} fontWeight={"bold"} mr={2}>
            {currentImg + 1}
          </Text>
          <Text as={"span"} mr={2}>
            of
          </Text>
          <Text as={"span"} fontWeight={"bold"}>
            {imageList.length}
          </Text>
        </Text>
        <IconButton
          icon={<MdCloudDownload />}
          colorScheme={"red"}
          variant={"ghost"}
          size={"sm"}
          onClick={download}
        />
      </Flex>
    </>
  );
}

export default ImageGallery;
