import "@fortawesome/fontawesome-free/js/all"
import "./styles/index.less"

import Header from "./components/Header/Header.js";
import SideMenu from "./components/SideMenu/SideMenu.js";

const headerContainer = document.querySelector(".header");
const sideMenuContainer = document.querySelector(".side-menu");

new Header(headerContainer, sideMenuContainer);
new SideMenu(sideMenuContainer);