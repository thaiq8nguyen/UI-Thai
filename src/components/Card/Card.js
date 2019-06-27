
class Card {
    constructor(cardElement) {
        this.element = cardElement;
        if(this.element.getAttribute("id") === "donate-today") {
            //this.animateDonateToday();
        }

    }

    animateDonateToday() {
        const header = this.element.querySelector("h1");
        header.style.borderTop = "0.4rem solid trasparent";
    }
}

export default Card;