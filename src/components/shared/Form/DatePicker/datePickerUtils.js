import { Flex } from "@chakra-ui/react";
import {
  MdCalendarToday,
  MdChevronLeft,
  MdChevronRight,
  MdClose,
  MdSkipNext,
  MdSkipPrevious,
} from "react-icons/md";

export const staticDatepickerProps = {
  showWeekNumbers: false,
  showNeighboringMonth: false,
  showLeadingZeros: true,
};

export const datepickerIconProps = {
  nextLabel: (
    <Flex w={"100%"} h={"100%"} justifyContent={"center"} alignItems={"center"}>
      <MdChevronRight />
    </Flex>
  ),
  next2Label: (
    <Flex w={"100%"} h={"100%"} justifyContent={"center"} alignItems={"center"}>
      <MdSkipNext />
    </Flex>
  ),
  prev2Label: (
    <Flex w={"100%"} h={"100%"} justifyContent={"center"} alignItems={"center"}>
      <MdSkipPrevious />
    </Flex>
  ),
  prevLabel: (
    <Flex w={"100%"} h={"100%"} justifyContent={"center"} alignItems={"center"}>
      <MdChevronLeft />
    </Flex>
  ),
  calendarIcon: <MdCalendarToday />,
  clearIcon: <MdClose />,
};
