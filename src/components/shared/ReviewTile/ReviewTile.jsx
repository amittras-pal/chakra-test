import {
  Avatar,
  Box,
  Divider,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { DateTime } from "luxon";
import React, { useState } from "react";
import thumb from "../../../resources/image-thumb.svg";

function ReviewTile({ review, config }) {
  const dividerColor = useColorModeValue("gray.300", "gray.600");
  const linkColor = useColorModeValue("yellow.600", "yellow.500");
  const tileColor = useColorModeValue("gray.100", "gray.700");

  const [showAll, setShowAll] = useState(false);

  const getAuthorAvatarPath = () => {
    if (!review.author_details.avatar_path) return thumb;
    else if (review.author_details.avatar_path?.includes("http"))
      return review.author_details.avatar_path?.substr(1);
    else
      return (
        config?.data?.images?.secure_base_url +
        "w45" +
        review.author_details.avarat_path
      );
  };
  return (
    <Box mb={4} boxShadow={"lg"} rounded={"lg"} bgColor={tileColor}>
      <Flex
        p={3}
        width={"full"}
        minHeight={16}
        alignItems={"center"}
        borderBottom={"thin"}>
        <Avatar name={review.author} src={getAuthorAvatarPath()} />
        <Divider orientation="vertical" mx={4} borderColor={dividerColor} />
        <Box>
          <Text fontWeight={"bold"}>{review.author}</Text>
          <Text fontSize={"xs"} fontStyle={"italic"} textColor={"gray.500"}>
            {DateTime.fromISO(review.created_at).toLocaleString(
              DateTime.DATE_MED
            )}
          </Text>
        </Box>
      </Flex>
      <Divider borderColor={dividerColor} />
      <Box p={3}>
        <Text whiteSpace={"pre-wrap"}>
          <Text as="span">
            {showAll
              ? `${review.content} `
              : `${review.content.slice(0, 200)}... `}
          </Text>
          {review.content.length > 200 && (
            <Text
              as="span"
              role={"button"}
              tabIndex={0}
              onClick={() => setShowAll(!showAll)}
              textDecoration={"underline"}
              textColor={linkColor}
              cursor={"pointer"}>
              {showAll ? "show less" : "show the rest"}
            </Text>
          )}
        </Text>
      </Box>
    </Box>
  );
}

export default ReviewTile;
