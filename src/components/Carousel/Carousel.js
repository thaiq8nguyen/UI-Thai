class Carousel {
    constructor(carouselElement) {

        this.element = carouselElement;
        
        
        this.images = this.element.querySelectorAll(".images");

        this.imagesArray = Array.from(this.images);

        this.currentImage = this.imagesArray[0];

        this.currentIndex = this.imagesArray.indexOf(this.currentImage);

        this.imagesLength = this.imagesArray.length;


        this.leftBtn = this.element.querySelector(".left-button");
        this.rightBtn = this.element.querySelector(".right-button");

        this.leftBtn.addEventListener("click", () => {
            this.left();
        });

        this.rightBtn.addEventListener("click", () => {
            this.right();    
        })
    }

    left() {
        this.images[this.currentIndex].className = "images"

        if(this.currentIndex === 0) {
            
            this.currentIndex = this.imagesLength - 1;
      
        } else {
            this.currentIndex--;
            
        }

        this.images[this.currentIndex].classList.add("slide-left");
    }

    right() {
        this.images[this.currentIndex].className = "images"

        if(this.currentIndex === this.imagesLength - 1 ) {

            this.currentIndex = 0;

        } else {

            this.currentIndex++;
        }

        this.images[this.currentIndex].classList.add("slide-right");
    }
}

export default Carousel;