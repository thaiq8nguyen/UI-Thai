import "@fortawesome/fontawesome-free/js/all"
import "./styles/index.less"

import Header from "./components/Header/Header.js";
import Card from "./components/Card/Card.js";

const headerContainer = document.querySelector(".header");
const cardContainer = document.querySelector(".card-container");

new Header(headerContainer);
new Card(cardContainer);