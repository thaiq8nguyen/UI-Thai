class SideMenu {
    constructor(sideMenu) {
        this.sideMenu = sideMenu;
        console.log(sideMenu.classList);
        this.closeSideMenuBtn = this.sideMenu.querySelector(".close-side-menu-btn");
        console.log(this.closeSideMenuBtn);
        this.closeSideMenuBtn.addEventListener("click", () => {
            
            this.close();
        })
    }

    close() {
        this.sideMenu.style.width = "0";
    }

}

export default SideMenu;