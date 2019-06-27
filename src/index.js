import "@fortawesome/fontawesome-free/js/all"
import "./styles/index.less"

import Header from "./components/Header/Header.js";
import SideMenu from "./components/SideMenu/SideMenu.js";
import Carousel from "./components/Carousel/Carousel.js";
import Card from "./components/Card/Card.js";

const headerContainer = document.querySelector(".header");
const sideMenuContainer = document.querySelector(".side-menu");
const carouselContainer = document.querySelector(".carousel");
const cards = document.querySelectorAll(".cards");

new Header(headerContainer, sideMenuContainer);
new SideMenu(sideMenuContainer);
new Carousel(carouselContainer);

cards.forEach(card => new Card(card));

