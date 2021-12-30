import { MdHome, MdLiveTv, MdMovie } from "react-icons/md";

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
];

export default routerMenu;
