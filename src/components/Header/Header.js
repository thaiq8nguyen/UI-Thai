
class Header {
    constructor(headerElement, sideMenu) {
        this.headerElement =  headerElement;
        this.sideMenu = sideMenu;
        this.navBar = headerElement.querySelector(".nav-bar");
        this.navLinks = this.navBar.querySelectorAll(".nav-link");

        this.sideMenuToggle = headerElement.querySelector(".side-menu-toggle");
        this.sideMenuToggle.addEventListener("click", () => {
            this.openSideMenu();
        })

        this.pagePath = window.location.pathname;
        this.pageName = this.pagePath.substring(this.pagePath.lastIndexOf('/') + 1);

        this.setCurrentLink(this.pageName);
        
        
    }

    openSideMenu() {
        this.sideMenu.style.width = "35rem";
        
    }
    setCurrentLink(pageName) {
        const links = Array.from(this.navLinks);
        let attr = [];

        links.forEach(link => {
            if(link.getAttribute("href") === this.pageName) {

                link.style.borderBottom = "0.1rem solid white"
            }
        })
    }
}


    
export default Header;