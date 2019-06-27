class Member {
    constructor(memberElement) {
        this.element = memberElement;
        //this.memberProfile = document.querySelector(this.element);
        this.name = this.element.querySelector(".name");
        this.image = this.element.querySelector("img");
        this.jobTitle = this.element.querySelector(".job-title");
        this.briefBio = this.element.querySelector(".brief-bio");
        this.onlinePresences = this.element.querySelectorAll(".fab");
        this.iConClasses = [];
        this.onlinePresences.forEach(onlinePresence => {
            this.iConClasses.push(onlinePresence.classList);
        })
        this.element.addEventListener("click", () => {
            this.openProfilePanel();
        })

        
    }
    openProfilePanel() {
        new MemberProfilePanel(
            {
                name: this.name.textContent, 
                image: this.image.src,
                jobTitle: this.jobTitle.textContent,
                briefBio: this.briefBio.textContent,
                onlinePresences: this.iConClasses
            }
        )
    }
}

class MemberProfilePanel {
    constructor(memberProfile) {
        this.profile = memberProfile;
        this.profilePanel = document.querySelector(".member-profile-panel");
        this.closeBtn = this.profilePanel.querySelector(".close-panel-btn");
        this.image = this.profilePanel.querySelector(".image");
        this.name = this.profilePanel.querySelector(".name");
        this.jobTitle = this.profilePanel.querySelector(".job-title");
        this.briefBio = this.profilePanel.querySelector(".brief-bio");
        this.panelFooter = this.profilePanel.querySelector(".panel-footer");
        
        this.image.src = this.profile.image;
        
        this.name.textContent = this.profile.name;
        this.jobTitle.textContent = this.profile.jobTitle;
        this.briefBio.textContent = this.profile.briefBio;

        let onlinePresenceTemplate = ""

        for(let i = 0; i < this.profile.onlinePresences.length; i++) {
            onlinePresenceTemplate += `<a href="#">
            <i class="${ this.profile.onlinePresences[i]}"></i></a>`;
            
        }
        

        this.panelFooter.innerHTML= onlinePresenceTemplate;
        this.profilePanel.classList.add("member-profile-panel-slide-up");

        this.closeBtn.addEventListener("click", () => {
            this.close();
        })
    }

    close() {
        this.profilePanel.classList.remove("member-profile-panel-slide-up");   
    }
}

export default Member;