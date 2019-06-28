import axios from "axios";

class Card {
    constructor(cardElement) {
        this.element = cardElement;
        if(this.element.getAttribute("id") === "current-donation") {
            this.getCurrentDonation();
        }

    }

    async getCurrentDonation() {
        try {

            const totalDonationAmounts = await axios.get("https://donor-manage-bw.herokuapp.com/api/donations/total");
            
            const totalDonationCounts = await axios.get("https://donor-manage-bw.herokuapp.com/api/donations/count");

            const totalDonorCounts = await axios.get("https://donor-manage-bw.herokuapp.com/api/donor/count")

            this.displayDonations([totalDonationAmounts, totalDonationCounts, totalDonorCounts])

        } catch(error) {
            this.displayError(error);   
        }
        
        
    }

    displayDonations(rawDonations) {
        const dataContainer = this.element.querySelector(".data-content");
        const names = ["Total Donation Amounts", "Total Donation Counts", "Total Donor Counts"];

        let template = "";
        
        let donations = rawDonations.map((rawDonation, index) => {
            
            if(index === 0) {
                return "$" + this.formatNumber(rawDonation.data.total)
            } else {
                return rawDonation.data.total;  
            }

        })


        donations.forEach((donation, index) => {
            template += `<div class="donations">
            <span class="names">${names[index]}</span>
            <span class="stats">${donation}</span>
            </div>`    
        })
        
        dataContainer.innerHTML = template;
        
    }

    displayError(error) {
        const dataContainer = this.element.querySelector(".data-content");
        const errorTemplate = `<div class="donation-error">
        <h2>Errors have occured while retrieving server data</h2>
        </div>`;

        dataContainer.innerHTML = errorTemplate;
        
        
    }

    formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
}

export default Card;