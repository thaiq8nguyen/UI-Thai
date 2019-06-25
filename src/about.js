import "@fortawesome/fontawesome-free/js/all"
import "./styles/about.less"

import Header from "./components/Header/Header.js";
import SideMenu from "./components/SideMenu/SideMenu.js";
import Team from "./components/Team/Team.js";

const headerContainer = document.querySelector(".header");
const sideMenuContainer = document.querySelector(".side-menu");
const teamContainer = document.querySelector(".team");

new Header(headerContainer, sideMenuContainer);
new SideMenu(sideMenuContainer);
new Team(teamContainer);