
class Header {
    constructor(headerElement) {
        this.headerElement =  headerElement;
        this.navBar = headerElement.querySelector(".nav-bar");
        this.navToggle = headerElement.querySelector(".nav-toggle");
        //this.navToggle.classList.add("fas", "fa-bars");
        this.navToggle.addEventListener("click", () => {
            this.toggleNavMenu();
        })
    }

    toggleNavMenu() {
        console.log(this.navBar)
        this.navBar.classList.toggle("nav-bar-open");

    }
}

export default Header;