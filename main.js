const d = document;



const carouselSlide = d.querySelector('.carousel-slide')
const carouselImages = d.querySelectorAll('.carousel-slide img')
let size = carouselSlide.clientWidth




/* Buttons */

const prevBtn = d.getElementById('prevBtn')
const nextBtn = d.getElementById('nextBtn')


/* Counter */

let counter = 1;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
let intervalSlide = '';

const nextSlide = () => {
    if (counter >= carouselImages.length -1 ) return;
    carouselSlide.style.transition = "transform .6s ease-in-out"
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}
const prevSlide = () => {
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform .6s ease-in-out"
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}






nextBtn.addEventListener("click", () => {
    nextSlide()
    
})

prevBtn.addEventListener("click", () => {
    prevSlide()
    
})

carouselSlide.addEventListener("transitionend", () => {

    if(carouselImages[counter].id === 'lastClone'){

        carouselSlide.style.transition = "none";
        counter = carouselImages.length -2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if(carouselImages[counter].id === 'firstClone'){

        carouselSlide.style.transition = "none";
        counter = carouselImages.length -counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
 
})