import { MdHome, MdInfo, MdLiveTv, MdMovie } from "react-icons/md";
// File is unused, let's find a way to make this work too.
const routerMenu = [
  {
    sectionId: 1,
    sectionHeader: "Explore",
    sectionItems: [
      { routeLabel: "Home", routeIcon: MdHome, routePath: "/" },
      { routeLabel: "Movies", routeIcon: MdMovie, routePath: "/movie" },
      { routeLabel: "TV", routeIcon: MdLiveTv, routePath: "/tv" },
    ],
  },
  {
    sectionId: 2,
    sectionHeader: "About",
    sectionItems: [
      { routeLabel: "About", routeIcon: MdInfo, routePath: "/about" },
    ],
  },
];

export default routerMenu;
