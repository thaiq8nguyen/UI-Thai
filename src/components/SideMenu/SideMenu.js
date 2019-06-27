class SideMenu {
    constructor(sideMenu) {
        this.sideMenu = sideMenu;
        this.closeSideMenuBtn = this.sideMenu.querySelector(".close-side-menu-btn");
        this.closeSideMenuBtn.addEventListener("click", () => {
            
            this.close();
        })
    }

    close() {
        this.sideMenu.style.width = "0";
    }

}

export default SideMenu;