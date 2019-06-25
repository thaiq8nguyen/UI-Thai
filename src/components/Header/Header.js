
class Header {
    constructor(headerElement, sideMenu) {
        this.headerElement =  headerElement;
        this.sideMenu = sideMenu;
        this.navBar = headerElement.querySelector(".nav-bar");
        this.sideMenuToggle = headerElement.querySelector(".side-menu-toggle");
        this.sideMenuToggle.addEventListener("click", () => {
            this.openSideMenu();
        })
        
    }

    openSideMenu() {
        document.body.style.backgroundColor = "#2e3842";
        this.sideMenu.style.width = "35rem";
        
    }
}


    
export default Header;