import React from "react";
import {
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { nFormatter } from "../../../../utils/utils";
import ImageGallery from "./MediaCarousels/ImageGallery";
import VideoGallery from "./MediaCarousels/VideoGallery";

function Media({ data, type }) {
  const findDefaultIndex = () => {
    return [
      data?.videos?.results.filter((vid) => vid.site === "YouTube").length,
      data?.images?.posters.length,
      data?.images?.backdrops.length,
    ].findIndex((item) => item > 0);
  };

  return (
    <Box mb={6}>
      <Tabs
        isFitted
        isLazy
        colorScheme={"red"}
        defaultIndex={findDefaultIndex()}>
        <TabList>
          <Tab
            isDisabled={
              !data?.videos?.results.filter((vid) => vid.site === "YouTube")
                .length
            }
            px={2}>
            <Text whiteSpace={"nowrap"} fontSize={["sm", "md"]}>
              Videos (
              {nFormatter(
                data?.videos?.results.filter((vid) => vid.site === "YouTube")
                  .length,
                1
              )}
              )
            </Text>
          </Tab>
          <Tab isDisabled={!data?.images?.posters.length} px={2}>
            <Text whiteSpace={"nowrap"} fontSize={["sm", "md"]}>
              Posters ({nFormatter(data?.images?.posters.length, 1)})
            </Text>
          </Tab>
          <Tab isDisabled={!data?.images?.backdrops.length} px={2}>
            <Text whiteSpace={"nowrap"} fontSize={["sm", "md"]}>
              Backdrops ({nFormatter(data?.images?.backdrops.length, 1)})
            </Text>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel p={0}>
            <VideoGallery
              videos={data?.videos?.results.filter(
                (vid) => vid.site === "YouTube"
              )}
            />
          </TabPanel>
          <TabPanel p={0}>
            <ImageGallery
              imageList={data?.images?.posters}
              galleryType={"poster"}
            />
          </TabPanel>
          <TabPanel p={0}>
            <ImageGallery
              imageList={data?.images?.backdrops}
              galleryType={"backdrop"}
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default Media;
